/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.args[1];
    const type = ns.args[2];
    while (true) {
        if (type = 'grow') {
            while (ns.getServerMoneyAvailable(target) <= moneyThresh) {
                await ns.grow(target);
                await ns.sleep(15);
            }
        }
        if (type = 'weaken') {
            if (ns.getServerSecurityLevel(target) < securityThresh) {
                await ns.hack(target);
                await ns.sleep(15);
            }
        }       
        if (ns.getServerMoneyAvailable(target) > moneyThresh || ns.getServerSecurityLevel(target) < securityThresh) {
            await ns.hack(target);
            await ns.sleep(15);
        }
        await ns.sleep(15);
    }
}