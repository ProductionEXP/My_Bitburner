/** @param {NS} ns */
export async function main(ns) {
    const orig = React.createElement;
    const origState = React.useState;
    let stateCalls = 0;
    let resolve;
    const wrapState = function (...args) {
        stateCalls++;
        const state = origState.call(this, ...args);
        // The 2nd useState returns the page
        if (stateCalls === 2) {
            resolve(state);
            React.useState = origState;
        }
        return state;
    }
    React.createElement = function (...args) {
        const fn = args[0];
        if (typeof fn === "function" &&
            String(fn).includes("Trying to go to a page without the proper setup")) {
            React.createElement = orig;
            // Perform next-level hooking
            const wrapped = function (...args_) {
                React.useState = wrapState;
                return fn.call(this, ...args_);
            }
            return orig.call(this, wrapped, ...args.slice(1));
        }
        return orig.call(this, ...args);
    }
    const resultP = Promise.race([
        new Promise((res) => resolve = res),
        ns.asleep(5000)])
        .finally(() => {
            React.createElement = orig;
            React.useState = origState;
        });
    // Force a rerender
    ns.ui.setTheme(ns.ui.getTheme());
    const [state, setState] = await resultP;
    setState(typeof state === "string" ? "Dev" : 8);
}