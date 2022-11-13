/** @param {NS} ns */
export function ServerM(ns) {
    ns.nFormat(ns.getTotalScriptIncome()[0], "$0,0.00")
}

export function ServerE(ns) {
    ns.nFormat(ns.getTotalScriptExpGain(), "0,0.00")
}