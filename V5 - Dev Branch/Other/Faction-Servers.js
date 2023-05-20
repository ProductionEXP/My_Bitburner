// Imports
import { portsnumber } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {

    ns.tail();
    ns.disableLog("ALL");
    ns.clearLog(); 

    // Constants
        const targets = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", ".", "icarus", "w0r1d_d43m0n"];
        const serverram = ns.getServerMaxRam("home") - ns.getServerUsedRam("home");

    // Color Constants
    	const green = "\u001b[38;5;010m";
    	const red = "\u001b[38;5;009m";

    // The loop
    for(const target of targets) {
        ns.tail();
        while (ns.hasRootAccess(target) == false) { 
            if (ns.getHackingLevel() >  ns.getServerRequiredHackingLevel(target) ) {
                ns.print(`${green} Hacking level > ${ns.getServerRequiredHackingLevel(target)}, can hack ${target}`)
                if (serverram > 2.55) {
                    if (portsnumber(ns) >= 1) {
                        Portem(ns,target);
                        ns.nuke(target);
                        ns.run("Info/netmap.js",1,"seek",target);
                        await ns.sleep(5000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke ${target}`);
                        await ns.sleep(5000);
                        ns.clearLog();
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(5000);
                    ns.clearLog();
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke ${target} (${ns.getHackingLevel()} need ${ns.getServerRequiredHackingLevel(target)})`);
                await ns.sleep(5000);
                ns.clearLog();
            }
        }          
    } 
}