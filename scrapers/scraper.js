const request = require('request');

var Scraper = function (options) {
    this.options = options;
}

Scraper.prototype.scrap = function (url, callback) {
    if (!callback)
        return new Promise((resolve, reject) => {
            this._get(url, (err, resp, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this._scrap(body));
                }
            })
        })
    else {
        this._get(url, (err, resp, body) => {
            callback(err, this._scrap(body));
        })
    }
}

Scraper.prototype._get = function (url, callback) {
    request.get(url, this.options, callback);
}

Scraper.prototype._scrap = function (content) {
   return content;
}

module.exports = Scraper;