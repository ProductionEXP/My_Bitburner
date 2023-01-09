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

    if (ns.fileExists("BruteSSH.exe", "home")) {
        const shh = 1;
    } 
        else {
            const shh = 0
        }
    
    if (ns.fileExists("FTPCrack.exe", "home")) {
        const ftpc = 2;
    }
        else {
            const ftpc = 0
        }

    if (ns.fileExists("relaySMTP.exe", "home")) {
        const smtp = 3;
    }
        else {
         const smtp = 0
        }

    if (ns.fileExists("HTTPWorm.exe", "home")) {
        const httpw = 4;
    }   
        else {
            const httpw = 0
        }

    if (ns.fileExists("SQLInject.exe", "home")) {
        const sqli = 5;
    }
        else {
            const sqli = 0
        }
    
    const portsnumber = shh+ftpc+smtp+httpw+sqli
    return portsnumber

}