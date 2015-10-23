var profile = require("./profile");

process.argv.slice(2).forEach(profile.get);
