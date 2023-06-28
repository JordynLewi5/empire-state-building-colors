const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');
const config = require('../config.json');
const colorMap = require('./colorMap.json');
const parseHexCodes = require('./parseHexCodes.js');

const configuration = new Configuration({ apiKey: config.apiKey });
const openai = new OpenAIApi(configuration);

/**
 * Send message to OpenAI API asking for a hex code for the color described
 * and return the hex code.
 * @param {string} colorDescription The color description
 * @returns {string} The hex code for the color described
 */
async function getHexCode(colorDescription) {
  if (colorMap.hasOwnProperty(colorDescription)) {
    return colorMap[colorDescription];
  } else {
    const promptMsg = `Provide simple hex code(s) for the color scheme: "${colorDescription}".`;
    
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": promptMsg
        }
      ],
      max_tokens: 64,
      temperature: 1,
    });
    
    let hexCodesArray = parseHexCodes(response.data.choices[0].message.content);
    
    // Write into colorMap.json and add a new property named as the colorDescription and the value as the hex code derived from the OpenAI API
    colorMap[colorDescription] = hexCodesArray;
    fs.writeFileSync('./src/colorMap.json', JSON.stringify(colorMap, null, 2));
    
    return hexCodesArray;
  }
}

module.exports = getHexCode;
