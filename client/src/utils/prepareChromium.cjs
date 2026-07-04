const chromium = require('@sparticuz/chromium');
const fs = require('fs');
const path = require('path');

(async () => {
  const executablePath = await chromium.default.executablePath();
  const pkgPath = path.join(__dirname, '..', '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  if (!pkg.reactSnap) {
    throw new Error('reactSnap config block not found in package.json');
  }

  pkg.reactSnap.puppeteerExecutablePath = executablePath;
  pkg.reactSnap.puppeteerArgs = chromium.default.args;

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log('Chromium executable path written to package.json:', executablePath);
})();
