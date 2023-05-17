//Imports
import { portsnumber } from "/src/Function-Library/Functions"

/** @param {NS} ns */
export async function main(ns) {

    ns.tail();
    ns.disableLog("ALL");
    ns.clearLog(); 

    //Constants
        const target = "home";
        const serverram = ns.getServerMaxRam(target) - ns.getServerUsedRam(target);

    //Port Math

        ns.print(portsnumber); 

    //Color Constants
    	const green = "\u001b[38;5;002m";
    	const red = "\u001b[38;5;001m";

    //CSEC (56) 
        ns.tail();
        while (ns.hasRootAccess("CSEC") == false) { 
            if (ns.getHackingLevel() > 56 ) {
                ns.print(`${green} Hacking level > 56, can hack CSEC`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (portsnumber >= 1) {
                        ns.run("PortsNNuke.js", 1, "CSEC");
                        ns.run("netmap.js",1,"seek","CSEC");
                        await ns.sleep(1000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke CSEC`);
                        await ns.sleep(10000);
                        ns.clearLog();
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                    ns.clearLog();
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke CSEC (${ns.getHackingLevel()} need 56)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }   

    //avmnite-02h (207)
        ns.tail();
        while (ns.hasRootAccess("avmnite-02h") == false) { 
            if (ns.getHackingLevel() > 207 ) {
                ns.print(`${green} Hacking level > 207, can hack avmnite-02h`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (portsnumber >= 2) {
                        ns.run("PortsNNuke.js", 1, "avmnite-02h");
                        ns.run("netmap.js",1,"seek","avmnite-02h");
                        await ns.sleep(1000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke avmnite-02h`);
                        await ns.sleep(10000);
                        ns.clearLog();
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                    ns.clearLog();
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke avmnite-02h (${ns.getHackingLevel()} need 207)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }


    //I.I.I.I (347)
        ns.tail();
        while (ns.hasRootAccess("I.I.I.I") == false) { 
            if (ns.getHackingLevel() > 347 ) {
                ns.print(`${green} Hacking level > 347, can hack I.I.I.I`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (portsnumber >= 3) {
                        ns.run("PortsNNuke.js", 1, "I.I.I.I");
                        ns.run("netmap.js",1,"seek","I.I.I.I");
                        await ns.sleep(1000);
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke I.I.I.I`);
                        await ns.sleep(10000);
                        ns.clearLog();
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                    ns.clearLog();
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke I.I.I.I (${ns.getHackingLevel()} need 347)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }

    //run4theh111z (534)
        ns.tail();
        while (ns.hasRootAccess("run4theh111z") == false) { 
            if (ns.getHackingLevel() > 534 ) {
                ns.print(`${green} Hacking level > 534, can hack run4theh111z`)
                if (serverram > ns.getScriptRam("PortsNNuke.js")+ns.getScriptRam("netmap.js")) {
                    if (portsnumber >= 4) {
                        ns.run("PortsNNuke.js", 1, "run4theh111z");
                        ns.run("netmap.js",1,"seek","run4theh111z");
                        await ns.sleep(1000);
                        ns.clearLog();
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke run4theh111z`);
                        await ns.sleep(10000);
                        ns.clearLog();
                    }
                }

                else {
                    ns.print(`${red} Not engough RAM to run Scripts for Ports and scaning`);
                    await ns.sleep(10000);
                    ns.clearLog();
                }
            }

            else {
                ns.print(`${red} Hacking Level to low to Nuke run4theh111z (${ns.getHackingLevel()} need 534)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }
    
}