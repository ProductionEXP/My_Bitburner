// Imports
import { AllServers } from "/src/Function-Library/Functions.js"

// Constants
const files = ["Hacking/HG.js"];

const red = "\u001b[38;5;009m";
const blue = "\u001b[38;5;012m";
const green = "\u001b[38;5;010m";

let valid_ram = [];
let print_ram = [];
let check_ram = [];
let ram = '';
let i = 0;
let id = 0;

/** @param {NS} ns */
export async function main(ns) {
    const agrs = ns.flags([['Upgrade', false], ['New', false], ['Remove', false], ['Rename', false]]);
    if(agrs.New) {
	    for (i = 20; i >= 1; i--) {
            if(Math.pow(2, i) <= ns.getPurchasedServerMaxRam()) {
                id = i 
                print_ram.unshift(ns.formatRam(Math.pow(2, i)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(Math.pow(2, i)))}`); 
                valid_ram.unshift(Math.pow(2, i));
                check_ram.unshift([ns.formatRam(Math.pow(2, i)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(Math.pow(2, i)))}`, Math.pow(2, i), id]);
            }
        }
        ram = await ns.prompt(`Please select how much RAM for your new server.`, {type: "select", choices: print_ram});
        if(ram == '') {ns.exit()}
        for (i = check_ram.length-1; i >= 0; i--) {
            if(check_ram[i][0] == ram) {ram = check_ram[i][1]}
        }
        const name = await ns.prompt("Please enter a name for the server.", { type: "text" });
        if(AllServers(ns, "home").includes(name)) {return ns.tprint(`${red}Server with a name of ${name} already exists`);}
        const buyserver = await ns.prompt(`Do you want to buy a server named: ${name}, with ${ns.formatRam(ram)} of RAM?\nThis will cost ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
        if (buyserver != true) {return ns.tprint(`${red}Script exited.`);}
        else if (buyserver == true) {
            if (Math.round(ns.getBitNodeMultipliers().PurchasedServerLimit*25) - AllServers(ns, 'home').slice().length > 0) {
                ns.purchaseServer(name, ram);
			    ns.tprint(`${green}Purchased a server with ${ram}Gb. New server is named: ${name}`);
			    ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
			    const setup2 = await ns.prompt(`Do you want to run Hacking/MultiSetup.js on ${name}?`);
			    if(setup2 == true) {ns.run('Hacking/MultiSetup.js', 1, name)}
			    ns.scp(files, name, "home");
                return ns.tprint(`${green}Scrip Completed.`)
            }
            else {return ns.tprint(`${red}Script exited.\nYou own too many servers to purchase a new one`)}
        }
    }

    if(agrs.Remove) {}
    if(agrs.Upgrade) {}
    if(agrs.Rename) {}
    else {return ns.tprint(`${red}Script exited.\nScrip type not set`)}
}