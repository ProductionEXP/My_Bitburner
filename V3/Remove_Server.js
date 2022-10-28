/** @param {NS} ns */
export async function main(ns) {

	const server = 	ns.args[0];
	const red = "\u001b[38;5;203m";

	ns.deleteServer(server);
	return ns.tprint(`${red}Removed Server ${server}`);

}