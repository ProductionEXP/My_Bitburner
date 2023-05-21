/** @param {NS} ns **/
export async function main(ns) {
	function formatnum(num) {
		const options = {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		};
		const formatted = Number(num).toLocaleString('en', options);
		return formatted;
	}

	class serverObj {
		constructor(name,parent) {
			this.name=name;
			this.parent=parent;
		}
	}

	var serverlist = {};

	function showmap(server = 'home', lastserver = 'home', levels = 0, hidebig = false,target=null) {
		
		// for finding targets
		var obj = new serverObj(server,lastserver);
		serverlist[server] = obj;

		var level = ns.getHackingLevel();
		var svrarr = ns.scan(server);
		var hyphens = '';
		for (var i = 0; i < levels; i++) {
			hyphens += '----';
		}
		for (var j = 0; j < svrarr.length; j++) {
			if (svrarr[j] != lastserver) {

				var host = svrarr[j];
				// get required skill
				var skl = ns.getServerRequiredHackingLevel(host);

				if ((!hidebig) || (skl <= level)) {
					// get data
					var secmin = ns.getServerMinSecurityLevel(host);
					var sec = ns.getServerSecurityLevel(host);
					var cashmax = ns.getServerMaxMoney(host);
					var cash = ns.getServerMoneyAvailable(host);
					var ram = ns.getServerMaxRam(host).toFixed(2);
					var ports = ns.getServerNumPortsRequired(host);
					var root = ns.hasRootAccess(host) ? "YES" : "NO";

					if(target==null) {
						// show server
						ns.tprint(" ");
						ns.tprint(hyphens + "> " + host);

						// show data
						ns.tprint(hyphens + "--" + "Root Access: " + root + ", Required hacking skill: " + skl);
						ns.tprint(hyphens + "--" + "Number of open ports required to NUKE: " + ports);
						ns.tprint(hyphens + "--" + "RAM: " + ram + "GB");
						ns.tprint(hyphens + "--" + "Security: " + sec + "/" + secmin + ", Money: $" + formatnum(cash) + "/$" + formatnum(cashmax));
					}



					if(target!=null) {
						if(target.toUpperCase()==host.toUpperCase()) {
							ns.tprint("Path to "+host+" found:");
							
							var patharr = [];
							var svr = obj;
							while(svr.name!='home') {
								patharr = [svr.name].concat(patharr);
								svr=serverlist[svr.parent];
							}

							// patharr = ['home'].concat(patharr);
							patharr.push(target);

							var path = "home";
							for(var i=0;i<patharr.length;i++) {
								path+=" --> "+patharr[i];
							}
							ns.tprint(path);
							ns.exit();
						}
					}

					// show sublinks
					showmap(svrarr[j], server, levels + 1, hidebig,target);
				}
			}
		}
	}
	var target=null;
	var hidebig = false;
	if (ns.args.length > 0) {
		if (ns.args[0] == "hide") {
			hidebig = true;
		} else if ((ns.args[0]=="seek")||(ns.args[0]=="find")&&(ns.args.length==2)){
			target=ns.args[1];
		} else {
			ns.tprint("Syntax error, use 'run netmap.js [hide|seek] [target]'");
			ns.exit();
		}
	}
	showmap('home', 'home', 0, hidebig,target);

	if(target!=null) {
		ns.tprint("Server "+target+" not found! Please check your spelling.")
	}
}