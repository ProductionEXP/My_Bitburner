/** @param {NS} ns */
export async function main(ns) {

	const server = 	ns.args.slice(0);
        const servera = server.length;
	const red = "\u001b[38;5;203m";

    if (servera > 1) {
    	ns.tprint(`${red}Deleting Server in 10s`);

        await ns.sleep(5000);
        ns.tprint(`${red}Deleting Server in 5s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Server in 4s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Server in 3s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Server in 2s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Server in 1s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Server in 0s`);
    }

    if (servera = 1) {
        ns.tprint(`${red}Deleting Servers in 10s`);

        await ns.sleep(5000);
        ns.tprint(`${red}Deleting Servers in 5s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Servers in 4s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Servers in 3s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Servers in 2s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Servers in 1s`);

        await ns.sleep(1000);
        ns.tprint(`${red}Deleting Servers in 0s`);
    }

    for (const servers of server) {
	    ns.deleteServer(servers);
	    ns.tprint(`${red}Removed Server ${servers}`);
    }

    ns.tprint(`${red}Removed all servers that where defined.`)
}