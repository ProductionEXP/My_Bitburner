// Imports
import { portsnumber } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
  ns.tail();ns.disableLog("ALL");ns.clearLog();
  ns.print("Active log started")

  const green = "\u001b[38;5;046m";
  const orange = "\u001b[38;5;208m";
  let t1 = 0;

  //const augmentsowned = Singularity.getOwnedAugmentations().slice()

  while(true){
    ns.clearLog();
    ns.print(`${green}Number Of Avilible Ports is ${portsnumber(ns)}`);
    ns.print(`${green}`);
    ns.print(`${green}Server income ${ns.formatNumber(ns.getTotalScriptIncome()[0])}/s`);
    ns.print(`${orange}Server EXP income ${ns.formatNumber(ns.getTotalScriptExpGain())}/s`);
    ns.print(`${green}`);
    if(ns.getHackingLevel() < 2500 || ns.getPlayer().money < 100000000000 /**|| augmentsowned < 30 */ || t1 <= 60){
      ns.print(`${green}~~Fl1ght.exe Progress~~`);
      if(ns.getHackingLevel() < 2500) {
        ns.print(`${green}Hacking Level = ${ns.formatNumber(ns.getHackingLevel(),0,10000)}. Needs 2500`);
      }
      if(ns.getPlayer().money < 100000000000) {
        ns.print(`${green}Money is ${ns.formatNumber(ns.getPlayer().money)}. Need 100b`);
      }
      /**if(augmentsowned << 30) {
        ns.print(`${green}Installed augmentations ${Singularity.getOwnedAugmentations()}. Need 30`)
      }*/

    if((ns.getHackingLevel() > 2500) && (ns.getPlayer().money > 100000000000) /**&& (augmentsowned > 30) */ && (t1 <= 60)) {
      ns.print('Fl1ght.exe Compleated')
      t1 = t1+1
    }
  }
    await ns.sleep(100);
  }
}