#!/home/steveoliver/.nvm/v0.10.20/bin/node --harmony
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
