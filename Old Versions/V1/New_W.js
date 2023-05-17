export async function main(ns) {
	var target = ns.args[0];
	var securityThresh = ns.getServerMinSecurityLevel(target) + 7.5;

	await ns.disableLog("ALL");

	while (true) {

		while (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.enableLog("print");
			await ns.print("Weakening - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal is: ", securityThresh);
			await ns.disableLog("print");
			await ns.weaken(target, { threads: 5 });
			await ns.sleep(500);
		}

		while (ns.getServerSecurityLevel(target) < securityThresh) {
			await ns.enableLog("print");
			await ns.print("Idle - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal was: ", securityThresh);
			await ns.disableLog("print");
			await ns.sleep(10000);
		}
	}
}