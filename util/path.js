const path = require('path');

// Use __dirname instead of deprecated process.mainModule.filename
module.exports = path.dirname(require.main.filename || process.mainModule.filename);