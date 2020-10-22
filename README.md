# Archie
EthOnline Project Repository 

Archie team has identified the lack of a secure, automated system to ensure donations produce tangible goods that directly support the NGOs target audience. It is a unified crowd funding platform for Donors/investors to donate/fund NGO's in accordance with cutting out the middleman and shipping the product as per the goal requirement.

---
## Prerequisites 
The steps below will help you fill in the right details in the settings file. 

### Sign up for an MaticVigil developer account

To use the MaticVigil Python SDK, you need to be signed up for a developer account on https://mainnet.maticvigil.com

### MaticVigil Python SDK

1. pip install from Github repo#
`pip install git+https://github.com/blockvigil/maticvigil-python-sdk.git`

2. Do a local pip install after git clone

`git clone https://github.com/blockvigil/maticvigil-python-sdk.git
pip install maticvigil-python-sdk/
`

### Deploy the main contract

Use MaticVigil to deploy the Solidity Smart Contract, `NGO.sol`, `ERC20Mintable.sol` and `SafeMath.sol`.

* [Deploy contract from Web UI](https://maticvigil.com/docs/web_onboarding)
* [Deploy contract from CLI](https://maticvigil.com/docs/cli_onboarding)

After deploying, use the `API-KEY` provided in the backend server `config.js`

## Maintainers
These contracts are maintained by:
* [Somya Didwania](https://github.com/somyadidwania)
* [Shubham Sharma](https://github.com/shubidiwoop)
