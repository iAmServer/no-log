const cmdList = [
  "log",
  "error",
  "warn",
  "info",
  "debug",
  "trace",
  "clear",
  "time",
  "timeEnd",
  "timeStamp",
  "group",
  "groupCollapsed",
  "groupEnd",
  "assert",
  "dir",
  "dirxml",
  "exception",
  "group",
  "groupCollapsed",
  "groupEnd",
  "markTimeline",
  "profile",
  "profileEnd",
  "table"
];

/**
 *  Disable the defalt windows console functions if state is true
 * @param {boolean | string} state  - true if the user is logged in
 */

const noLog = (state = false) => {
  if (state || state === "production") {
    const { console } = window;

    for (let i = 0; i < cmdList.length; i++) {
      console[`${cmdList[i]}`] = () => {}
    }
  }
};

module.exports = noLog;
