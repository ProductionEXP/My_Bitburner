/** @param {NS} ns */
export function tail(ns, input) {

    if (input != "Default" || "TailFull" || "TailCostum" || "LogFull") {
        return "fail"
    }

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

    if (ns.fileExists("FTPCrack.exe", "home")) {
        ftpc = 1;
    }

    if (ns.fileExists("relaySMTP.exe", "home")) {
        smtp = 1;
    }

    if (ns.fileExists("HTTPWorm.exe", "home")) {
        httpw = 1;
    }   

    if (ns.fileExists("SQLInject.exe", "home")) {
        sqli = 1;
    }
    
    const portsnumber = (shh+ftpc+smtp+httpw+sqli);
    return portsnumber

}