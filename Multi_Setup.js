/** @param {NS} ns */
export async function main(ns) {

    const target1 = ns.args[0];
    const target2 = ns.args[1];
    const target3 = ns.args[2];
    const target4 = ns.args[3];
    const target5 = ns.args[4];
    const target6 = ns.args[5];
	
	const targeta = ns.args[6];
		const targa = targeta*5;

    const server = ns.args[7];

    const ram_s = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
    const ram_1 = ns.getScriptRam("Full_V2.js") * targa;
    const ram_2 = ns.getScriptRam("Grow_V2.js") * targa;
    const ram_3 = ns.getScriptRam("Weaken_V2.js") * targa;
    const ram_f = ram_s - ram_1 - ram_2 - ram_3;

    if (ns.fileExists("Full_V2.js", "home")) {
        ns.scp("Full_V2.js", server, "home");
    }

    if (ns.fileExists("Grow_V2.js", "home")) {
        ns.scp("Grow_V2.js", server, "home");
    }

    if (ns.fileExists("Weaken_V2.js", "home")) {
        ns.scp("Weaken_V2.js", server, "home");
    }

    ns.disableLog("ALL");
    ns.enableLog("print");

    if (ram_f > 0) {

		if (target1 != "_") {	
        	ns.run("PortsNNuke.js", 1, target1);
		}

        if (target2 != "_") {	
        	ns.run("PortsNNuke.js", 1, target2);
		}

		if (target3 != "_") {	
        	ns.run("PortsNNuke.js", 1, target3);
		}

		if (target4 != "_") {	
        	ns.run("PortsNNuke.js", 1, target4);
		}

		if (target5 != "_") {	
        	ns.run("PortsNNuke.js", 1, target5);
		}

		if (target6 != "_") {	
        	ns.run("PortsNNuke.js", 1, target6);
		}

        await ns.sleep(500);

        if (target1 != "_") {
            ns.exec("Full_V2.js", server, 5, target1);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target1);
            ns.exec("Grow_V2.js", server, 5, target1);
            ns.print("Grow script started to run on ", server, ". Target is ", target1);
            ns.exec("Weaken_V2.js", server, 5, target1);
            ns.print("Weaken script started to run on ", server, ". Target is ", target1);
        }

        if (target2 != "_") {
            ns.exec("Full_V2.js", server, 5, target2);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target2);
            ns.exec("Grow_V2.js", server, 5, target2);
            ns.print("Grow script started to run on ", server, ". Target is ", target2);
            ns.exec("Weaken_V2.js", server, 5, target2);
            ns.print("Weaken script started to run on ", server, ". Target is ", target2);
        }

        if (target3 != "_") {
            ns.exec("Full_V2.js", server, 5, target3);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target3);
            ns.exec("Grow_V2.js", server, 5, target3);
            ns.print("Grow script started to run on ", server, ". Target is ", target3);
            ns.exec("Weaken_V2.js", server, 5, target3);
            ns.print("Weaken script started to run on ", server, ". Target is ", target3);
        }

        if (target4 != "_") {
            ns.exec("Full_V2.js", server, 5, target4);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target4);
            ns.exec("Grow_V2.js", server, 5, target4);
            ns.print("Grow script started to run on ", server, ". Target is ", target4);
            ns.exec("Weaken_V2.js", server, 5, target4);
            ns.print("Weaken script started to run on ", server, ". Target is ", target4);
        }

        if (target5 != "_") {
            ns.exec("Full_V2.js", server, 5, target5);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target5);
            ns.exec("Grow_V2.js", server, 5, target5);
            ns.print("Grow script started to run on ", server, ". Target is ", target5);
            ns.exec("Weaken_V2.js", server, 5, target5);
            ns.print("Weaken script started to run on ", server, ". Target is ", target5);
        }

        if (target6 != "_") {
            ns.exec("Full_V2.js", server, 5, target6);
            ns.print("Full (Hack, Grow, Weaken) script started to run on ", server, ". Target is ", target6);
            ns.exec("Grow_V2.js", server, 5, target6);
            ns.print("Grow script started to run on ", server, ". Target is ", target6);
            ns.exec("Weaken_V2.js", server, 5, target6);
            ns.print("Weaken script started to run on ", server, ". Target is ", target6);
        }
    }
    if (ram_f < 0) {
        ns.print("Not enough RAM to run scripts, actively trying to run scripts on ", server, " server.");
        await ns.sleep(10000);
    }
}