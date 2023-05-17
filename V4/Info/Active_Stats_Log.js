//Imports
import { portsnumber } from "/src/Function-Library/Functions"

/** @param {NS} ns */
export async function main(ns) {
  ns.tail();ns.disableLog("ALL");ns.clearLog();
  ns.print("Active log started")

  const timeinstall = ns.getResetInfo().lastAugReset/1000;

  const green = "\u001b[38;5;040m";
  const orange = "\u001b[38;5;202m";

  while(true){
    ns.clearLog();
    ns.print(`${green}Number Of Avilible Ports is ${portsnumber(ns)}`);
    ns.print(`${green}`);
    ns.print(`${green}Server income ${ns.formatNumber(ns.getTotalScriptIncome()[0], "$0,0.00a")}/s`);
    ns.print(`${green}Hacknet income ${ns.formatNumber(ns.getMoneySources().sinceInstall.hacknet/timeinstall, "$0,0.00a")}/s`);
    ns.print(`${orange}Server EXP income ${ns.formatNumber(ns.getTotalScriptExpGain(), "0,0.00a")}/s`);
    ns.print(`${green}`);
    ns.print(`${green}Total Income ${ns.formatNumber(ns.getTotalScriptIncome()[0] + (ns.getMoneySources().sinceInstall.hacknet/timeinstall), "$0,0.00a")}/s`);
    await ns.sleep(10);
  }
}