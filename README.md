# Candy-Machine-Mint

The Candy-Machine-Mint project is designed to let users fork, customize, and deploy their own candy machine mint app to a custom domain, ultra fast.

A candy machine is an on-chain Solana program (or smart contract) for managing fair mint. Fair mints:
* Start and finish at the same time for everyone.
* Won't accept your funds if they're out of NFTs to sell.

The Candy-Machine-Mint project is meant to be as simple and usable as possible, accessible to everyone from long-time crypto devs to junior React devs with a vague interest in NFTs. Our goal is to empower users to create their own front ends to display, sell, and manage their NFTs as simply as possible by just updating a few styled components and following a well-documented process for setup and shipping.

## Getting Set Up

### Prerequisites

* Ensure you have recent versions of both `node` and `yarn` installed.

* Follow the instructions [here](https://docs.solana.com/cli/install-solana-cli-tools) to install the Solana Command Line Toolkit.

* Follow the instructions [here](https://hackmd.io/@levicook/HJcDneEWF) to install the Metaplex Command Line Utility.
  * Installing the Command Line Package is currently an advanced task that will be simplified eventually.

### Installation

1. Fork the project, then clone down. Example:
```
git clone git@github.com:exiled-apes/candy-machine-mint.git
```

2. Build the project. Example:
```
cd candy-machine-mint
yarn install
yarn build
```

3. Define your environment variables using the instructions below, and start up the server with `npm start`.

#### Environment Variables

To run the project, first rename the `.env.example` file at the root directory to `.env` and update the following variables:

```
REACT_APP_CANDY_MACHINE_CONFIG=__PLACEHOLDER__
```

This is a Solana account address. You can get the value for this from the `.cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_CANDY_MACHINE_ID=__PLACEHOLDER__
```

Same as above; this is a Solana account address. You can get the value for this from the `./cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_TREASURY_ADDRESS=__PLACEHOLDER__
```

This the Solana address that receives the funds gathered during the minting process. More docs coming as we can test this.

```
REACT_APP_CANDY_START_DATE=__PLACEHOLDER__
```

This is a unix time stamp that configures when your mint will be open.

```
REACT_APP_SOLANA_NETWORK=devnet
```

This identifies the Solana network you want to connect to. Options are `devnet`, `testnet`, and `mainnet`.

```
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com
```

This identifies the RPC server your web app will access the Solana network through.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
