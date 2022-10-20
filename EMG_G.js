/** @param {NS} ns */
export async function main(ns) {

    const target = ns.args[1];
    const server = ns.args[0];
    const threads = ns.args[2];

    if (ns.getServerMoneyAvailable(target) < moneyThresh) {
        ns.print("Growing - Current Server Money is: ", ns.getServerMoneyAvailable(target), ". Goal is: ", moneyThresh);
        ns.print("Executing with ", threads," threads.")
        let start = performance.now();
        await ns.grow(target);
        ns.print('Grow took ' + ns.tFormat(performance.now() - start) + ' to finish');
    }

    else (ns.getServerMoneyAvailable(target) < moneyThresh); {
        ns.print("Goal achived.")
    }


}