const baseScraper = require('./scraper');

const cheerio = require('cheerio');

class jQueryScraper extends baseScraper {};

jQueryScraper.prototype._scrap = function (content) {
    console.log("jquery");
    const $ = cheerio.load(content);

    return $(".entry-title a").map(function(i, el) {
        var $a = $(this);
        return {
            url: $a.attr('href'),
            title: $a.html()
        }
    }).get()

}

module.exports = jQueryScraper;