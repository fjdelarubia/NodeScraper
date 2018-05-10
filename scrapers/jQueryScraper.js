const jQueryScraper = require('./scraper');

const cheerio = require('cheerio');

jQueryScraper.prototype._scrap = function (content) {
    console.log("jquery");
    const $ = cheerio.load(content);

    return $("h2").map(function(i, el) {
        var $a = $(this).find('a');
        return {
            url: $a.attr('href'),
            title: $a.html()
        }
    }).get()

}

module.exports = jQueryScraper;