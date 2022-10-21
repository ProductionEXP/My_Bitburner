/** @param {NS} ns */
export async function main(ns) {

    const target = ns.args[1];
    const server = ns.args[0];
    const threads = ns.args[2];

    if (ns.getServerSecurityLevel(target) > securityThresh) {
        ns.print("Weakening - Current Server Security Level is: ", ns.getServerSecurityLevel(target), ". Goal is: ", securityThresh);
        ns.print("Executing with ", threads," threads.")
        let start = performance.now();
        await ns.weaken(target);
        ns.print('Weaken took ' + ns.tFormat(performance.now() - start) + ' to finish');
    }

    else (ns.getServerMoneyAvailable(target) < moneyThresh); {
        ns.print("Goal achived.")
    }


}

