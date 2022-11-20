//Imports
import { serverram } from "/src/Function-Library/Functions"

/** @param {NS} ns */
export async function main(ns) {

    ns.disableLog("ALL");

    //Constants

        const server = ns.args[0];  //What server will the scripts run on
            const target = ns.args[0];
        const serverram1 = serverram
        const targets = ns.args.slice(1);   //Slices the ammount of targets
        
	    const targeta = targets.length; //Finds the ammount of targets

        const ram_f = ns.getScriptRam("Full_V3.js") + ns.getScriptRam("Grow_V3.js") + ns.getScriptRam("Weaken_V3.js");  //Finds the ammount of ram needed to run the three scripts
            const ram_t = ram_f*targeta;    //Finds the total ammount of ram for all scripts

        const v3t = Math.floor(serverram1/ram_t);  //Takes targeta (ammount of targets) devides it by the ram that it takes to run the three scripts
                                                  //Then rounds it down, ex. 49.98 beomes 49
        //Color Constants
            const red = "\u001b[38;5;001m";

    //Terminal prints (for information)

        if (ram_t < serverram1) {   
            ns.tprint("RAM used per set of scripts is: ", ram_f,"Gb. ", targeta," targets, for a total of ", ram_f*targeta, ". Server has ", serverram1,"Gb available.");
        }

    //File Transfers

        const scripts = ["Full_V3.js","Grow_V3.js","Weaken_V3.js"];    

            ns.scp(scripts,server,"home");

    //Standard Multiple Setup Script

        if (ram_t > serverram1) {    
            ns.tprint(`${red}Not enough RAM to run scripts, actively trying to run scripts on ${server} server.`);
            ns.tprint(`${red}Time Out in 10s`);
            await ns.sleep(5000);
            ns.tprint(`${red}Time Out in 5s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Time Out in 4s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Time Out in 3s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Time Out in 2s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Time Out in 1s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Time Out in 0s`);
            return ns.tprint(`${red}Script killed.`);
        }
      
        if (ram_t < serverram1) {   

            for (const target of targets) {
                ns.run("PortsNNuke.js", 1, target);
      
                ns.exec("Full_V3.js", server, v3t, target);
                ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target);
                ns.exec("Grow_V3.js", server, v3t, target);
                ns.print("Grow script started to run on ", server, ". Target is ", target);
                ns.exec("Weaken_V3.js", server, v3t, target);
                ns.print("Weaken script started to run on ", server, ". Target is ", target);
            }
        }
    //Closed script comments line
}