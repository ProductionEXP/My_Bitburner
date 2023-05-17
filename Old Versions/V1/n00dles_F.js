export async function main(ns) {
var target = ns.args[0];
        var moneyThresh = ns.getServerMaxMoney(target) * 0.33;
        var securityThresh = ns.getServerMinSecurityLevel(target) + 7.5;
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target); }
    if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target); }
    
    ns.nuke(target);

    while(true) {

        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target, { threads: 1 });

        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target, { threads: 1 });

        } else {
            await ns.hack(target, { threads: 1 });

        }
    }
}