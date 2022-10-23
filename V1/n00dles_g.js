/** @param {NS} ns **/
export async function main(ns) {
	//	user input arguments: 1) n00dles, 2) amt to hack in decimal %, 3) max ram to use 4) a number to prevent multiple runs of this file from stepping on each other.
	var n00dles = ns.args[0];
	var hammerpercent = ns.args[1];
	var SerMaxRAMAvail = ns.args[2];
	var iteration = ns.args[3];
	var SerMaxMoney = ns.getServerMaxMoney(n00dles);
	var constantGrowthRate = ns.getServerGrowth(n00dles);
	var hackMultiArray = ns.getHackingMultipliers(); // this adds 4gb to the script!!!
	var playerHackingGrowMult = hackMultiArray.growth
	var bitnodeGrowMult = 1;
	//unadjusted server growth rate, this is way more than what you actually get
	var unadjustedGrowthRate = 1.03;
	//max server growth rate, growth rates higher than this are throttled.
	var maxGrowthRate = 1.0035;
	var StartMoney = ns.getServerMoneyAvailable(n00dles);
	while (StartMoney < SerMaxMoney || ns.getServerSecurityLevel(n00dles) > ns.getServerMinSecurityLevel(n00dles)) {
		ns.run("grow.js", 2500, n00dles, iteration);
		ns.run("weak.js", 1000, n00dles, iteration);
		await ns.sleep(ns.getWeakenTime(n00dles) + 2000);
		if (ns.getServerMoneyAvailable(n00dles) > SerMaxMoney * .9 && ns.getServerSecurityLevel(n00dles) < ns.getServerMinSecurityLevel(n00dles) + 1) {
			break;
		}
	}
	StartMoney = ns.getServerMoneyAvailable(n00dles);
	var hitsperhack = Math.floor(ns.getHackTime(n00dles) / 1000);
	ns.run("hack.js", 1, n00dles, iteration);
	await ns.sleep(ns.getHackTime(n00dles) + 500);
	var MoneyAvail = ns.getServerMoneyAvailable(n00dles);
	ns.tprint("money avail " + MoneyAvail);
	var hackthreads = Math.floor((ns.getServerMaxMoney(n00dles) * hammerpercent) / (StartMoney - MoneyAvail));
	ns.run("hack.js", hackthreads - 1, n00dles, iteration);
	ns.run("weak.js", Math.ceil((hackthreads * .002) / .05), n00dles, iteration);
	await ns.sleep(ns.getWeakenTime(n00dles) + 500);
	var adjGrowthRate = 1 + ((unadjustedGrowthRate - 1) / ns.getServerSecurityLevel(n00dles));
	adjGrowthRate = Math.min(maxGrowthRate, adjGrowthRate);
	var serverGrowthPercentage = constantGrowthRate / 100;
	//dodge a divide by zero just in case. This is the coefficient needed to max money.
	var neededToMax = SerMaxMoney / Math.max(ns.getServerMoneyAvailable(n00dles), 1);
	//this is the cycles needed not accounting for growth mults (bitnode/player) and growthPercentage yet.
	var cyclesNeeded = Math.log(neededToMax) / Math.log(adjGrowthRate);
	var growthreads = Math.ceil(cyclesNeeded / (serverGrowthPercentage * bitnodeGrowMult * playerHackingGrowMult));
	var weakthreads = Math.ceil((growthreads * .004 + hackthreads * .002) / .05);
	await ns.sleep(500);
	ns.tprint("Hits per Hack: " + hitsperhack);
	ns.tprint("Hack threads needed for " + hammerpercent + " is " + hackthreads);
	ns.tprint("Simulated Growth threads needed to max " + n00dles + " server is " + growthreads);
	var RAMusedPERiteration = 2.6 + (growthreads * 1.75) + (hackthreads * 1.7) + (weakthreads * 1.75);
	var RAMforFullrun = RAMusedPERiteration * hitsperhack;
	ns.tprint("RAM needed for max alotted: " + RAMforFullrun);
	if (hitsperhack * RAMusedPERiteration > SerMaxRAMAvail) {
		ns.tprint("Cannot run wide open - use ratio'd amount below or less.");
		var adjhack = Math.floor(RAMusedPERiteration / SerMaxRAMAvail * hackthreads);
		ns.tprint("Hack Threads: " + adjhack);
		var adjgrow = Math.floor(RAMusedPERiteration / SerMaxRAMAvail * growthreads);
		ns.tprint("Grow Threads: " + adjgrow);
	}
	await ns.sleep(100);
	ns.run("grow.js", growthreads, n00dles, iteration);
	ns.run("weak.js", Math.ceil((growthreads * .004) / .05), n00dles, iteration);

}