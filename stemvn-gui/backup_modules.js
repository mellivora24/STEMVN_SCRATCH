const fs = require('fs');
const path = require('path');

const filesToBackup = [
    "node_modules/openblock-blocks/generators/arduino/arduino.js",
    "node_modules/openblock-l10n/locales/editor-msgs.js",
    "node_modules/openblock-l10n/locales/extensions-msgs.js",
    "node_modules/openblock-blocks/arduino_compressed.js",
    "node_modules/openblock-l10n/locales/editor-msgs.js",
    "node_modules/openblock-l10n/locales/extensions-msgs.js",
    "node_modules/openblock-vm/src/devices/STEMVN_BOT/stemvn_bot.js",
    "node_modules/openblock-vm/src/extension-support/extension-manager.js"
];

filesToBackup.forEach(file => {
  const backupPath = `${file}.bak`;
  fs.copyFileSync(file, backupPath);
  console.log(`Backed up ${file} to ${backupPath}`);
});
