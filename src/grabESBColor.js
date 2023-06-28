const cheerio = require('cheerio');

/**
 * Grabs the color of the Empire State Building
 * @returns {string} The color of the Empire State Building
 */
async function grabESBColor() {
    let ESBResponse = await fetch('https://www.esbnyc.com');
    let ESBResponseText = await ESBResponse.text();
    const $ = cheerio.load(ESBResponseText);
    // Fetch the element by class name
    const colorDescription = $('.light-type').text();
    return colorDescription.toLowerCase();
}

module.exports = grabESBColor;