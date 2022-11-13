/** @param {NS} ns */
export function HacknetM(ns) {

    ns.disableLog("ALL");

    //Constants
        const server = ns.args[0];
        const serverram = ns.getServerMaxRam(server) - ns.getServerUsedRam(server); 

    //Color Constants
        const white = "\u001b[38;5;250m";
	    const blue = "\u001b[38;5;116m";
    	const green = "\u001b[38;5;78m";
	    const yellow = "\u001b[38;5;185m";
    	const red = "\u001b[38;5;203m";
	    const reset = "\u001b[0m";
    	const orange = "\u001b[38;5;215m";
	    const indigo = "\u001b[38;5;33m";
    	const violet = "\u001b[38;5;141m";

    if (ns.getHackingLevel() > 56 ) {
        ns.tprint()
    }

}