/** @param {NS} ns */
export async function main(ns) {
	var ram = ns.args[0];
	var name = ns.args[1];

	ns.purchaseServer(name, ram);
	ns.print("Purchased a server with ", ram, "Gb. Named: ", name);
	await ns.sleep(10000)
}