/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const securityThresh = ns.getServerMinSecurityLevel(target) + 1;

	ns.disableLog("ALL");
	ns.enableLog("print");

	while (true) {

		if (ns.getServerSecurityLevel(target) > securityThresh) {
			ns.print("Weakening - Current Server Security Level is: ", Math.floor(ns.getServerSecurityLevel(target)), ". Goal is: ", securityThresh);
			let start = performance.now();
			await ns.weaken(target);
			ns.print('Weaken took ' + ns.tFormat(performance.now() - start) + ' to finish');
		}

		if (ns.getServerSecurityLevel(target) < securityThresh) {	
			ns.print("Idle - Current Server Security Level is: ", Math.floor(ns.getServerSecurityLevel(target)), ". Goal was: ", securityThresh);
			await ns.sleep(10000);
		}
	}
}