/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const server = ns.args[1];
    const type = ns.args[2].toLowerCase();

    const w_threads = Math.floor(ns.getServerMaxRam(server) / ns.getScriptRam("EMG_W.js"));
    const g_threads = Math.floor(ns.getServerMaxRam(server) / ns.getScriptRam("EMG_G.js"));

    ns.scp("EMG_W.js", server, "home");
    ns.scp("EMG_G.js", server, "home");

    if (type == "grow" && g_threads > 0) {
        ns.exec("EMG_G.js", server, g_threads, target, g_threads);
    }
   
    if (type == "weaken" && w_threads > 0) {
        ns.exec("EMG_W.js", server, w_threads, target, w_threads);
    }
}