const Enmap = require("enmap");
module.exports.encryptionHashes = new Enmap({name: "encryptionHashes"});
module.exports.deletionHashes = new Enmap({name: "deletionKeys"});
module.exports.refreshTokens = new Enmap({name: "refreshTokens"});
module.exports.shortUrls = new Enmap({name: "shortUrls"});
module.exports.shortDeletionHashes = new Enmap({name: "shortDeletionHashes"});
module.exports.embedData = new Enmap({name: "embedData"});
module.exports.expiryData = new Enmap({name: "expiryData"});
module.exports.domainAnalytics = new Enmap({name: "domainAnalytics"});