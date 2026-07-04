const chromium = require('@sparticuz/chromium');

module.exports = async function getChromiumPath() {
  const executablePath = await chromium.executablePath();
  return executablePath;
};
