/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.getServerMaxMoney(target) * 0.1;
    const securityThresh = ns.getServerMinSecurityLevel(target) + 7.5;

    ns.disableLog("ALL");
    ns.enableLog("print");

    while (true) {

        if (ns.getServerSecurityLevel(target) > securityThresh) {
            ns.print("Weakening - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal is: ", securityThresh);
            let start = performance.now();
            await ns.weaken(target);
            ns.print('Weaken took ' + ns.tFormat(performance.now() - start) + ' to finish');
        }

        else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            ns.print("Growing - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal is: ", moneyThresh);
            let start = performance.now();
            await ns.grow(target);
            ns.print('Grow took ' + ns.tFormat(performance.now() - start) + ' to finish');
        }

        else {
            let start = performance.now();
            ns.print("Hacking - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Current Server Security Level is: ", ns.getServerSecurityLevel(target));
            await ns.hack(target);
            ns.print('Hack took ' + ns.tFormat(performance.now() - start) + ' to finish');
        }
    }
}