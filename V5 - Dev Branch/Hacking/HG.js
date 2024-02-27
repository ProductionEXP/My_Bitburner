/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const moneyThresh = ns.args[1];
    const securityThresh = ns.args[2];
    const type = ns.args[3];
    while (true) {
        if (type === 'grow') {
            if (ns.getServerMoneyAvailable(target) < moneyThresh) {
                await ns.grow(target);
            }
            else if (ns.getServerSecurityLevel(target) > securityThresh) {
                await ns.weaken(target);
            }
            else {
                await ns.hack(target); 
            }
        }

        if (type === 'weaken') {
            if (ns.getServerSecurityLevel(target) > securityThresh) {
                await ns.weaken(target);
            }
            else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
                await ns.grow(target);
            }
            else {
                await ns.hack(target); 
            }
        }       
    }
}