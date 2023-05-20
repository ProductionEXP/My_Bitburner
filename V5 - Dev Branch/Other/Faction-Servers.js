// Imports
import { portsnumber } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {

    ns.tail();
    ns.disableLog("ALL");
    ns.clearLog(); 

    // Constants
        const target = "home";
        const serverram = ns.getServerMaxRam(target) - ns.getServerUsedRam(target);

    // Port Math

        ns.print(portsnumber(ns)); 

    // Color Constants
    	const green = "\u001b[38;5;002m";
    	const red = "\u001b[38;5;001m";

    // CSEC (60) 
        ns.tail();
        while (ns.hasRootAccess("CSEC") == false) { 
            if (ns.getHackingLevel() > 60 ) {
                ns.print(`${green} Hacking level > 60, can hack CSEC`)
                if (serverram > 2.55) {
                    if (portsnumber(ns) >= 1) {
                        Portem(ns,"CSEC")
                        ns.nuke("CSEC");
                        ns.run("Info/netmap.js",1,"seek","CSEC");
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
                ns.print(`${red} Hacking Level to low to Nuke CSEC (${ns.getHackingLevel()} need 60)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }   

    // avmnite-02h (230)
        ns.tail();
        while (ns.hasRootAccess("avmnite-02h") == false) { 
            if (ns.getHackingLevel() > 230 ) {
                ns.print(`${green} Hacking level > 230, can hack avmnite-02h`)
                if (portsnumber(ns) > 2.55) {
                    if (portsnumber(ns) >= 2) {
                        Portem(ns,"avmnite-02h")
                        ns.nuke("avmnite-02h");
                        ns.run("Info/netmap.js",1,"seek","avmnite-02h");
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
                ns.print(`${red} Hacking Level to low to Nuke avmnite-02h (${ns.getHackingLevel()} need 230)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }


    // I.I.I.I (325)
        ns.tail();
        while (ns.hasRootAccess("I.I.I.I") == false) { 
            if (ns.getHackingLevel() > 325 ) {
                ns.print(`${green} Hacking level > 325, can hack I.I.I.I`);
                if (serverram >= 2.55) {
                    if (portsnumber(ns) >= 3) {
                        Portem(ns,"I.I.I.I")
                        ns.nuke("I.I.I.I");
                        ns.run("Info/netmap.js",1,"seek","I.I.I.I");
                        await ns.sleep(1000);
                        ns.clearLog();
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
                ns.print(`${red} Hacking Level to low to Nuke I.I.I.I (${ns.getHackingLevel()} need 325)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }

    // run4theh111z (550)
        ns.tail();
        while (ns.hasRootAccess("run4theh111z") == false) { 
            if (ns.getHackingLevel() > 550 ) {
                ns.print(`${green} Hacking level > 550, can hack run4theh111z`)
                if (serverram >= 2.55) {
                    if (portsnumber(ns) >= 4) {
                        Portem(ns,"run4theh111z")
                        ns.nuke("run4theh111z");
                        ns.run("Info/netmap.js",1,"seek","run4theh111z");
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
                ns.print(`${red} Hacking Level to low to Nuke run4theh111z (${ns.getHackingLevel()} need 550)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }

    // . (550)
        ns.tail();
        while (ns.hasRootAccess(".") == false) { 
            if (ns.getHackingLevel() > 550 ) {
                ns.print(`${green} Hacking level > 550, can hack .`)
                if (serverram >= 2.55) {
                    if (portsnumber(ns) >= 4) {
                        Portem(ns,".")
                        ns.nuke(".");
                        ns.run("Info/netmap.js",1,"seek",".");
                        await ns.sleep(1000);
                        ns.clearLog();
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke .`);
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
                ns.print(`${red} Hacking Level to low to Nuke . (${ns.getHackingLevel()} need 550)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }

    // icarus (925)
        ns.tail();
        while (ns.hasRootAccess("icarus") == false) { 
            if (ns.getHackingLevel() > 925 ) {
                ns.print(`${green} Hacking level > 925, can hack icarus`)
                if (serverram >= 2.55) {
                    if (portsnumber(ns) >= 5) {
                        Portem(ns,"icarus")
                        ns.nuke("icarus");
                        ns.run("Info/netmap.js",1,"seek","icarus");
                        await ns.sleep(1000);
                        ns.clearLog();
                    } 

                    else {
                        ns.print(`${red} Need more ports (.exe) to nuke icarus`);
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
                ns.print(`${red} Hacking Level to low to Nuke icarus (${ns.getHackingLevel()} need 925)`);
                await ns.sleep(10000);
                ns.clearLog();
            }
        }
    
}