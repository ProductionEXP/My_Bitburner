import { AllServers } from "/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
	const server = 	ns.args.slice(0);
    const red = "\u001b[38;5;009m";
    const yorn = await ns.prompt(`Are you sure you want to delete the server(s) named: \n${server} \nThis action can NOT be undone`);

    if(yorn === true) {
        for (const servers of server) {
            if(!AllServers(ns, "home").includes(servers)) {
                ns.tprint(`${red}Server with a name of ${servers} does not exist`)
                continue; 
            }
	        ns.deleteServer(servers);
    	    ns.tprint(`${red}Removed Server ${servers}`);
        }
    }
}