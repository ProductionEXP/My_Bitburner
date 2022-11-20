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
export function main(ns) {

}