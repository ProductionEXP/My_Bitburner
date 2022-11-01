/** @param {NS} ns */
export async function main(ns) {

	const server = 	ns.args[0];
	const red = "\u001b[38;5;203m";

	ns.tprint(`${red}Delete Server in 10s`);
            await ns.sleep(5000);
            ns.tprint(`${red}Delete Server in 5s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Delete Server in 4s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Delete Server in 3s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Delete Server in 2s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Delete Server in 1s`);
            await ns.sleep(1000);
            ns.tprint(`${red}Delete Server in 0s`);

	ns.deleteServer(server);
	return ns.tprint(`${red}Removed Server ${server}`);

}