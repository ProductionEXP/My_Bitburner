/** @param {NS} ns */
export async function main(ns) {

	var des = ns.args[0];
	var files = ["New_G.js", "New_F.js", "New_W.js", "Startup.js", "EMG_G.js"];

	ns.scp(files, des, "home");

}