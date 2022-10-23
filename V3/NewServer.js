/** @param {NS} ns */
export async function main(ns) {
	const ram = ns.args[0];
	const name = ns.args[1];

	const files = ["Grow_V3.js", "Full_V3.js", "Weaken_V3.js", "FullSetup.js", "EMG_G.js","EMG_W.js", "EMG_Start.js",];
	const files2 =["NewServer.js","NewServerSetUp.js","PortsNNuke.js"];

	if (ram != 4||8||16||32||64||128||256||512||1024||2048||4096||8192||16384||32768||65536||131072||262144||524288||1048576) {
		ns.tprint("RAM Value can only be a positve integer of 2^");
		ns.tprint("Your value was ", ram);
		ns.tprint("Accepted values are 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288 or, 1048576");
		ns.tprint("Script killed.")

		if (ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(ram)) {
			ns.tprint("Need more money to purchase server with ", ram,"Gb of ram");
			ns.tprint("Have $", ns.getServerMoneyAvailable("home"), ", Need $", ns.getPurchasedServerCost(ram));
			ns.tprint("Need $", ns.getServerMoneyAvailable("home") - ns.getPurchasedServerCost(ram), " more");
		}

		if (ram = 4||8||16||32||64||128||256||512||1024||2048||4096||8192||16384||32768||65536||131072||262144||524288||1048576) {
			if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
				ns.purchaseServer(name, ram);
				ns.tprint("Purchased a server with ", ram, "Gb. New server is named: ", name);

				ns.scp(files, name, "home");
				ns.scp(files2, name, "home");
			}
		}
	}
}