/** @param {NS} ns */
export async function main(ns) {

    const target = ns.args[0];
    const moneyThresh = ns.getServerMaxMoney(target) * 0.75;

    ns.disableLog("ALL");

    while (true) {

        if (ns.getServerMoneyAvailable(target) <= moneyThresh) {
            let start = performance.now();
            ns.print("Growing - Current Server Money is: ", Math.floor(ns.getServerMoneyAvailable(target)), ". Goal is: ", moneyThresh);
            await ns.grow(target);
            ns.print('Grow took ' + ns.tFormat(performance.now() - start) + ' to finish');
        }

        if (ns.getServerMoneyAvailable(target) > moneyThresh) {
             ns.print("Idle - Current Server Money is: ", Math.floor(ns.getServerMoneyAvailable(target)), ". Goal was: ", moneyThresh);
             await ns.sleep(10000);
        }
    }
}
