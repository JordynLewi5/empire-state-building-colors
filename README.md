# Check out our [Empire State Building API](https://esblights.kinetic.com/)!

# empire-state-building-colors
Fetches the current color scheme for the lights on the [Empire State Building](https://www.esbnyc.com). From the color scheme description, we use OpenAI's API to extract some list of hex codes that best match the description. This is necessary because the color description will often be very verbose and may contain unique color schemes. 

The color description and corresponding hex codes are saved to a map in `src/colorMap.json` to save tokens. If a color description that exists in the color map is encountered, then we just use the hex codes previously generated.

## How to Use
1. Download the project and navigate to its root directory.

2. Make sure [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is installed on your machine.

3. Navigate to the project directory and run `npm install` to install all dependecies.

4. You will need to retrieve your own [OpenAI API key](https://openai.com/blog/openai-api).

5. Paste your API key into the string "YOUR_API_KEY" found in `config.json` in the root directory of the project.

6. Run `node index.js` to execute.

## OpenAI API Caveats
The OpenAI API is not free, however it is not necessarily expensive either. Pricing varies based on the model that you choose to run, however it is recommended to not change the current model used (gpt-3.5-turbo), as it on the cheaper end with high accuracy. Fortunately, we can mitigate the expenses by saving and using hex codes from previous color descriptions.
