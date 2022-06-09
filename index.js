/**
 *  Disable the defalt windows console functions if state is true
 * @param {boolean} state  - true if the user is logged in
 */
const noLog = (state = false) => {
  if (state) {
    let oldConsoleLog = window.console.log;
    window.console.log = () => {};

    window.console.error = () => {};
    window.console.warn = () => {};
    window.console.info = () => {};
    window.console.debug = () => {};
    window.console.trace = () => {};
    window.console.clear = () => {};
    window.console.time = () => {};
    window.console.timeEnd = () => {};
    window.console.timeStamp = () => {};
    window.console.group = () => {};
    window.console.groupCollapsed = () => {};
    window.console.groupEnd = () => {};
    window.console.assert = () => {};
    window.console.dir = () => {};
  }
};

module.exports = noLog;
