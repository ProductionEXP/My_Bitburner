/** @param {NS} ns */
export async function main(ns) {

	var des = ns.args[0];
	var files = ["Grow_V2.js", "Full_V2.js", "Weaken_V2.js", "Setup_F.js","Mulit_Setup.js", "EMG_G.js","EMG_W.js", "ENG_Start.js",];
	var files2 =["NewServer.js","NewServerSetUp.js","PortsNNuke.js","StartUp_SA.js"];

	ns.scp(files, des, "home");
	ns.scp(files2, des, "home");

}