/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target);
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
        ns.ftpcrack(target);
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
        ns.ftpcrack(target);
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
        ns.ftpcrack(target);
    }
    ns.nuke(target);

    await ns.print("All avalibe ports installed, nuked, and backdoor not done (needs 65gb of RAM).")
    await ns.sleep(10000)
}