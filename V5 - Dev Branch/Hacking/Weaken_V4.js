/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const securityThresh = ns.args[1];
    while (true) {
        while (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        }
        if (ns.getServerSecurityLevel(target) < securityThresh) {
            await ns.hack(target);
        }
    }
}