// Imports
import { stockBnS } from "/Function-Library/Functions.js"

/** @param {NS} ns */
export async function main(ns) {
    const green = "\u001b[38;5;046m";
    const orange = "\u001b[38;5;208m";
    const yellow = "\u001b[38;5;226m";
    const purple = "\u001b[38;5;057m";
    const blue = "\u001b[38;5;012m";
    const red = "\u001b[38;5;160m";

    ns.disableLog("ALL");
    ns.tail();
    const targetstock = ns.args[0];
    let yorn = false;
    if(!ns.stock.getSymbols().includes(targetstock)) {
        ns.print(`${green}Not valid stock ticker`);
        ns.print(`${green}Valid tickers are: ${ns.stock.getSymbols()}`);
        ns.exit()
    }
    ns.setTitle(`Stock Manager for ${targetstock}`);
    if(!ns.stock.hasWSEAccount() || !ns.stock.hasTIXAPIAccess()) {
        if(!ns.stock.hasWSEAccount()) {
            yorn = await ns.prompt('Do you want to buy a WSE account?');
            if(yorn === true) {ns.stock.purchaseWseAccount()}
            else {
                ns.print(`${green}This scirpt requires a WSE account`);
                ns.exit()
            }
        }
        if(!ns.stock.hasTIXAPIAccess()) {
            yorn = await ns.prompt('Do you want to buy TIX API access?')
            if(yorn === true) {ns.stock.purchaseTixApi()}
            else {
                ns.print(`${green}This scirpt requires TIX API access`);
                ns.exit()
            }
        }
    }

    const shares = ns.args[1];
    const startingmoney = ns.args[2];
    const goalmoney = ns.args[3];
    const position = ns.args[4];

    if(shares > ns.stock.getMaxShares(targetstock)) {return(ns.print('You ordered to many shares \n Company only has ' + ns.formatNumber(ns.stock.getMaxShares(targetstock))))}
    if(ns.stock.getPurchaseCost(targetstock, shares, position) + '100000' > startingmoney) {return(ns.print('Not enough starting money to start script \n You gave $' + ns.formatNumber(startingmoney) + ' for ' + ns.formatNumber(shares) + ' shares. \n But to buy that many shares you need $' + ns.formatNumber(ns.stock.getPurchaseCost(targetstock, shares, position))))}

    let money = startingmoney;
    let profit = '0';
    let sharevalue = ns.stock.getPrice(targetstock);
    let lastsharevalue = ns.stock.getPrice(targetstock);
    let profitcolour = red;
    let moneycolour = green;
    let buysharevalue = '0';
    let longshares = '0';
    let shortshares = '0';

    stockBnS(ns, targetstock, shares, position, "buy");
    buysharevalue = ns.stock.getPrice(targetstock)
    profit = profit - ns.stock.getPurchaseCost(targetstock, shares, position);
    money = money + profit;

    while(money < goalmoney) {
        ns.clearLog();
        if(profit <= '0') {profitcolour = red} else {profitcolour = green}
        if(money <= '0') {moneycolour = red} else {moneycolour = green}
        ns.print(`${profitcolour}Profit is ${ns.formatNumber(profit)}`);
        ns.print(`${moneycolour}Money is ${ns.formatNumber(money)}`);
        ns.print(`${green}Goal $${ns.formatNumber(goalmoney)}`);
        ns.print(`${red}Bought ${shares} shares at $${ns.formatNumber(buysharevalue)}. Current Share value is $${ns.formatNumber(ns.stock.getPrice(targetstock))} (Profit - ${ns.formatNumber(((ns.stock.getPrice(targetstock)/buysharevalue)*100)-100)}% or $${ns.formatNumber((ns.stock.getPrice(targetstock)*shares)-(buysharevalue*shares))})`)
        if(money <= '0') {
            yorn = await ns.prompt('Stock Manager for ' + targetstock + '\n This script is out of money \n Would you like to keep the script running?');
            if(yorn === false) {ns.exit()}
        }
        if(ns.stock.getPrice(targetstock) != sharevalue) {
            lastsharevalue = sharevalue;
            sharevalue = ns.stock.getPrice(targetstock);
            if(((sharevalue - lastsharevalue)*shares) > '100000') {
                if(ns.stock.getSaleGain(targetstock, shares, position) > (money*0.1)) {
                    ns.tprint(`${green}Stock mannager for ${targetstock}\n Sold ${shares} shares at ${sharevalue} for a profit of ${ns.stock.getSaleGain(targetstock, shares, position)}`);
                    stockBnS(ns, targetstock, shares, position, "sell")
                }
            }
        }

        shortshares = ns.stock.getPosition(targetstock).slice('2', '-1');
		longshares = ns.stock.getPosition(targetstock).slice('0', '-3');

        if(shortshares === 0 && longshares === 0) {
            
        }
        await ns.sleep('50')
    }
    return(ns.print('Script done, made it to money goal'))
}

/**
 * ns.stock.buyShort(sym, shares)
 * ns.stock.buyStock(sym, shares)
 * ns.stock.cancelOrder(sym, shares, price, type, pos)
 * ns.stock.getAskPrice(sym)
 * ns.stock.getBidPrice(sym)
 * ns.stock.getMaxShares(sym)
 * ns.stock.getOrders()
 * ns.stock.getOrganization(sym)
 * ns.stock.getPosition(sym)
 * ns.stock.getPrice(sym)
 * ns.stock.getPurchaseCost(sym, shares, posType)
 * ns.stock.getSaleGain(sym, shares, posType)
 * ns.stock.getSymbols()
 * ns.stock.has4SData()
 * ns.stock.has4SDataTIXAPI()
 * ns.stock.hasTIXAPIAccess()
 * ns.stock.hasWSEAccount()
 * ns.stock.placeOrder(sym, shares, price, type, pos)
 * ns.stock.purchase4SMarketData()
 * ns.stock.purchase4SMarketDataTixApi()
 * ns.stock.purchaseTixApi()
 * ns.stock.purchaseWseAccount()
 * ns.stock.sellShort(sym, shares)
 * ns.stock.sellStock(sym, shares)
 * 
 * ns.stock.getForecast(sym)
 * ns.stock.getVolatility(sym)
 * 
*/