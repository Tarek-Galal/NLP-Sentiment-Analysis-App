## Installation

### Installing project dependencies

After cloning, open your terminal and run:

```bash
npm install
```

## API setup

In order to run the app locally you need to signup for the meaningCloud API [here](https://www.meaningcloud.com/developer/sentiment-analysis).

In the root directory, create a .env file to safely store your API key.

```
API_KEY = "**************************"
```

### Run in development

Start the webpack dev-server

```bash
npm build-dev
```

Start the server

```bash
npm start
```

### Run in production

Generate the dist folder

```bash
npm build-prod
```

start the server

```bash
npm start
```

Navigate to `http://localhost:8080`

### Run tests

To run the tests, run

```bash
npm test
```
