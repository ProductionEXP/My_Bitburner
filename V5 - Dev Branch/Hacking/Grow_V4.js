/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.args[1];
    while (true) {
        while (ns.getServerMoneyAvailable(target) <= moneyThresh) {
            await ns.grow(target);
            await ns.sleep(15);
        }
        if (ns.getServerMoneyAvailable(target) > moneyThresh) {
            await ns.hack(target);
            await ns.sleep(15);
        }
        await ns.sleep(15);
    }
}