/** @param {NS} ns */
export async function main(ns) {

    ns.disableLog("ALL");
    ns.enableLog("print");

    //Constants

        const server = arr[0];  //What server will the scripts run on
        const targets = arr.slice(1);   //Slices the ammount of targets
        
	    const targeta = targets.length; //Finds the ammount of targets

        const serverram = ns.getServerMaxRam(server) - ns.getServerUsedRam(server); //Get server's availibe RAM
        
        const ram_f = ns.getScriptRam("Full_V3.js") + ns.getScriptRam("Grow_V3.js") + ns.getScriptRam("Weaken_V3.js");  //Finds the ammount of ram needed to run the three scripts

        const v3t = Math.floor(targeta/ram_f);  //Takes targeta (ammount of targets) devides it by the ram that it takes to run the three scripts
                                                //Then rounds it down, ex. 49.98 beomes 49

    //Terminal prints (for information)

        if (ram_ff*targeta < ram_s) {
            ns.tprint("RAM used per set of scripts is: ", ram_f,"Gb. ", targeta," targets, for a total of ", ram_f*targeta, ". Server has ", serverram,"Gb available.");
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
    //Closed script comments line
}
    
