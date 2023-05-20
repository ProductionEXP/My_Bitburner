/** @param {NS} ns */
export async function main(ns) {

	const server = 	ns.args.slice(0);
        const servera = server.length;
    const red = "\u001b[38;5;009m";
    const yorn = await ns.prompt(`Are you sure you want to delete the servers named ${server}?`);

    if (yorn === true) {
        await ns.sleep(1000);
    }

    else {
        return ns.tprint(`${red}Script killed.`);
    }

    ns.tprint(`${red}Deleting Server(s) in 10s`);   

    await ns.sleep(5000);
    ns.tprint(`${red}Deleting Server(s) in 5s`);

    await ns.sleep(1000);
    ns.tprint(`${red}Deleting Server(s) in 4s`);

    await ns.sleep(1000);
    ns.tprint(`${red}Deleting Server(s) in 3s`);

    await ns.sleep(1000);
    ns.tprint(`${red}Deleting Server(s) in 2s`);

    await ns.sleep(1000);
    ns.tprint(`${red}Deleting Server(s) in 1s`);

    await ns.sleep(1000);
    ns.tprint(`${red}Deleting Server(s) in 0s`);

    for (const servers of server) {
	    ns.deleteServer(servers);
	    ns.tprint(`${red}Removed Server(s) ${servers}`);
    }
}