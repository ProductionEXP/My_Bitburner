
/**
 * 
 *
 * @param str We want to add colour to this string.
 * @param colour Colourize the given string with this colour.  The colour string
 *     should be given as a Unicode escape sequence.  Refer to this page for
 *     more details:
 *     https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html
 * @return The given line coloured using the given colour.
 */
 function decorate(str, colour) {
    const reset = "\u001b[0m";
    return `${colour}${str}${reset}`;
}

/**
 * Add custom fields to the HUD.
 *
 * Usage: run hud.js
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    // eslint-disable-next-line no-eval
    const doc = eval("document");
    const hook0 = doc.getElementById("overview-extra-hook-0");
    const hook1 = doc.getElementById("overview-extra-hook-1");
    // Custom colouring for the new fields.
    const fav_colour = "#FFA500"; // orange
    hook0.style.color = fav_colour;
    hook1.style.color = fav_colour;
    // Update the HUD every 1 second.
    const time = 1000;
    for (;;) {
        try {
            // Custom numbers we want to display.  To add another custom field,
            // follow this format:
            //
            // header.push(headerName);
            // value.push(formattedValue);
            //
            // Here, "headerName" is a label that appears on the left.  The
            // label should be a word that tells us the meaning of the number on
            // the right.  Furthermore, "formattedValue" is a number formatted
            // in some way by using the function ns.nFormat(), which is a
            // wrapper of numeral.js.
            const header = [];
            const value = [];
            // The Hack XP of all scripts per second.
            header.push("Hack XP");
            value.push(ns.nFormat(ns.getTotalScriptExpGain(), "0,0.00"));
            // The income of all scripts per second.
            header.push("Income");
            value.push(ns.nFormat(ns.getTotalScriptIncome()[0], "$0,0.00"));
            // Apply line breaks (newline characters) to separate each custom
            // field.
            hook0.innerText = header.join("\n");
            hook1.innerText = value.join("\n");
        } catch (e) {
            // Use Unicode escape code to add colour.
            const red = "\u001b[31m";
            ns.print(decorate(`No update: ${String(e)}`, red));
        }
        await ns.sleep(time);
        // Make sure to clean up after ourselves.
        ns.atExit(() => {
            hook0.innerHTML = "";
            hook1.innerHTML = "";
        });
    }
}