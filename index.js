const grabESBColor = require('./src/grabESBColor.js');
const getHexCode = require('./src/getHexCode.js');

// Main
main();

// Methods
async function main() {
    // Retrieve the color description from esbnyc.com DOM
    const colorDescription = await grabESBColor();

    // Extract a hex code color scheme from the color description.
    // If the color description exists in the colorMap.json file, we 
    // will return the hex code from the colorMap.json file. Otherwise,
    // we will send a message to the OpenAI API to derive a hex code color scheme
    // and then save the new color scheme result to the color map to save tokens.
    const hexCodeArray = await getHexCode(colorDescription);

    console.log(hexCodeArray);

    // Your code here
    
}