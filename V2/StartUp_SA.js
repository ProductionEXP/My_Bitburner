/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("ALL");
	ns.enableLog("print");

	ns.tprint("Targets are n00dles, foodnstuff, sigma-cosmetics, joesguns, hong-fang-tea, harakiri-sushi, iron-gym");

	ns.run("PortsNNuke.js", 1, "n00dles");
	ns.exec("Full_V2.js", "A:", 5, "n00dles");
	ns.exec("Grow_V2.js", "A:", 5, "n00dles");
	ns.exec("Weaken_V2.js", "A:", 5, "n00dles");
	ns.print("All ports installed on n00dles, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "foodnstuff");
	ns.exec("Full_V2.js", "A:", 5, "foodnstuff");
	ns.exec("Grow_V2.js", "A:", 5, "foodnstuff");
	ns.exec("Weaken_V2.js", "A:", 5, "foodnstuff");
	ns.print("All ports installed on foodnstuff, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "sigma-cosmetics");
	ns.exec("Full_V2.js", "A:", 5, "sigma-cosmetics");
	ns.exec("Grow_V2.js", "A:", 5, "sigma-cosmetics");
	ns.exec("Weaken_V2.js", "A:", 5, "sigma-cosmetics");
	ns.print("All ports installed on sigma-cosmetics, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "joesguns");
	ns.exec("Full_V2.js", "A:", 5, "joesguns");
	ns.exec("Grow_V2.js", "A:", 5, "joesguns");
	ns.exec("Weaken_V2.js", "A:", 5, "joesguns");
	ns.print("All ports installed on joesguns, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "hong-fang-tea");
	ns.exec("Full_V2.js", "A:", 5, "hong-fang-tea");
	ns.exec("Grow_V2.js", "A:", 5, "hong-fang-tea");
	ns.exec("Weaken_V2.js", "A:", 5, "hong-fang-tea");
	ns.print("All ports installed on hong-fang-tea, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "harakiri-sushi");
	ns.exec("Full_V2.js", "A:", 5, "harakiri-sushi");
	ns.exec("Grow_V2.js", "A:", 5, "harakiri-sushi");
	ns.exec("Weaken_V2.js", "A:", 5, "harakiri-sushi");
	ns.print("All ports installed on harakiri-sushi, Nuke.exe was run")

	ns.run("PortsNNuke.js", 1, "iron-gym");
	ns.exec("Full_V2.js", "A:", 5, "iron-gym");
	ns.exec("Grow_V2.js", "A:", 5, "iron-gym");
	ns.exec("Weaken_V2.js", "A:", 5, "iron-gym");
	ns.print("All ports installed on iron-gym, Nuke.exe was run")

	await ns.sleep(500);

	ns.tprint("New set of scripts running on server A: , targets are n00dles, foodnstuff, sigma-cosmetics, joesguns, hong-fang-tea, harakiri-sushi, iron-gym");

	await ns.sleep(10000);
	ns.tprint("T- 10s Till script end")
}