//Imports
import { tail } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {

    ns.disableLog("ALL");

    //Constants

        const tol = ns.args[0];
        const server = ns.args[1];  //What server will the scripts run on
        const targets = ns.args.slice(2);   //Slices the ammount of targets
    	    const targeta = targets.length; //Finds the ammount of targets

        const ram_f = ns.getScriptRam("/Hacking/Full_V3.js") + ns.getScriptRam("/Hacking/Grow_V3.js") + ns.getScriptRam("/Hacking/Weaken_V3.js");  //Finds the ammount of ram needed to run the three scripts
            const ram_t = ram_f*targeta;    //Finds the total ammount of ram for all scripts
            const serverram = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);

        const v3t = Math.floor(serverram/ram_t);  //Takes targeta (ammount of targets) devides it by the ram that it takes to run the three scripts
                                                  //Then rounds it down, ex. 49.98 beomes 49
        //Color Constants
            const red = "\u001b[38;5;001m";

    // Log Settings

        if (tail(ns, tol) === "tailF") {
            ns.tail();
            ns.clearLog(); 
        }

        if (tail(ns, tol) === "tailC") {
            ns.tail();
            ns.disableLog("ALL");
            ns.clearLog();
        }
                        
        if (tail(ns, tol) === "logF") {
            ns.clearLog();
        }
    
        if (tail(ns, tol) === "logC") {
            ns.disableLog("ALL");
            ns.clearLog();
        }
    
        if (tail(ns, tol) === "fail") {
            ns.tprint(` `)
            ns.tprint(`Must Define a log version`);
            ns.tprint(`Possible Versions are:`);
            ns.tprint(`TailCostum       Costom Log Open Tail`);
            ns.tprint(`TailFull         Full Log Open Tail`);
            ns.tprint(`LogFull          Full Log No Tailb `)
            ns.tprint(`Default          Costom Log No Tail`);
            return ns.print(`Invalid or No log version provided`)
        }

    //Terminal prints (for information)

        if (ram_t < serverram) {   
            ns.tprint("RAM used per set of scripts is: ", ram_f,"Gb. ", targeta," targets, for a total of ", ram_t, ". At ", v3t, " threads each for a grand total of ",v3t*ram_t," Server has ", serverram,"Gb available.");
        }

    //File Transfers

        const scripts = ["Hacking/Full_V3.js","Hacking/Grow_V3.js","Hacking/Weaken_V3.js"];    

            ns.scp(scripts,server,"home");

    //Standard Multiple Setup Script

        if (ram_t > serverram) {    
            ns.tprint(`${red}Not enough RAM to run scripts, actively trying to run scripts on ${server} server.`);
            return ns.tprint(`${red}Script killed.`);
        }
      
        if (ram_t < serverram) {   

            for (const target of targets) {
      
                if (ns.fileExists("BruteSSH.exe", "home")) {
                    ns.brutessh(target);
                }
            
                if (ns.fileExists("FTPCrack.exe", "home")) {
                    ns.ftpcrack(target);
                }
            
                if (ns.fileExists("relaySMTP.exe", "home")) {
                    ns.relaysmtp(target);
                }
                
                if (ns.fileExists("HTTPWorm.exe", "home")) {
                    ns.httpworm(target);
                }
            
                if (ns.fileExists("SQLInject.exe", "home")) {
                    ns.sqlinject(target);
                }
            
                ns.nuke(target);

                ns.exec("Hacking/Full_V3.js", server, v3t, target);
                ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target);
                ns.exec("Hacking/Grow_V3.js", server, v3t, target);
                ns.print("Grow script started to run on ", server, ". Target is ", target);
                ns.exec("Hacking/Weaken_V3.js", server, v3t, target);
                ns.print("Weaken script started to run on ", server, ". Target is ", target);
            }
        }
    //Closed script comments line
}