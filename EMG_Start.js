/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const server = ns.args[1];
    const type = ns.args[2];
    
    const g_ram = ns.getScriptRam("EMG_G.js");
    const w_ram = ns.getScriptRam("EMG_W.js");

    const w_threads = ns.getServerMaxRam(server) / w_ram;
    const g_threads = ns.getServerMaxRam(server) / g_ram;

    if (type = "Grow",ns.getServerMaxRam(server) > g_ram) {
        ns.exec("EMG_G.js", server, g_threads, target, g_threads);
    }    

    if (type = "Weaken",ns.getServerMaxRam(server) > w_ram) {
        ns.exec("EMG_W.js", server, w_threads, target), w_threads;
    }  
}   