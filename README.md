# empirestatebuildingcolors
Fetches the current color scheme for the lights on the [Empire State Building](https://www.esbnyc.com). From the color scheme description, we use OpenAI's API to extract some list of hex codes that best match the description. This is necessary because the color description will often be very verbose.

**Example description:**

"SPLIT LIGHTS: BLUE & ORANGE FOR NEW YORK METS AND PINSTRIPES FOR NEW YORK YANKEES"

**Hex code output:**

[ '#002D72', '#FF5910', '#FFFFFF' ]

## How to Use (Important!)
1. Make sure [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is installed on your machine.

2. Navigate to the project directory and run `npm install` to install all dependecies.

3. You will need to retrieve your own [OpenAI API key](https://openai.com/blog/openai-api).

4. Paste your API key into the empty string found in `config.json` in the root directory of the project.

5. Run `node index.js` to execute.


## OpenAI API Caveats
The OpenAI API is not free, however it is not necessarily expensive either. Pricing varies based on the model that you choose to run, however it is recommended to not change the current model used (gpt-3.5-turbo), as it on the cheaper end with high accuracy. Generally speaking, it should not cost more than a few cents per year.
