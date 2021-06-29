// just pass through Franz - Superhuman tab appears, says needs Chrome
// module.exports = Franz => Franz;

// tried the whole string from the issue example - Superhuman tab appears, says needs Chrome
// module.exports = Franz => class useragent extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"; } };

// updated class name to superhuman - Superhuman tab appears, says needs Chrome
module.exports = Franz => class superhuman extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"; } };

// Tried shortening to just Chrome lol - Superhuman tab appears, says needs Chrome
// module.exports = Franz => class superhuman extends Franz { overrideUserAgent() {return "Chrome"; } };
