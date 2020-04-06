# Cypress 
---

E2E testing project using Cypress and Cucumber (BDD)


### Install Cypress

```
npm install cypress --save-dev
```


### Install Cucumber

```
npm i cypress-cucumber-preprocessor
```


### Install all dependencies

```
npm install
```


### Running the tests

- Open cypress dashboard:
```
npm run cy:open
```

- Chrome browser:
```
npm run cy:run:chrome
```

- Firefox browser:
```
npm run cy:run:firefox
```


### Run all tests in Docker

Note: In Dockerfile is used cypress/base:12.1.0

```
docker build -t cypress .
```