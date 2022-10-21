/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const securityThresh = ns.getServerMinSecurityLevel(target) + 7.5;

	ns.disableLog("ALL");
	ns.enableLog("print");

	while (ns.getServerSecurityLevel(target) > securityThresh) {
		let start = performance.now();
		await ns.weaken(target);
		ns.print("Weakening - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal is: ", securityThresh);
		ns.print('Weaken took ' + ns.tFormat(performance.now() - start) + ' to finish');
	}

	while (ns.getServerSecurityLevel(target) < securityThresh) {
		ns.print("Idle - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal was: ", securityThresh);
		await ns.sleep(10000);
	}
}