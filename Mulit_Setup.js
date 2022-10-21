/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];                                                                            
	const server = ns.args[1];                                                                            

	const ram_s = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);								    
	const ram_1 = ns.getScriptRam("Full_V2.js") * 5;                                                       
	const ram_2 = ns.getScriptRam("Grow_V2.js") * 5;                                                         
	const ram_3 = ns.getScriptRam("Weaken_V2.js") * 5;
	const ram_f = ram_s - ram_1 - ram_2 - ram_3;

	if(ns.fileExists("Full_V2.js","home")) {
		ns.scp("Full_V2.js", server, "home");
	}

	if(ns.fileExists("Grow_V2.js","home")) {
		ns.scp("Grow_V2.js", server, "home");
	}

	if(ns.fileExists("Weaken_V2.js","home")) {
		ns.scp("Weaken_V2.js", server, "home");
	}
	
	ns.disableLog("ALL");          
	ns.enableLog("print"); 

    
}