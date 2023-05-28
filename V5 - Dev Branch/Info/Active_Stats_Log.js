// Imports
import { portinfo } from "/src/Function-Library/Functions.js"
import { progressBar } from "/src/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
  ns.tail();ns.disableLog("ALL");ns.clearLog();
  ns.print("Active log started")

  const green = "\u001b[38;5;046m";
  const orange = "\u001b[38;5;208m";
  let t1 = 0;

  const augmentsowned = ns.singularity.getOwnedAugmentations().slice().length;

  while(true){
    ns.clearLog();
    ns.print(`${green}Number Of Avilible Ports is ${portinfo(ns, 'number')}`);
    ns.print(`${green}`);
    ns.print(`${green}Server income ${ns.formatNumber(ns.getTotalScriptIncome()[0])}/s`);
    ns.print(`${orange}Server EXP income ${ns.formatNumber(ns.getTotalScriptExpGain())}/s`);
    ns.print(`${green}`);
    if(ns.getHackingLevel() < 2500 || ns.getPlayer().money < 100000000000 || augmentsowned < ns.getBitNodeMultipliers().DaedalusAugsRequirement || t1 <= 60){
      ns.print(`${green}~~Fl1ght.exe Progress~~`);

      let hacklevlpresent = ((ns.getHackingLevel()/2500));
      let moneypresent = ((ns.getPlayer().money/100000000000));
      let augmentpresent = ((augmentsowned/ns.getBitNodeMultipliers().DaedalusAugsRequirement));
      let mc = 0; let hc =0; let ac = 0; let done = 0;
      if(ns.getHackingLevel() > 2500) {hacklevlpresent = 1}
      if(ns.getPlayer().money > 100000000000) {moneypresent = 1}
      if(augmentsowned > 30) {augmentpresent = 1}
      const fl1ghtpresent = ((hacklevlpresent+moneypresent+augmentpresent)/3);

      ns.print(`${green}${progressBar(fl1ghtpresent, 50)} ${ns.formatNumber(fl1ghtpresent*100,0)}%`);
      ns.print("");

      if((ac+mc+hc) === 3) {done = 1}

      if(ns.getHackingLevel() < 2500) {
        ns.print(`${green}Hacking Level           ${progressBar((hacklevlpresent),26)} ${ns.formatNumber(hacklevlpresent*100, 0)}%`);
        hc = 0;
      }

      else {hc = 1}

      if(ns.getPlayer().money < 100000000000) {
        ns.print(`${green}Money                   ${progressBar((moneypresent),26)} ${ns.formatNumber(moneypresent*100, 0)}%`);
        mc = 0;
      }

      else {mc = 1}

      if(augmentsowned < 30) {
        ns.print(`${green}Installed augmentations ${progressBar((augmentpresent),26)} ${ns.formatNumber(augmentpresent*100, 0)}%`)
        ac = 0;
      }

      else {ac = 1}

      if(((ns.getHackingLevel() > 2500) && (ns.getPlayer().money > 100000000000) && (augmentsowned > ns.getBitNodeMultipliers().DaedalusAugsRequirement) && (t1 <= 60)) || done === 1) {
        ns.print('Fl1ght.exe Compleated')
        t1 = t1+1
      }
    }


    await ns.sleep(100);
  }
}