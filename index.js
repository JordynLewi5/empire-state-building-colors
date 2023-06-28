const cheerio = require('cheerio');
const { Configuration, OpenAIApi } = require('openai');
const config = require('./config.json');
const configuration = new Configuration({
    apiKey: config.apiKey,
});
const openai = new OpenAIApi(configuration);

main();

// Methods ////////////////////////////////////////////

async function main() {
    const colorDescription = await grabESBColor();
    const hexCodeMessage = await getHexCode(colorDescription);
    const hexCodeArray = parseHexCodes(hexCodeMessage);
    console.log(hexCodeArray);

    // Your code here

}

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
    return colorDescription;
}

/**
 * Send message to OpenAI API asking for a hex code for the color described
 * and return the hex code.
 * @param {string} colorDescription The color description of the Empire State Building
 * @returns {string} The hex code for the color described
 */
async function getHexCode(colorDescription) {
    const promptMsg = `Provide simple hex code(s) for the color scheme: \"${colorDescription}\".`;
    console.log(promptMsg);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": promptMsg}],
        max_tokens: 64,
        temperature: 0,
    });
    return response.data.choices[0].message.content;
}

/**
 * Sometimes, the model likes to add some additional text to its response. 
 * Parse the hex codes from the message returned from the OpenAI API,
 * and add each hexcode string to an array. Return the array.
 * @param {string} hexCodeMessage The message returned from the OpenAI API
 * @returns {string[]} An array of hex codes
 */
function parseHexCodes(hexCodeMessage) {
    let hexArray = [];
    for (let i = 0; i < hexCodeMessage.length; i++) {
        if (hexCodeMessage[i] == "#") {
            let hexCode = hexCodeMessage.slice(i, i + 7);
            i += 7;
            hexArray.push(hexCode);
        }
    }
    return hexArray;
}

// how do I git remote add origin
// how do I git push -u origin main
