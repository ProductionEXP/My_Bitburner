export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target) * 0.1;

	await ns.disableLog("ALL");

	while (true) {

		while (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.enableLog("print");
			await ns.print("Growing - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal is: ", moneyThresh);
			await ns.disableLog("print");
			await ns.grow(target, { threads: 5 });
			await ns.sleep(500);
		}

		while (ns.getServerMoneyAvailable(target) > moneyThresh) {
			await ns.enableLog("print");
			await ns.print("Idle - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal was: ", moneyThresh);
			await ns.disableLog("print");
			await ns.sleep(10000);
		}
	}
}