var regexScraper = require('./scrapers/regexScraper');
var jQueryScraper = require('./scrapers/jQueryScraper');

var rg = new regexScraper({
    headers: {
        'User-Agent': 'ScraperBot/0.1'
    }
});

var jq = new jQueryScraper({
    headers: {
        'User-Agent': 'ScraperBot/0.1'
    }
});

rg.scrap("https://jrubia.com").then((data) => {
    console.log("Data from regex: ", JSON.stringify(data));
}).catch((err) => {
    console.log(err);
})

jq.scrap("https://jrubia.com").then((data) => {
    console.log("Data from jquery: ", JSON.stringify(data));
}).catch((err) => {
    console.log(err);
})