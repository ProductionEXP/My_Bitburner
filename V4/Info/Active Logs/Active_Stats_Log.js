import { hacknetm } from 'Hacknet_Log.js';
import { serverm } from 'Server_Log.js';
import { servers } from 'Server_Log.js';

const green = "\u001b[38;5;040m";
const orange = "\u001b[38;5;040m";

/** @param {NS} ns */
export async function main(ns) {
    ns.tptint("Active log started")

    for (;;) {
        ns.tptint
        ns.tprint(`${green}Server income ${serverm}/s`);
        ns.tprint(`${green}Hacknet income ${hacknetm}/s`);
        ns.tprint(`${orange}Server EXP income ${servers}/s`);
        ns.tprint(`${green}Total Income ${serverm + hacknetm}/s`);
    }
}

