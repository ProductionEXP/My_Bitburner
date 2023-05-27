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
    // traverse from 'origin' up to 'target', return the traverse path leading to 'target'.
    // only traverse each node once.
    //
    // alg is depth-first because the moment target is reached the function can finish
    // and in the majority of cases the target isn't likely to be at the very last path
    // attempted.
    //
    // 'path' isn't necessary to pass in from outside of the function, it is for use with
    // recursive function calls within 'traverse()'.
    
    // each time the function is called we make a local, shallow copy of 'cur_path',
    // because javascript closures make it so the argument refers to the same value
    // as long as it's used in the lexical environment of the original traverse() call.
    //
    // At least I think that's what's going on...
    let path = cur_path.slice();
    // add origin to the path
    path.push(origin);
    // if 'origin' is equal to 'target', we're done! return the path
    ns.print(path);
    if (origin == target){
        return path;
    }
    
    let nodes = ns.scan(origin); // first, scan all connections from 'origin'.
    
    // if there are no further connections at this stage, the function fails.
    if (nodes.length === 0){
        ns.print("failing because there is no possible path.");
        return -1;
    }
    
    // for every connection found...
    while (nodes.length !== 0) {
        // take a connection out of 'nodes' and store it locally.
        let node = nodes.pop();
        // check if connection has been visited before.
        if (path.includes(node)){
            // we've already checked this connection, move on to the next one.
            continue;
        } else {
            let new_path = traverse(ns, node, target, path);
            if (new_path != -1) {
                // if new_path isn't a fail, we succeeded! return it.
                return new_path;
            }
        }
    }
    ns.print("failing because current tree failed.");
    // if we couldn't find the target in any connection from origin, fail.
    return -1;
}