/** @param {NS} ns */
const valid_ram = [...Array(20).keys()].map(i => 2 ** (i + 1));
const files = ["Grow_V3.js", "Full_V3.js", "Weaken_V3.js", "FullSetup.js", "NewServer.js"];

// Colors
	const red = "\u001b[38;5;001m";
	const blue = "\u001b[38;5;004m";
	const green = "\u001b[38;5;002m";

export async function main(ns) {
	const [ram, name] = ns.args;

	if (ram === "max") {
		let max= 0;
    	for (let i = 20; i >= 1; i--) {
                if (ns.getPurchasedServerCost(Math.pow(2, i)) <= ns.getPlayer().money) {
                    max= Math.pow(2, i);
                    break;
            }
        }
		ns.purchaseServer(name, max);
		ns.tprint(`${green}Purchased a server with ${max}Gb. New server is named: ${name}`);
		ns.scp(files, name, "home");
		ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(max), 3)}`);
		return ns.tprint(`${red}Script ended.`);
	}
	
	if (!valid_ram.includes(ram)) {
		ns.tprint("RAM value must be a power of 2 that's below or equal to 2^20.");
		ns.tprint("Your value was ", ram);
		ns.tprint("Accepted values are 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, or max");
		return ns.tprint(`${red}Script failed.`);
	}

	if (ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(ram)) {
		ns.tprint(`${blue}Need more money to purchase server with ${ram}Gb of ram`);
		ns.tprint(`${blue}Have ${ns.formatNumber(ns.getServerMoneyAvailable("home"), 3)} Need ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
		ns.tprint(`${blue}Need ${ns.formatNumber(ns.getPurchasedServerCost(ram) - ns.getServerMoneyAvailable("home"), 3)} more`);
		return ns.tprint(`${red}Script failed.`);
	}

	ns.purchaseServer(name, ram);
	ns.tprint(`${green}Purchased a server with ${ram}Gb. New server is named: ${name}`);
	ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
	ns.scp(files, name, "home");
}