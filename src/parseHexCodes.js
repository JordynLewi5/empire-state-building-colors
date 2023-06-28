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

module.exports = parseHexCodes;