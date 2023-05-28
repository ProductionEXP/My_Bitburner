/** @param {NS} ns */
export function portinfo(ns, runtype) {
    const aports = [];
    const ports = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"];
    for(const port of ports) {
        if(ns.fileExists(port, "home")) {aports.push(port)}
    }
    if(runtype === 'number') {return aports.length}
    if(runtype === 'what') {return aports}
}

export function CurentHackServers(ns) {
    const portsnumber1 = portinfo(ns, 'number');
    const servers = [];
    for(const server of AllServers(ns)) {
        if(portsnumber1 >= ns.getServerNumPortsRequired(server) && ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(server) && ns.getServerMaxMoney(server) > 0) {
            servers.push(server)
        }
    }
    return servers
}

export function AllServers(ns) {
    const allservers = ["home"];
    for (const server of allservers) {
        for (const servers of ns.scan(server)) {
            if(!allservers.includes(servers)) {allservers.push(servers)}
        }
    }
    return allservers
}

export function Portem(ns, target) {
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }

    if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target);
    }

    if (ns.fileExists("relaySMTP.exe", "home")) {
        ns.relaysmtp(target);
    }

    if (ns.fileExists("HTTPWorm.exe", "home")) {
        ns.httpworm(target);
    }

    if (ns.fileExists("SQLInject.exe", "home")) {
        ns.sqlinject(target);
    }
}

export function progressBar(progress, length) {
    const em = '-'
    const fu = '|'
    progress = Math.min(1, progress) || 0
    return `[${fu.repeat(Math.floor(length * progress))}${em.repeat(Math.ceil(length * (1 - progress)))}]`
}

// Adapted from https://github.com/Nolshine/bitburner-scripts/blob/batching/pather.ns.js
export function traverse(ns, origin, target, cur_path=[]) {
    let path = cur_path.slice();
    path.push(origin);
    ns.print(path);
    if (origin == target){
        return path;
    }
    
    let nodes = ns.scan(origin);
    
    if (nodes.length === 0){
        ns.print("failing because there is no possible path.");
        return -1;
    }

    while (nodes.length !== 0) {
        let node = nodes.pop();
        if (path.includes(node)){
            continue;
        } else {
            let new_path = traverse(ns, node, target, path);
            if (new_path != -1) {
                return new_path;
            }
        }
    }
    ns.print("failing because current tree failed.");
    return -1;
}