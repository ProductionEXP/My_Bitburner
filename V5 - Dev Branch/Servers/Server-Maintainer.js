// Imports
import { AllServers } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
    const files = ["Hacking/HG.js"];
    const red = "\u001b[38;5;009m";
    const blue = "\u001b[38;5;012m";
    const green = "\u001b[38;5;010m";
    let valid_ram = []; let print_ram = []; let check_ram = []; let upgrade_ram = []; let servers = []; let server = null; let max_ram = null; let test_ram = null; let yorn = null; let data_upgrade_ram = []; let allservers = []; let display_upgrade_ram = []; let ram = null; let i = null; let id = null; let test_server = null; let new_ram = null; let upgrade_cost = null;
    const agrs = ns.flags([['Upgrade', false], ['New', false], ['Remove', false], ['Rename', false]]);
    
    for (i = 20; i >= 1; i--) {
        if(Math.pow(2, i) <= ns.getPurchasedServerMaxRam()) {
            id = i;
            print_ram.unshift(ns.formatRam(Math.pow(2, i)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(Math.pow(2, i)))}`); 
            valid_ram.unshift(Math.pow(2, i));
            check_ram.unshift([ns.formatRam(Math.pow(2, i)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(Math.pow(2, i)))}`, Math.pow(2, i), id]);
        }
    }
    if(agrs.New) {
        ram = await ns.prompt(`Please select how much RAM for your new server.`, {type: "select", choices: print_ram});
        if(ram == '') {ns.exit();}
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
			    ns.tprint(`${green}Purchased a server with ${ns.formatRam(ram)}. New server is named: ${name}`);
			    ns.tprint(`${green}New Server named: ${name}, costed ${ns.formatNumber(ns.getPurchasedServerCost(ram), 3)}`);
			    const setup2 = await ns.prompt(`Do you want to run Hacking/MultiSetup.js on ${name}?`);
                ns.scp(files, name, "home");
			    if(setup2 == true) {ns.run('Hacking/MultiSetup.js', 1, name);}
                return ns.tprint(`${green}Script Completed.`);
            }
            else {return ns.tprint(`${red}Script exited.\nYou own too many servers to purchase a new one`)}
        }
    }

    if(agrs.Remove) {
        server = await ns.prompt("Please enter a name for the server that you want to remove.", { type: "select", choices: AllServers(ns, "home")});
        yorn = await ns.prompt(`Are you sure you want to delete the server named: \n${server} \nThis action can NOT be undone and you will not get refunded`);
        if(yorn == true) {
            if(!AllServers(ns, "home").includes(server)) {
                return ns.tprint(`${red}Server with a name of ${server} does not exist`);
            }
            ns.killall(server);
	        ns.deleteServer(server);
    	    return ns.tprint(`${red}Removed Server ${server}`);
        }
    }

    if(agrs.Upgrade) {
        allservers = AllServers(ns, 'home')
        max_ram = valid_ram[valid_ram.length - 1];
        for (i = allservers.length-1; i >= 0; i--) {
            test_server = allservers[i]
            ram = (ns.formatRam(ns.getServerMaxRam(test_server)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(ns.getServerMaxRam(test_server)))}`);
            for (i = check_ram.length-1; i >= 0; i--) {
                if(check_ram[i][0] == ram) {ram = check_ram[i][1]}
            }
            if(ram < max_ram) {
                servers.push(test_server)
            }
        }
        if(servers.length == 0) {return ns.tprint(`${green}No servers to upgrade.`)}
        server = await ns.prompt("Please select the server that you want to upgrade the ram of.", { type: "select", choices: servers});
        ram = (ns.formatRam(ns.getServerMaxRam(server)) + ` - $${ns.formatNumber(ns.getPurchasedServerCost(ns.getServerMaxRam(server)))}`)
        for (i = check_ram.length-1; i >= 0; i--) {
            if(check_ram[i][0] == ram) {ram = check_ram[i][1]}
        }
        for(i = valid_ram.length-1; i >= 0; i--) {
            test_ram = valid_ram[i]
            if(test_ram > ram) {upgrade_ram.unshift(test_ram)}
        }
        if(upgrade_ram.length == 0) {return ns.tprint(`${red}Server can not be upgraded, server is at max ram`)}
        if(upgrade_ram.length >> 0) {
            if(upgrade_ram.length != 1) {
                for(const item in upgrade_ram) {
                    display_upgrade_ram.push(`${ns.formatRam(upgrade_ram[item])} - $${ns.formatNumber(ns.getPurchasedServerUpgradeCost(server, upgrade_ram[item]))}`)
                    data_upgrade_ram.push([`${ns.formatRam(upgrade_ram[item])} - $${ns.formatNumber(ns.getPurchasedServerUpgradeCost(server, upgrade_ram[item]))}`, upgrade_ram[item], Math.log(upgrade_ram[item]) / Math.log(2)])
                }
                new_ram = await ns.prompt("Please select the new ammount of ram for the server.", { type: "select", choices: display_upgrade_ram});
                for(i = display_upgrade_ram.length-1; i >= 0; i--) {
                    if(new_ram == display_upgrade_ram[i]) {new_ram = data_upgrade_ram[i][1]}
                }
            }
            else {new_ram = upgrade_ram[0]}
            upgrade_cost = ns.getPurchasedServerUpgradeCost(server, new_ram)
            yorn = await ns.prompt(`Do you want to upgrade ${server} with ${ns.formatRam(ns.getServerMaxRam(server))} to ${ns.formatRam(new_ram)}?\nThis will cost $${ns.formatNumber(upgrade_cost)}`);
            if(yorn == true) {
                ns.upgradePurchasedServer(server, new_ram)
			    ns.tprint(`${green}Upgrade Server named: ${server}, to ${ns.formatRam(new_ram)}, costed $${ns.formatNumber(upgrade_cost)}`);
			    const setup2 = await ns.prompt(`Do you want to kill all old scrips, and re run Hacking/MultiSetup.js on ${server}?`);
                ns.scp(files, server, "home");
			    if(setup2 == true) {ns.killall(server); ns.run('Hacking/MultiSetup.js', 1, server);}
                return ns.tprint(`${green}Script Completed.`);
            }
        }
    }

    if(agrs.Rename) {
        server = await ns.prompt("Please selecte the server that you want to rename.", { type: "select", choices: AllServers(ns, "home")});
        newname = await ns.prompt("Please enter a new name for the server.", { type: "text" });
        if(!AllServers(ns, "home").includes(server)) {
            return ns.tprint(`${red}Server with a name of ${server} does not exist`);
        }
        yorn = await ns.prompt(`Are you sure you want to rename the server named: \n${server}\nTo:\n${newname}`);
        if(yorn == true) {
            ns.renamePurchasedServer(server, newname)
            return ns.tprint(`${green}Server ${server}, Was renamed to ${newname}`)
        }
    }

    else {return ns.tprint(`${red}\nScript exited.\nScrip type not set\n${green}Possible flags are:\n--New\n--Remove\n--Rename\n--Upgrade`);}
}