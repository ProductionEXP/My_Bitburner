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

    if (target === 'tail') {tail(ns, functioninput)}
    if (target === 'portsnumber') {portsnumber(ns)}
    if (target === 'CurentHackServers') {CurentHackServers(ns)}
    if (target === 'AllServers') {AllServers(ns)}
    if (target === 'Whatports') {Whatports(ns)}
    if (target === 'Portem') {Portem(ns, functioninput)}
}