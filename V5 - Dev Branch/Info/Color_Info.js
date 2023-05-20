/** @param {NS} ns */
export async function main(ns) {
	ns.tprint(((b = "Extra text\n") => { // 256 colors foreground
		for (let i = 0; i < 256; i++) {
			b += "\x1b[38;5;" + i + "m" + ns.formatNumber(i, "000");
			(i + 1) % 16 == 0 ? b += "\n" : null;
		}
		return b;
	})());
}