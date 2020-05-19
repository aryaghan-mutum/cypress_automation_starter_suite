#### Cypress Automation Starter Suite

##### Download `node.js` and `npm`
- Download the `node.js` `.pkg` installer from: `https://nodejs.org/en/download/`
- Verify version: `node --version`
- Run `node.js` installer
- Verify version: `node -v` or `node --version`
- Update npm version: `sudo npm install npm --global`

##### Generate package.json
- `npm init` to customize the package.json
- `npm init -y` creates the package.json automatically

```json
{
  "name": "cypress-automation",
  "version": "1.0.0",
  "description": "an automation framework to validate ui and api functionalities",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "some author",
  "license": "ISC"
}
```

##### Install Cypress 
- `npm install cypress` or `npm install cypress --save-dev`

##### Launch Test Runner from Cypress 
- `./node_modules/.bin/cypress open` or `npx cypress open` for mac 
- `node_modules\bin\cypress open` for windows

##### Run Tests 
Run using Tags:
- `npx cypress-tags run -e TAGS='@smoke'`

Run all tests:
- `./node_modules/.bin/cypress run`
- `./node_modules/.bin/cypress run --headed`

Run all spec files in the project
- `npx cypress run`

Run specific tests: 
- `./node_modules/.bin/cypress run -spec cypress/integration/examples/regression/sample_test.spec.js`

Run tests on a specific browser:
- `./node_modules/.bin/cypress run --browser chrome`

##### Cypress Project Structure
- `features` - Used to hold external pieces of static data that is used in tests
- `integration` - Location of all test files with `.js` or `.ts` extensions
- `plugins` - Contains `index.js` file used to load plugins
- `support` - Contains `command.js` & `index.js` files. 
	- `commands.js` - Used to write custom commands and overrides exisiting commands. 
	- `index.js` - Used to store global configurations and behaviours that modify cypress. This file automatically loads before the test files
- `cypress.json` - Located under the root directory. Used to store project configurations such as `baseUrl`, `port`, `env` etc.
