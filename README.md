# Archie
EthOnline 2020 Project Repository

## Overview 
Archie team has identified the lack of a secure, automated system to ensure donations produce tangible goods that directly support the NGOs target audience. It is a unified crowd funding platform for Donors/investors to donate/fund NGO's in accordance with cutting out the middleman and shipping the product as per the goal requirement.

> [Our Server](https://tollbotv4.herokuapp.com/)

> [Video Demo](https://youtu.be/57B67BZ_URI)

> [Presentation for Demo](https://www.slideshare.net/secret/5xHXJY2dLcnv7l)

> [EthOnline Submission](https://hack.ethglobal.co/showcase/archie-reccLGtgo1oV3W37d)

## Respository Contents

- [Usage](#usage)
- [Composition](#composition)
- [Backend Server](https://github.com/shubidiwoop/azureus/tree/master/Backend%20Server)
- [Frontend App](https://github.com/shubidiwoop/azureus/tree/master/Frontend%20App)
- [Smart Contracts](https://github.com/shubidiwoop/azureus/tree/master/Smart%20Contracts)
- [Space-Daemon](https://github.com/shubidiwoop/azureus/tree/master/Space-Daemon)
- [Credits](#credits)
- [Support](#support)

Refer to instructions in each to run and develop them locally.

## Usage

<div align="center"> <img src="https://i.imgur.com/gf7buT2.jpg" alt="flow Diagram"></div>

This idea has the potential to introduce much-needed reforms in the traditional donations systems, in which most users are apprehensive. The registration will be swift and easy for NGOs, who most likely will only need details of a document ID by an issuing authority. 

For the registration process, access tokens will be verified via GoogleAuthO, generating a unique Ethereum Address corresponding to the email provided. Once the user is registered, users will be able to deposit FIAT money into the account. In the post-COVID19 world, contactless donations will be made via our site. The user will select a product listed by a NGO and can pay with any denomination deductible and the program will verify account balance by maintaining an ERC20 balance and transferring for each deduction, which provides automation and transparency and reduces cases of fraud, as the product gets shipped directly to the NGO once the goal is met.

## Composition

**Smart Contracts**

All the smart contracts were deployed using MaticVigil along with its proxy contract feature for added security measures. There is the primary smart contract to which the web app makes write calls using the MaticVigil API, to mint and transfer tokens and temporarily hold them before being redirected to donate. The NGO smart contract holds the status of users and NGOs, if they have been approved or not, the option to create new users and NGOs and revoke them as well. 

**The Web App**

The login system is built using the auth0-passport strategy which allows users directly to login with their Google account and therefore, there is no hassle of having to remember another password. A deterministic ethereum address is generated using the user's email address and a salt (could be the document ID issued). Users can easily purchase tokens (the production version will include a payment gateway for this purpose) and use these tokens to donate. There is a transaction log that is maintained along with the EtherScan link for users to view their ethereum transaction details. On the NGO side, they can list products needed for the target audience with the choice to edit or add products. The user can donate to any product for any NGO as much as they feel desirable. The product is shipped to the NGO with the tracking info once the goal is reached. The delete-account button revoked the account. This approach can be modified for several payment applications making the process decentralized, automated, encrypted, and space stored. 


## Credits

We have designed this full-stack dapps using the support provided by [MaticVigil’s APIs](http://mainnet.maticvigil.com/). 
We will keep you updated on the additional functionalities that will be added to the projects.

## Support 

Reach out to one of us regarding any queries or support!
* [Roshan Kumar Choudhary](https://github.com/RoshanKumarChoudhary)
* [Somya Didwania](https://github.com/somyadidwania)
* [Shubham Sharma](https://github.com/shubidiwoop)







