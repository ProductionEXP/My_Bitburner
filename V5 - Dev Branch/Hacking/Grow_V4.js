/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.args[1];
    while (true) {
        while (ns.getServerMoneyAvailable(target) <= moneyThresh) {
            await ns.grow(target);
        }
        if (ns.getServerMoneyAvailable(target) > moneyThresh) {
            await ns.hack(target);
        }
    }
}