import { AllServers } from "/Function-Library/Functions.js"

/** @param {NS} ns */
const valid_ram = [...Array(20).keys()].map(i => 2 ** (i + 1));
const files = ["Hacking/HG.js"];

// Colors
	const red = "\u001b[38;5;009m";
	const blue = "\u001b[38;5;012m";
	const green = "\u001b[38;5;010m";

export async function main(ns) {
	const ram = ns.args[0];
	const names = ns.args.slice(1);

	for(const name of names) {
		if(AllServers(ns, "home").includes(name)) {
			ns.tprint(`${red}Server with a name of ${name} already exists`)
			continue; 
		}
		if (ram === "max") {
			let max= 0;
	    	for (let i = 20; i >= 1; i--) {
        	    if (ns.getPurchasedServerCost(Math.pow(2, i)) <= ns.getPlayer().money) {
                    max= Math.pow(2, i);
    	            break;
            	}
        	}
			const temp = await ns.prompt(`Do you want to buy a server named: ${name}, with ${max}Gb of RAM?\nThis will cost ${ns.formatNumber(ns.getPurchasedServerCost(max), 3)}`)
			if (temp != true) {return ns.tprint(`${red}Script exited.`)}
			else if (temp === false) {
				ns.purchaseServer(name, max);
				ns.tprint(`${green}Purchased a server with ${max}Gb. New server is named: ${name}`);
				ns.scp(files, name, "home");
				ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(max), 3)}`);
				const setup1 = await ns.prompt(`Do you want to run Hacking/MultiSetup.js on ${name}?`);
				if(setup1 === true) {ns.run('Hacking/MultiSetup.js', 1, name)}
			}
		}
	
		if (!valid_ram.includes(ram) && ram != 'max') {
			ns.tprint("RAM value must be a power of 2.");
			ns.tprint("Your value was ", ram);
			ns.tprint("Accepted values are 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, or max");
			ns.tprint("Max ram for this bitnode is " + (ns.getBitNodeMultipliers().PurchasedServerMaxRam*1048576));
			return ns.tprint(`${red}Script failed.`);
		}

		if (ram != 'max') {
			if (ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(ram)) {
				ns.tprint(`${blue}Need more money to purchase server with ${ram}Gb of ram`);
				ns.tprint(`${blue}Have ${ns.formatNumber(ns.getServerMoneyAvailable("home"), 3)} Need ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
				ns.tprint(`${blue}Need ${ns.formatNumber(ns.getPurchasedServerCost(ram) - ns.getServerMoneyAvailable("home"), 3)} more`);
				return ns.tprint(`${red}Script failed.`);
			}
		}
		
		if (ram != "max") {
			const temp = await ns.prompt(`Do you want to buy a server named: ${name}, with ${ram}Gb of RAM?\nThis will cost ${ns.formatNumber(ns.getPurchasedServerCost(max), 3)}`)
			if (temp != true) {return ns.tprint(`${red}Script exited.`)}
			else if (temp === false) {
				ns.purchaseServer(name, ram);
				ns.tprint(`${green}Purchased a server with ${ram}Gb. New server is named: ${name}`);
				ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
				const setup2 = await ns.prompt(`Do you want to run Hacking/MultiSetup.js on ${name}?`);
				if(setup2 === true) {ns.run('Hacking/MultiSetup.js', 1, name)}
				ns.scp(files, name, "home");
			}
		}
	}
}