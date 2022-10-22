/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.getServerMaxMoney(target) * 0.1;

    ns.disableLog("ALL");
    ns.enableLog("print");

    while (true) {

        while (ns.getServerMoneyAvailable("home") < 5000000000) {

            while (ns.getServerMoneyAvailable(target) < moneyThresh) {
              let start = performance.now();
                await ns.grow(target);
               ns.print("Growing - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal is: ", moneyThresh);
                ns.print('Grow took ' + ns.tFormat(performance.now() - start) + ' to finish');
            }

             while (ns.getServerMoneyAvailable(target) > moneyThresh) {
                 ns.print("Idle - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal was: ", moneyThresh);
                 await ns.sleep(10000);
            }
        }

        while (ns.getServerMoneyAvailable("home") > 5000000000) {
            let start = performance.now();
            await ns.grow(target, { threads: 1 });
            ns.print("Growing - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal is: ", moneyThresh);
            ns.print('Grow took ' + ns.tFormat(performance.now() - start) + ' to finish');
            ns.print("Grow speed reduced to 1 thread, monney is >5b");
        }
    }
}
