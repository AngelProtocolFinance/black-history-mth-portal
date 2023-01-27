# causes-donation-portal

Angel Protocol Causes donation portal app

## Instructions to deploy a new portal to production

1. Make a new repo from this template repo
2. Setup a new Web App AWS Amplify app and connect it to the new repo
3. Setup the build.yml file as follows:

```
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - REACT_APP_INFURA_ID=${REACT_APP_INFURA_ID}
        - REACT_APP_NETWORK=${REACT_APP_NETWORK}
        - REACT_APP_APES_AUTH_SECRET_KEY=${REACT_APP_APES_AUTH_SECRET_KEY}
        - REACT_APP_KADO_API_KEY=${REACT_APP_KADO_API_KEY}
        - yarn build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
```

4. Configure the following environment variables with these varialbe and their values (ask a team member!):

```
REACT_APP_INFURA_ID=??
REACT_APP_APES_AUTH_SECRET_KEY=??
REACT_APP_NETWORK=TESTNET or MAINNET
REACT_APP_KADO_API_KEY=??

```

## DEVELOPMENT NOTES

- [x] Create a _.env_ file with the above env vars
- [x] update page content `src/App`
- [x] update index.html metatags
- [x] update app config `src/constants/config`
