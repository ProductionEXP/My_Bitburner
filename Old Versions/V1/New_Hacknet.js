/** @param {NS} ns */
export async function main(ns) {

	var hnn = ns.args[0];
	var ram = ns.args[1];
	var c = ns.args[2];
	var l = ns.args[3];

	ns.disableLog("ALL");

	if (ns.hacknet.getPurchaseNodeCost() < ns.getServerMoneyAvailable("home")) {
		await ns.hacknet.purchaseNode();
		ns.enableLog("print");
		ns.print("Purchased new HackNet node, starting upgrade cycles");
		ns.disableLog("print");
		await ns.sleep(500);
	}

	else (ns.hacknet.getPurchaseNodeCost() > ns.getServerMoneyAvailable("home")); {
		ns.enableLog("print");
		ns.print("Need more monney before purchasing a new HackNet Node");
		ns.disableLog("print");
		await ns.sleep(10000);
	}

	while (ns.hacknet.getLevelUpgradeCost(hnn, l - 1) > ns.getServerMoneyAvailable("home")) {
		await ns.hacknet.upgradeLevel(hnn, l - 1)
		ns.enableLog("print");
		ns.print("leveled up to ", l,);
		ns.disableLog("print");
	}

	while (ns.hacknet.getRamUpgradeCost(hnn, ram - 1) > ns.getServerMoneyAvailable("home")) {
		await ns.upgradeRam(hnn, ram - 1)
		ns.enableLog("print");
		ns.print("Incresed ram ", ram, " times.");
		ns.disableLog("print");
	}

	while (ns.hacknet.getCoreUpgradeCost(hnn, c - 1) > ns.getServerMoneyAvailable("home")) {
		await ns.hacknet.upgradeCore(hnn, c - 1)
		ns.enableLog("print");
		ns.print("Incresed the ammount of cores ", c, " times.");
		ns.disableLog("print");
	}
}