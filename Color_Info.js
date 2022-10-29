/** @param {NS} ns */
export async function main(ns) {

	const sora = ns.args[0];

	//Colors
	const white = "\u001b[38;5;250m";
	const blue = "\u001b[38;5;116m";
	const green = "\u001b[38;5;78m";
	const yellow = "\u001b[38;5;185m";
	const red = "\u001b[38;5;203m";
	const reset = "\u001b[0m";
	const orange = "\u001b[38;5;215m";
	const indigo = "\u001b[38;5;33m";
	const violet = "\u001b[38;5;141m";

	if (sora == "Par") {

		//Tprint "Color"

		ns.tprint(`${reset + "Reset	ID: u001b[0m"}`);
		ns.tprint(`${red + "Red		ID: u001b[38;5;203m"}`);
		ns.tprint(`${orange + "Orange	ID: u001b[38;5;215m"}`);
		ns.tprint(`${yellow + "Yellow	ID: u001b[38;5;185m"}`);
		ns.tprint(`${green + "Green	ID: u001b[38;5;78m"}`);
		ns.tprint(`${blue + "Blue		ID: u001b[38;5;116m"}`);
		ns.tprint(`${indigo + "Indigo	ID: u001b[38;5;33m"}`);
		ns.tprint(`${violet + "Violet	ID: u001b[38;5;141m"}`);
		ns.tprint(`${white + "White	ID: u001b[38;5;250m"}`);
	}

	if (sora == "Full") {

		ns.tprint(((b = "Extra text\n") => { //256 colors foreground
			for (let i = 0; i < 256; i++) {
				b += "\x1b[38;5;" + i + "m" + ns.nFormat(i, "000");
				(i + 1) % 16 == 0 ? b += "\n" : null;
			}
			return b;
		})());
		ns.tprint(((b = "Extra text\n New Line:") => {//256 colors background
			for (let i = 0; i < 256; i++) {
				b += "\x1b[48;5;" + i + "m" + ns.nFormat(i, "000");
				(i + 1) % 16 == 0 ? b += "\n New Line:" : null;
			}
			return b;
		})());
	}
}