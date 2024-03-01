// Imports
import { portinfo } from "/src/Function-Library/Functions.js"
import { progressBar } from "/src/Function-Library/Functions.js"
import { AllServers } from "/src/Function-Library/Functions.js"


/** @param {NS} ns */
export async function main(ns) {
    ns.tail();ns.disableLog("ALL");ns.clearLog();
    ns.print("Active log started")

    const green = "\u001b[38;5;046m";
    const orange = "\u001b[38;5;208m";
    const yellow = "\u001b[38;5;226m";
    const purple = "\u001b[38;5;057m";
    const blue = "\u001b[38;5;012m";
    const redred = "\u001b[38;5;009m";
    const red = "\u001b[38;5;160m";
    const bladeburnerblue = "\u001b[38;5;027m";

    const augmentsowned = ns.singularity.getOwnedAugmentations().slice().length;
    const ownedaugmentations = ns.singularity.getOwnedAugmentations();
    const gymclass = "agi" || "dex " || "def" || "str";
    let t1 = 0; let done = 0; let worlddemonhlv = 0; let worlddemonpnum = 0; let TRP = false; let fl1ghtexe = ""; let w0r1dd43m0n = ""; let wdt1 = 0; let event = ""; let time = ""; let date = ""; let worktype = ""; let activegymclass = ""; let hplow = ""; let expplus1 = 0; let expmin1 = 0; let persentage = 0

    if(ownedaugmentations.includes("The Red Pill")) {
        worlddemonhlv = ns.getServerRequiredHackingLevel('w0r1d_d43m0n');
        worlddemonpnum = ns.getServerNumPortsRequired('w0r1d_d43m0n');
        TRP = true;
    }

    while(true){
        ns.setTitle(`--Overview--`);
        event = new Date();
        date = event.toLocaleString('en-GB', { timeZone: 'MST', dateStyle: 'long'});

        if(t1>=60) {fl1ghtexe = "Done"} else {fl1ghtexe = "In progress"}
        if(wdt1>=60 && t1>=60 && TRP) {w0r1dd43m0n = "Done"} else {w0r1dd43m0n = "In progress"}
        ns.clearLog();

        
        if(portinfo(ns, 'number') < 5) {ns.print(`${green}${portinfo(ns, 'number')} Avilible Ports \n `)}

        ns.print(`${green}${time}`);
        ns.print(`${green}${date} \n `);

        ns.print(`${green}--Server Stats--`);
        ns.print(`${green}Server income $${ns.formatNumber(ns.getTotalScriptIncome()[0])}/s`);
        ns.print(`${orange}Server EXP income ${ns.formatNumber(ns.getTotalScriptExpGain())}/s`);
        ns.print(`${green}Home ram | ${ns.formatRam(ns.getServerUsedRam('home'), 2)} / ${ns.formatRam(ns.getServerMaxRam('home'), 2)} (${ns.formatRam(ns.getServerMaxRam('home')-ns.getServerUsedRam('home'), 2)} free)`);
        ns.print(`${green}${progressBar((ns.getServerUsedRam('home') / ns.getServerMaxRam('home')), 34)}\n `);
        if((ns.getPlayer().hp.max / ns.getPlayer().hp.current) <= 0.1) {hplow = " - !!LOW HP!!"}
        ns.print(`${green}--Player Stats--`);
        ns.print(`${red}Health\t- ${ns.getPlayer().hp.current} / ${ns.getPlayer().hp.max}${redred}${hplow}`);
        ns.print(`${green}Money\t- $${ns.formatNumber(ns.getPlayer().money)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.hacking +1, ns.getPlayer().mults.hacking * ns.getBitNodeMultipliers().HackingLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.hacking, ns.getPlayer().mults.hacking * ns.getBitNodeMultipliers().HackingLevelMultiplier);
        persentage = ((ns.getPlayer().exp.hacking - expmin1) / (expplus1 - expmin1));
        ns.print(`${orange}Hacking\t- ${ns.formatNumber(ns.getPlayer().skills.hacking, 0, 100000000)}\t${progressBar(persentage,14)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.strength +1, ns.getPlayer().mults.strength * ns.getBitNodeMultipliers().StrengthLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.strength, ns.getPlayer().mults.strength * ns.getBitNodeMultipliers().StrengthLevelMultiplier);
        persentage = ((ns.getPlayer().exp.strength - expmin1) / (expplus1 - expmin1));
        ns.print(`${yellow}Strength\t- ${ns.formatNumber(ns.getPlayer().skills.strength, 0, 100000000)}\t${progressBar(persentage,14)}`);
        
        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.defense +1, ns.getPlayer().mults.defense * ns.getBitNodeMultipliers().DefenseLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.defense, ns.getPlayer().mults.defense * ns.getBitNodeMultipliers().DefenseLevelMultiplier);
        persentage = ((ns.getPlayer().exp.defense - expmin1) / (expplus1 - expmin1));
        ns.print(`${yellow}Defense\t- ${ns.formatNumber(ns.getPlayer().skills.defense, 0, 100000000)}\t${progressBar(persentage,14)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.dexterity +1, ns.getPlayer().mults.dexterity * ns.getBitNodeMultipliers().DexterityLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.dexterity, ns.getPlayer().mults.dexterity * ns.getBitNodeMultipliers().DexterityLevelMultiplier);
        persentage = ((ns.getPlayer().exp.dexterity - expmin1) / (expplus1 - expmin1));
        ns.print(`${yellow}Dexterity\t- ${ns.formatNumber(ns.getPlayer().skills.dexterity, 0, 100000000)}\t${progressBar(persentage,14)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.agility +1, ns.getPlayer().mults.agility * ns.getBitNodeMultipliers().AgilityLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.agility, ns.getPlayer().mults.agility * ns.getBitNodeMultipliers().AgilityLevelMultiplier);
        persentage = ((ns.getPlayer().exp.agility - expmin1) / (expplus1 - expmin1));
        ns.print(`${yellow}Agility\t- ${ns.formatNumber(ns.getPlayer().skills.agility, 0, 100000000)}\t${progressBar(persentage,14)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.charisma +1, ns.getPlayer().mults.charisma * ns.getBitNodeMultipliers().CharismaLevelMultiplier);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.charisma, ns.getPlayer().mults.charisma * ns.getBitNodeMultipliers().CharismaLevelMultiplier);
        persentage = ((ns.getPlayer().exp.charisma - expmin1) / (expplus1 - expmin1));
        ns.print(`${purple}Charisma\t- ${ns.formatNumber(ns.getPlayer().skills.charisma, 0, 100000000)}\t${progressBar(persentage,14)}`);

        expplus1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.intelligence +1, 1);
        expmin1 = ns.formulas.skills.calculateExp(ns.getPlayer().skills.intelligence, 1);
        persentage = ((ns.getPlayer().exp.intelligence - expmin1) / (expplus1 - expmin1));
        ns.print(`${blue}Intelligence- ${ns.formatNumber(ns.getPlayer().skills.intelligence, 0, 100000000)}\t${progressBar(persentage,14)}`);
        ns.print(`${green}Servers\t- ${AllServers(ns, 'home').slice().length} / ${Math.round(ns.getBitNodeMultipliers().PurchasedServerLimit*25)} \n `)

        if(ns.singularity.isBusy() && !ns.singularity.isFocused()) {
            worktype = ns.singularity.getCurrentWork().type;
            ns.print(`${green}${worktype}`);
            if(worktype == "CRIME") {ns.print(`${green}You are attempting to ${ns.singularity.getCurrentWork().crimeType}`);}
            if(worktype == "FACTION") {
                ns.print(`${green}Working for ${ns.singularity.getCurrentWork().factionName} - ${ns.singularity.getCurrentWork().factionWorkType}`);
                ns.print(`${green}${ns.formatNumber(ns.singularity.getFactionRep(ns.singularity.getCurrentWork().factionName))} rep \n `);
            }
            if(worktype == "CREATE_PROGRAM") {ns.print(`${green}Creating program ${ns.singularity.getCurrentWork().programName} \n `)}
            if(worktype == "COMPANY") {
                ns.print(`${green}Working for ${ns.singularity.getCurrentWork().companyName}`);
                ns.print(`${green}${ns.formatNumber(ns.singularity.getCompanyRep(ns.singularity.getCurrentWork().companyName))} rep \n `);
            }
            if(worktype == "CLASS" && ns.singularity.getCurrentWork().classType !== gymclass) {
                ns.print(`${green}You are taking a ${ns.singularity.getCurrentWork().classType} course at ${ns.singularity.getCurrentWork().location}`);
                ns.print(`${green}${ns.tFormat(((ns.singularity.getCurrentWork().cyclesWorked)/5)*1000)} \n `);
            }
            if(worktype == "CLASS" && ns.singularity.getCurrentWork().classType == gymclass) {
                if(ns.singularity.getCurrentWork().classType == "str") {activegymclass = "strength"}
                if(ns.singularity.getCurrentWork().classType == "dex") {activegymclass = "dexterity"}
                if(ns.singularity.getCurrentWork().classType == "def") {activegymclass = "defense"}
                if(ns.singularity.getCurrentWork().classType == "agi") {activegymclass = "agility"}
                ns.print(`${green}You are training your ${activegymclass} at ${ns.singularity.getCurrentWork().location}`);
                ns.print(`${green}${ns.tFormat(((ns.singularity.getCurrentWork().cyclesWorked)/5)*1000)} \n `);
            }
        }

        if(ns.bladeburner.getCurrentAction().type != 'Idle') {
            ns.print(`${bladeburnerblue}BLADEBURNER`)
            if (ns.bladeburner.getCurrentAction().type == 'General') {
                ns.print(`${green}General work for Bladeburner`);
                ns.print(`${green}You are preforming ${ns.bladeburner.getCurrentAction().name}`);
            }
            else if (ns.bladeburner.getCurrentAction().type == 'Contract') {
                ns.print(`${green}Contracting for Bladeburner`);
                ns.print(`${green}Active contract: ${ns.bladeburner.getCurrentAction().name}`);
            }
            else if (ns.bladeburner.getCurrentAction().type == 'Operation') {
                ns.print(`${green}Operations for Bladeburner`);
                ns.print(`${green}Active operation: ${ns.bladeburner.getCurrentAction().name}`);
            }   
            else if (ns.bladeburner.getCurrentAction().type == 'BlackOp') {
                ns.print(`${green}Blackop for Bladeburner`)
                ns.print(`${green}Active blackop: ${ns.bladeburner.getCurrentAction().name}`);
            }
            ns.print(`${green}${ns.bladeburner.getActionCurrentTime()/1000}s of ${ns.bladeburner.getActionTime(ns.bladeburner.getCurrentAction().type, ns.bladeburner.getCurrentAction().name)/1000}s`);
            ns.print(`${green}${progressBar(ns.bladeburner.getActionCurrentTime() / ns.bladeburner.getActionTime(ns.bladeburner.getCurrentAction().type, ns.bladeburner.getCurrentAction().name), 34)} \n `);
	        
        }

        if(fl1ghtexe == "Done") {ns.print(`${green}Fl1ght.exe   - ${fl1ghtexe}`)} else {ns.print(`${green}Fl1ght.exe   - ${fl1ghtexe} \n `)}
        if(fl1ghtexe == "Done") {ns.print(`${green}w0r1d_d43m0n - ${w0r1dd43m0n} \n `)}

        if(((ns.getHackingLevel() < 2500 || ns.getPlayer().money < 100000000000 || augmentsowned < ns.getBitNodeMultipliers().DaedalusAugsRequirement || t1 <= 60) && !TRP) && !ns.getPlayer().factions.includes("Daedalus")) {
            ns.print(`${green}~~Fl1ght.exe Progress~~`);

            let hacklevlpresent = (ns.getHackingLevel()/2500);
            let moneypresent = (ns.getPlayer().money/100000000000);
            let augmentpresent = (augmentsowned/ns.getBitNodeMultipliers().DaedalusAugsRequirement);
            let mc = 0; let hc =0; let ac = 0; let done = 0;
            if(ns.getHackingLevel() > 2500) {hacklevlpresent = 1}
            if(ns.getPlayer().money > 100000000000) {moneypresent = 1}
            if(augmentsowned > 30) {augmentpresent = 1}
            const fl1ghtpresent = ((hacklevlpresent+moneypresent+augmentpresent)/3);

            ns.print(`${green}${progressBar(fl1ghtpresent,34)} ${ns.formatNumber(fl1ghtpresent*100,0)}%`);
            ns.print(` `);

            if(ns.getHackingLevel() < 2500) {
                ns.print(`${green}Hacking Level\t    ${progressBar((hacklevlpresent),10)} ${ns.formatNumber(hacklevlpresent*100, 0)}%`);
                hc = 0;
            }
            else {hc = 1}

            if(ns.getPlayer().money < 100000000000) {
                ns.print(`${green}Money\t\t    ${progressBar((moneypresent),10)} ${ns.formatNumber(moneypresent*100, 0)}%`);
                mc = 0;
            }
            else {mc = 1}

            if(augmentsowned < ns.getBitNodeMultipliers().DaedalusAugsRequirement) {
                ns.print(`${green}Installed augmentations ${progressBar((augmentpresent),10)} ${ns.formatNumber(augmentpresent*100, 0)}%`)
                ac = 0;
            }
            else {ac = 1}

            if((ac+mc+hc) == 3) {done = 1}

            if(((ns.getHackingLevel() > 2500) && (ns.getPlayer().money > 100000000000) && (augmentsowned > ns.getBitNodeMultipliers().DaedalusAugsRequirement) && (t1 <= 60)) || done == 1) {
                ns.print('Fl1ght.exe Compleated')
                t1 = t1+1;
            }
        }
        else {t1 = 61}
  
        if(t1>= 60 && done == 1) {ns.print(`${green}Fl1ght.exe Done`)}

        if(((ns.getHackingLevel() > 2500 && ns.getPlayer().money > 100000000000 && augmentsowned > ns.getBitNodeMultipliers().DaedalusAugsRequirement && TRP) && ((ns.getHackingLevel() < worlddemonhlv)) || ((portinfo(ns, 'number')) < worlddemonpnum)) || TRP) {
            if (wdt1 <= 60) {
                if(ownedaugmentations.includes("The Red Pill")) {
                    ns.print(`${green}~~w0r1d_d43m0n Progress~~`);

                    let wdhacklevlpresent = (ns.getHackingLevel()/ worlddemonhlv);
                    let wdportpersent = ((portinfo(ns, 'number')) / worlddemonpnum);
                    let wdhlc = 0; let wdpnc =0; let wddone = 0;
                    if(ns.getHackingLevel() > worlddemonhlv) {wdhacklevlpresent = 1}
                    if((portinfo(ns, 'number')) > worlddemonpnum) {wdportpersent = 1}
                    const worlddemonpresent = ((wdhacklevlpresent+wdportpersent)/2);
                    
                    ns.print(`${green}${progressBar(worlddemonpresent, 34)} ${ns.formatNumber(worlddemonpresent*100,0)}%`);
                    ns.print(` `);

                    if((ns.getHackingLevel() < worlddemonhlv)) {
                        ns.print(`${green}Hacking Level           ${progressBar((wdhacklevlpresent),10)} ${ns.formatNumber(wdhacklevlpresent*100, 0)}%`);
                        wdhlc = 0;
                    }
                    else {wdhlc = 1}

                    if(((portinfo(ns, 'number')) < worlddemonpnum)) {
                        ns.print(`${green}Ports                   ${progressBar((wdportpersent),10)} ${ns.formatNumber(wdportpersent*100, 0)}%`);
                        wdpnc = 0;
                    }
                    else {wdpnc = 1}

                    if((wdhlc+wdpnc) == 3) {wddone = 1}

                    if(worlddemonpresent == 1) {
                        ns.print('Can hack w0r1d_d43m0n - Can leave this bitnode');
                        wdt1 = wdt1+1;
                    }
                }
            }
        }
        else {wdt1 = 61}

        await ns.sleep(100);
    }
}