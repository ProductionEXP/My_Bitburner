// Imports
import { tail } from "/src/Function-Library/Functions.js"
import { portsnumber } from "/src/Function-Library/Functions.js"
import { CurentHackServers } from "/src/Function-Library/Functions.js"
import { AllServers } from "/src/Function-Library/Functions.js"
import { Whatports } from "/src/Function-Library/Functions.js"
import { Portem } from "/src/Function-Library/Functions.js"


/** @param {NS} ns */
export async function main(ns) {
    const target = ns.args[0];
    const functioninput = ns.args[1];

    if (target === 'tail') {ns.tprint(tail(ns, functioninput))}
    if (target === 'portsnumber') {ns.tprint(portsnumber(ns))}
    if (target === 'CurentHackServers') {ns.tprint(CurentHackServers(ns))}
    if (target === 'AllServers') {ns.tprint(AllServers(ns))}
    if (target === 'Whatports') {ns.tprint(Whatports(ns))}
    if (target === 'Portem') {ns.tprint(Portem(ns, functioninput))}
}