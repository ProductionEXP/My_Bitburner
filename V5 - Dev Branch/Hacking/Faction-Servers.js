// Imports
import { portinfo } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"
import { traverse } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
    ns.disableLog("ALL");
    ns.clearLog(); 

    // Constants
    let yorn = true;
    const ownedaugmentations = ns.singularity.getOwnedAugmentations();
    let targets = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "fulcrumassets"];
    const factions = ["CyberSec", "NiteSec", "The Black Hand", "BitRunners", "Daedalus"];
    if(ownedaugmentations.includes("The Red Pill")) {targets = ["CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "fulcrumassets", "w0r1d_d43m0n"]}
    const serverram = ns.getServerMaxRam("home") - ns.getServerUsedRam("home");

    // Color Constants
    const green = "\u001b[38;5;010m";
    const red = "\u001b[38;5;009m";

    // The loop
    while(true) {
        for(const target of targets) {
            while (ns.hasRootAccess(target) == false || ns.getServer(target).backdoorInstalled == false) { 
                if (ns.getHackingLevel() >=  ns.getServerRequiredHackingLevel(target) ) {
                    ns.print(`${green} Hacking level >= ${ns.getServerRequiredHackingLevel(target)}, can hack ${target}`)
                    if (serverram > 2.55) {
                        if (portinfo(ns, 'number') >= ns.getServerNumPortsRequired(target)) {
                            if(target === "w0r1d_d43m0n") {yorn = await ns.prompt('Are you sure you want to hack w0r1d_d43m0n and end this Bitnode?')}
                            if(yorn === true) {
                                Portem(ns,target);
                                ns.nuke(target);
                                for(const nextpath of traverse(ns, "home",target)) {
                                    ns.singularity.connect(nextpath);
                                }
                                await ns.singularity.installBackdoor();
                                for(const nextpath1 of traverse(ns, target,"home")) {
                                    ns.singularity.connect(nextpath1);
                                }
                                await ns.sleep(100);
                            }
                            else{ns.exit()}
                            await ns.sleep(500);
                        } 
                        else {
                            ns.print(`${red} Need more ports (.exe) to nuke ${target}`);
                            await ns.sleep(500);
                            ns.clearLog();
                            break;
                        }
                    }
                    else {
                        ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                        await ns.sleep(500);
                        ns.clearLog();
                        break;
                    }
                }
                else {
                    ns.print(`${red} Hacking Level to low to Nuke ${target} (${ns.getHackingLevel()} need ${ns.getServerRequiredHackingLevel(target)})`);
                    await ns.sleep(500);
                    ns.clearLog();
                    break;
                }
            }
            if((!ownedaugmentations.includes("The Red Pill")) && (target === "w0r1d_d43m0n")) {
                return ns.print('Need the augmentation "The Red Pill" to hack "w0r1d_d43m0n"\nGet the augmentation from the Daedalus faction')
            }         
        } 

        for(const faction of factions ) {
            if(ns.singularity.checkFactionInvitations().includes(faction)) {
                ns.singularity.joinFaction(faction);
                await ns.sleep(500);
            }
        }
        await ns.sleep(500);
    }
}