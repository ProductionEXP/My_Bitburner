/** @param {NS} ns */
export async function main(ns) {
	const server = 	ns.args.slice(0);
    const red = "\u001b[38;5;009m";
    const yorn = await ns.prompt(`Are you sure you want to delete the server(s) named ${server}?`);

    if(yorn === true) {
        for (const servers of server) {
	        ns.deleteServer(servers);
    	    ns.tprint(`${red}Removed Server ${servers}`);
        }
    }
}