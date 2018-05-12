const baseScrapper = require('./scraper');

const regex = /class="entry-title">[.\s]*<a href="([^"]*)".*>([^<]*)<\/a>/ig

class regexScraper extends baseScrapper {}

regexScraper.prototype._scrap = function (content) {
    console.log("regex");
    var entries = [];

    var m;

    do {
        m = regex.exec(content);
        if (m) {
            entries.push({
                url: m[1],
                title: m[2]
            })
        }
    } while (m);
    return entries;
}

module.exports = regexScraper;