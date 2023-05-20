/** @param {NS} ns */
export function tail(ns, input) {

    if (input === "TailCostum") {
        return "tailC"
    }

    if (input === "TailFull") {
        return "tailF"
    }

    if (input === "LogFull") {
        return "logF"
    }

    if (input === "Default") {
        return "logC"
    }

    if (input != "Default" || "TailFull" || "TailCostum" || "LogFull") {
        return "fail"
    }

}

export function portsnumber(ns) {

    let shh = 0;
    let ftpc = 0;
    let smtp = 0;
    let httpw = 0;
    let sqli = 0;

    if (ns.fileExists("BruteSSH.exe", "home")) {
        shh = 1;
    } 

    if (ns.fileExists("FTPCrack.exe" ,"home")) {
        ftpc = 1;
    }

    if (ns.fileExists("relaySMTP.exe" ,"home")) {
        smtp = 1;
    }

    if (ns.fileExists("HTTPWorm.exe" ,"home")) {
        httpw = 1;
    }   

    if (ns.fileExists("SQLInject.exe" ,"home")) {
        sqli = 1;
    }
    
    const portsnumber = (shh+ftpc+smtp+httpw+sqli);
    return portsnumber

}

export function CurentHackServers(ns) {
    const portsnumber1 = portsnumber(ns);
    const servers = [];
    for(const server of AllServers(ns))
    if(portsnumber1 >= ns.getServerNumPortsRequired(server) && ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(server) && ns.getServerMaxMoney(server) > 0) {
        servers.push(server)
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

export function Whatports(ns) {
    const ports = [];
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ports.push('BruteSSH.exe')
    } 

    if (ns.fileExists("FTPCrack.exe" ,"home")) {
        ports.push('FTPCrack.exe')
    }

    if (ns.fileExists("relaySMTP.exe" ,"home")) {
        ports.push('relaySMTP.exe')
    }

    if (ns.fileExists("HTTPWorm.exe" ,"home")) {
        ports.push('HTTPWorm.exe')
    }   

    if (ns.fileExists("SQLInject.exe" ,"home")) {
        ports.push('SQLInject.exe')
    }
    return ports
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