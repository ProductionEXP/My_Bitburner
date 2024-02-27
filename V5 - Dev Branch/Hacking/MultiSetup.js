// Imports
import { CurentHackServers } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
    ns.disableLog("ALL");

    const server1 = ns.args.slice(0);  
    for(const server of server1) {
        const targets = CurentHackServers(ns);   
        const targeta = targets.length;
        const scripts = ["Hacking/Grow_V4.js","Hacking/Weaken_V4.js"];   
        const ram_f = ns.getScriptRam("/Hacking/Grow_V4.js") + ns.getScriptRam("/Hacking/Weaken_V4.js"); 
        const ram_t = ram_f*targeta;
        const serverram = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
        const v3t = Math.floor(serverram/ram_t);  
        const red = "\u001b[38;5;009m";

        if (ram_t < serverram) {   
            ns.tprint("RAM used per set of scripts is: ", ns.formatRam(ram_f,1),". ", targeta," targets, for a total of ", ns.formatRam(ram_t,1), ". At ", ns.formatNumber(v3t), " threads each for a grand total of ",ns.formatRam(v3t*ram_t),", Server has ", ns.formatRam(serverram-(v3t*ram_t))," available.");
            ns.tprint("Server hosting the scripts name is ", server, "\n ")
        }

        if (ram_t > serverram) {    
            ns.tprint(`${red}Not enough RAM to run scripts, actively trying to run scripts on ${server} server.`);
            return ns.tprint(`${red}Script killed.`);
        }

        ns.scp(scripts,server,"home");
      
        if (ram_t < serverram) {   
            for (const target of targets) {
                Portem(ns, target)
                ns.nuke(target);
                let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
                let securityThresh = ns.getServerMinSecurityLevel(target) + 1;

                ns.exec("Hacking/HG.js", server, v3t, target, moneyThresh, securityThresh, 'grow');
                ns.exec("Hacking/HG.js", server, v3t, target, moneyThresh, securityThresh, 'weaken');
            }
        }
    }
}