//Imports
import { serverram } from "/src/Function-Library/Functions"

/** @param {NS} ns */
export async function main(ns) {

    ns.tail();ns.disableLog("ALL");ns.clearLog(); 

    //Constants
        const target = "home";

    //Color Constants
    	const green = "\u001b[38;5;002m";
    	const red = "\u001b[38;5;001m";

    //CSEC (56) 
        const CSECP = "BruteSSH.exe";
        while (ns.hasRootAccess("CSEC") == false) { 
            if (ns.getHackingLevel() > 56 ) {
                ns.print(`${green} Hacking level > 56, can hack CSEC`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (ns.fileExists(CSECP, "home")) {
                        ns.run("PortsNNuke.js", 1, "CSEC");
                        ns.run("netmap.js",1,"seek","CSEC");
                        await ns.sleep(10000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke CSEC`);
                        await ns.sleep(10000);
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke CSEC (${ns.getHackingLevel()} need 56)`);
                await ns.sleep(10000);
            }
        }   

    //avmnite-02h (207)
        const avmnitep = "BruteSSH.exe, FTPCrack.exe";
        while (ns.hasRootAccess("avmnite-02h") == false) { 
            if (ns.getHackingLevel() > 207 ) {
                ns.print(`${green} Hacking level > 207, can hack avmnite-02h`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (ns.fileExists(avmnitep, "home")) {
                        ns.run("PortsNNuke.js", 1, "CSEC");
                        ns.run("netmap.js",1,"seek","CSEC");
                        await ns.sleep(10000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke avmnite-02h`);
                        await ns.sleep(10000);
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke avmnite-02h (${ns.getHackingLevel()} need 207)`);
                await ns.sleep(10000);
            }
        }


    //I.I.I.I (347)
        const iiiip = "BruteSSH.exe, FTPCrack.exe, relaySMTP.exe";
        while (ns.hasRootAccess("I.I.I.I") == false) { 
            if (ns.getHackingLevel() > 347 ) {
                ns.print(`${green} Hacking level > 347, can hack I.I.I.I`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (ns.fileExists(iiiip, "home")) {
                        ns.run("PortsNNuke.js", 1, "CSEC");
                        ns.run("netmap.js",1,"seek","CSEC");
                        await ns.sleep(10000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke avmnite-02h`);
                        await ns.sleep(10000);
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke I.I.I.I (${ns.getHackingLevel()} need 347)`);
                await ns.sleep(10000);
            }
        }

    //run4theh111z (510)
        const run4theh111zp = "BruteSSH.exe, FTPCrack.exe, relaySMTP.exe, HTTPWorm.exe";
        while (ns.hasRootAccess("run4theh111z") == false) { 
            if (ns.getHackingLevel() > 510 ) {
                ns.print(`${green} Hacking level > 510, can hack run4theh111z`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (ns.fileExists(run4theh111zp, "home")) {
                        ns.run("PortsNNuke.js", 1, "CSEC");
                        ns.run("netmap.js",1,"seek","CSEC");
                        await ns.sleep(10000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke avmnite-02h`);
                        await ns.sleep(10000);
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke run4theh111z (${ns.getHackingLevel()} need 510)`);
                await ns.sleep(10000);
            }
        }
    //Coment line
}