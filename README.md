# Archie
EthOnline 2020 Project Repository

## Overview 
Archie team has identified the lack of a secure, automated system to ensure donations produce tangible goods that directly support the NGOs target audience. It is a unified crowd funding platform for Donors/investors to donate/fund NGO's in accordance with cutting out the middleman and shipping the product as per the goal requirement.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! After running the following command, just open again the command line.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/shubidiwoop/archie
    $ cd server
    $ npm install

## Configure app
  
- Open `config.js` then edit it with your API KEY. Refer [smart-contracts](https://github.com/shubidiwoop/azureus/tree/master/Smart%20Contracts) documentation to extract this.

    ```shell
    apiKey: process.env.ETHAPIKEY

## Running the project

    $ npm start

## Maintainers
This server is maintained by:
* [Shubham Sharma](https://github.com/shubidiwoop)
* [Somya Didwania](https://github.com/somyadidwania)






