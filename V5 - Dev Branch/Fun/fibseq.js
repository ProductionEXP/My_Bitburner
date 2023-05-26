/** @param {NS} ns */
export async function main(ns) {
	const requestedcycles = ns.args[0];
	let active = 0;
	let prev1 = 1;
	let prev2 = 0;
	let cycle = 0;
	ns.disableLog("ALL");
	while (cycle < requestedcycles) {
		ns.print("Cycle " + cycle + ". Fib. number is " + active);
		prev2 = prev1;
		prev1 = active;
		active = prev1 + prev2;
		cycle = cycle+1;
	}
	ns.tprint(active);
}