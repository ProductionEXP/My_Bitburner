/** @param {NS} ns **/
export async function main(ns) {
	const target = ns.args[0];                                                                            // Var 1, is the targeted server or the server being attacked by the scripts
	const server = ns.args[1];                                                                            // Var 2, is the server that the scripts will run on

	const ram_s = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);								//Finds the availibe ram of the server that you plan to run the scripts on     
	const ram_1 = ns.getScriptRam("Full_V2.js") * 5;                                                         //Finds the ammount of ram needed to run the scripts
	const ram_2 = ns.getScriptRam("Grow_V2.js") * 5;                                                         //|
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
	
	ns.disableLog("ALL");                                                                               //Disables the output log for all functions
	ns.enableLog("print");                                                                              //Enables the output log for the "ptint" function

	if (ram_f > 0) {                                                                                    //Determins if there is enough ram for the scripts to run

		ns.run("PortsNNuke.js", 1, target);

		await ns.sleep(500);

		ns.exec("Full_V2.js", server, 5, target);                                                 		//Run the "Full_V2.js" script on the designated server
		ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target)
		ns.exec("Grow_V2.js", server, 5, target);                                                		//Run the "Grow_V2.js" script on the designated server
		ns.print("Grow script started to run on ", server, ". Target is ", target)
		ns.exec("Weaken_V2.js", server, 5, target);                                               		//Run the "Weaken_V2.js" script on the designated server
		ns.print("Weaken script started to run on ", server, ". Target is ", target)
	}

	if (ram_f < 0) {

		ns.print("Not enough RAM to run scripts, actively trying to run scripts on ", server, " server.");
		await ns.sleep(10000);                                                                          //Stops the script for 10s (10000ms)
	}
}