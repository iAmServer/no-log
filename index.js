/**
 *  Disable the default window console functions if state is true or production
 * @param {boolean | string} status
 */

const noLog = (state = false) => {
  if (state || state === 'production') {
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
    window.console.dirxml = () => {};
    window.console.exception = () => {};
    window.console.group = () => {};
    window.console.groupCollapsed = () => {};
    window.console.groupEnd = () => {};
    window.console.markTimeline = () => {};
    window.console.profile = () => {};
    window.console.profileEnd = () => {};
    window.console.table = () => {};
  }
};

module.exports = noLog;
