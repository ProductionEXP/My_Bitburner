function myMoney() {
	return getServerMoneyAvailable("home");
}
export async function main(ns) {
	ns.disableLog("getServerMoneyAvailable");
	ns.disableLog("sleep");

	var cnt = 8;

	while (hacknet.numNodes() < cnt) {
		res = hacknet.purchaseNode();
		await ns.print("Purchased hacknet Node with index " + res);
	};

	for (var i = 0; i < cnt; i++) {
		while (hacknet.getNodeStats(i).level <= 105) {
			var cost = hacknet.getLevelUpgradeCost(i, 10);
			while (myMoney() < cost) {
				await ns.print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = hacknet.upgradeLevel(i, 10);
		};
	};

	await ns.print("All nodes upgraded to level 80");

	for (var i = 0; i < cnt; i++) {
		while (hacknet.getNodeStats(i).ram < 4) {
			var cost = hacknet.getRamUpgradeCost(i, 2);
			while (myMoney() < cost) {
				await ns.print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = hacknet.upgradeRam(i, 2);
		};
	};

	await ns.print("All nodes upgraded to 16GB RAM");

	for (var i = 0; i < cnt; i++) {
		while (hacknet.getNodeStats(i).cores < 2) {
			var cost = hacknet.getCoreUpgradeCost(i, 1);
			while (myMoney() < cost) {
				await ns.print("Need $" + cost + " . Have $" + myMoney());
				sleep(3000);
			}
			res = hacknet.upgradeCore(i, 1);
		};
	};
};

await ns.print("All nodes upgraded to 8 cores");