const cmdList = [
  'log',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'clear',
  'time',
  'timeEnd',
  'timeStamp',
  'group',
  'groupCollapsed',
  'groupEnd',
  'assert',
  'dir',
  'dirxml',
  'exception',
  'group',
  'groupCollapsed',
  'groupEnd',
  'markTimeline',
  'profile',
  'profileEnd',
  'table'
];

/**
 *  Disable the default window console functions if state is true or production
 * @param {boolean | string} status
 */

const noLog = (state = false) => {
  if (state || state === 'production') {
    const { console } = window;

    for (let i = 0; i < cmdList.length; i++) {
      console[`${cmdList[i]}`] = () => {};
    }
  }
};

module.exports = noLog;
