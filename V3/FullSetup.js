/** @param {NS} ns */
export async function main(ns) {

    ns.disableLog("ALL");
    ns.enableLog("print");

    //Constants

        const server = ns.args[0];
        const targets = ns.args.slice(1);

        const targeta = targets.length;

        const ram_f1 = ns.getScriptRam("Full_V3.js") * targeta;
        const ram_g1 = ns.getScriptRam("Grow_V3.js") * targeta;
        const ram_w1 = ns.getScriptRam("Weaken_V3.js") * targeta;

        const v3t = Math.floor(ns.getServerMaxRam(server) / ram_f1 + ram_g1 + ram_w1);
        const targa = targeta* v3t;

        const ram_s = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
        const ram_1 = ns.getScriptRam("Full_V3.js") * targa;
        const ram_2 = ns.getScriptRam("Grow_V3.js") * targa;
        const ram_3 = ns.getScriptRam("Weaken_V3.js") * targa;
        const ram_f = ram_s - ram_1 - ram_2 - ram_3;
    
        const ram_11 = ns.getScriptRam("Full_V3.js");   
        const ram_22 = ns.getScriptRam("Grow_V3.js");
        const ram_33 = ns.getScriptRam("Weaken_V3.js");
        const ram_ff = ram_11 + ram_22 + ram_33;
		



    //Terminal prints (for information)

        if (ram_ff*targeta < ram_s) {
            ns.tprint("RAM used per set of scripts is: ", ram_ff,"Gb. ", targeta," targets, for a total of", ram_ff*targa, "Server has ", ram_s," available.");
        }

    //File Transfers

        const scripts = ["Full_V3.js","Grow_V3.js","Weaken_V3.js"];    

        for(const server of targets){
            ns.scp(scripts,server,"home")       
        }

    //Standard Multiple Setup Script

        if (ram_f <= 0) {
            ns.print("Not enough RAM to run scripts, actively trying to run scripts on ", server, " server.");
            await ns.sleep(10000);
        }
      
        if (ram_f < 0) {

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
}