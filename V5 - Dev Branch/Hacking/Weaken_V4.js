/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const securityThresh = ns.args[1];
    while (true) {
        while (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
            await ns.sleep(15);
        }
        if (ns.getServerSecurityLevel(target) < securityThresh) {
            await ns.hack(target);
            await ns.sleep(15);
        }
        await ns.sleep(15);
    }
}