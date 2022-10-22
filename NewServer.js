/** @param {NS} ns */
export async function main(ns) {
	var ram = ns.args[0];
	var name = ns.args[1];

	if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
		ns.purchaseServer(name, ram);
		ns.tprint("Purchased a server with ", ram, "Gb. New server is named: ", name);
	
		if (ns.fileExists("NewServerSetUp.js", "home")) {
        	ns.scp("NewServerSetUp.js", name, "home");
   		}

		ns.exec("NewServerSetUp.js", "home", 1, name);

	}

	if (ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(ram)) {
		ns.tprint("Need more money to purchase server with ", ram,"Gb of ram");
		ns.tprint("Have $", ns.getServerMoneyAvailable("home"), ", Need $", ns.getPurchasedServerCost(ram));
		ns.tprint("Need $", ns.getServerMoneyAvailable("home") - ns.getPurchasedServerCost(ram), " more");
	}
		
	await ns.sleep(10000)
}