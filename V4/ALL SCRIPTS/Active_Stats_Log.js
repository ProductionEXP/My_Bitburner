const green = "\u001b[38;5;040m";
const orange = "\u001b[38;5;202m";

/** @param {NS} ns */
export async function main(ns) {
    ns.tail();ns.disableLog("ALL");ns.clearLog();
    ns.print("Active log started")

    while(true){
        ns.clearLog();
        ns.print(`${green}Server income ${ns.nFormat(ns.getTotalScriptIncome()[0], "$0,0.00a")}/s`);
        ns.print(`${green}Hacknet income ${ns.nFormat(ns.getMoneySources().sinceInstall.hacknet, "$0,0.00a")}/s`);
        ns.print(`${orange}Server EXP income ${ns.nFormat(ns.getTotalScriptExpGain(), "0,0.00a")}/s`);
        ns.print(`${green} `);
        ns.print(`${green}Total Income ${ns.nFormat(ns.getTotalScriptIncome()[0] + ns.getMoneySources().sinceInstall.hacknet, "$0,0.00a")}/s`);
        await ns.sleep(10);
      }
}