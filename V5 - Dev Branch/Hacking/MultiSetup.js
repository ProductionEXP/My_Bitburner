// Imports
import { CurentHackServers } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {

    ns.disableLog("ALL");

    // Constants

        const server1 = ns.args.slice(0);  
        for(const server of server1) {
            const targets = CurentHackServers(ns);   

            const targeta = targets.length; // Finds the ammount of targets
            const ram_f = ns.getScriptRam("/Hacking/Grow_V4.js") + ns.getScriptRam("/Hacking/Weaken_V4.js");  // Finds the ammount of ram needed to run the three scripts
            const ram_t = ram_f*targeta;    // Finds the total ammount of ram for all scripts
            const serverram = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);

            const v3t = Math.floor(serverram/ram_t);  // Takes targeta (ammount of targets) devides it by the ram that it takes to run the three scripts. Then rounds it down, ex. 49.98 beomes 49
    // Color Constants
                const red = "\u001b[38;5;009m";

    // Terminal prints (for information)

            if (ram_t < serverram) {   
                ns.tprint("RAM used per set of scripts is: ", ns.formatRam(ram_f,1),". ", targeta," targets, for a total of ", ns.formatRam(ram_t,1), ". At ", ns.formatNumber(v3t), " threads each for a grand total of ",ns.formatRam(v3t*ram_t),", Server has ", ns.formatRam(serverram-(v3t*ram_t))," available.");
                ns.tprint("Server's name is ", server)
                ns.tprint("")
            }

    // File Transfers

            const scripts = ["Hacking/Grow_V4.js","Hacking/Weaken_V4.js"];    

                ns.scp(scripts,server,"home");

    // Standard Multiple Setup Script

            if (ram_t > serverram) {    
                ns.tprint(`${red}Not enough RAM to run scripts, actively trying to run scripts on ${server} server.`);
                return ns.tprint(`${red}Script killed.`);
            }
      
            if (ram_t < serverram) {   

                for (const target of targets) {
                    Portem(ns, target)
                    ns.nuke(target);
                    let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
                    let securityThresh = ns.getServerMinSecurityLevel(target) + 1;

                    ns.exec("Hacking/Grow_V4.js", server, v3t, target, moneyThresh);
                    ns.exec("Hacking/Weaken_V4.js", server, v3t, target, securityThresh);
                }
            }
    // Closed script comments line
    }
}