const request = require('request');
const axios = require('axios');
// global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const config = require('./../../config.js');
const {
    createEthaddress,
    ngoInfoHashes,
    createHashes,
    } = require('./../../services/services');

// const userFields = ['Email', 'Ethaddress', 'LicenceId', 'Number Plate', 'AccountVerified'];
// const tollFields = ['Email', 'Ethaddress', 'DocumentId', 'Car Price','Truck Price', 'Bike Price', 'Govt. Price', 'AccountApproved'];

const tokenInstance = axios.create({
	baseURL: config.apiPrefix + config.contractAddress,
	timeout: 5000,
	headers: {'X-API-KEY': config.apiKey}
});

// const auditInstance = axios.create({
// 	baseURL: config.apiPrefix + config.auditContractAddress,
// 	timeout: 5000,
// 	headers: {'X-API-KEY': config.apiKey}
// });

const erc20Mintable = axios.create({
    baseURL : config.apiPrefix + config.erc20minContractAddress,
    timeout: 5000,
	headers: {'X-API-KEY': config.apiKey}
})

// Create User Account By Email
exports.create_user = function(req, res) {
    const email = req.body.emailAddress;
    const userEthaddress = createEthaddress(email);
    const userEmailHash = createHashes(email);
    // console.log("POST REQUEST", req.body.emailAddress, req.body.licence, req.body);
    tokenInstance.post('/addUserByEmailSelfApprove', {
        ethAddress: userEthaddress,
        emailHash: userEmailHash
        
    })
    .then(function (response) {
        const data = response.data;
        data["ethAddress"] = userEthaddress;
        console.log("RESPONSE FROM API", data);
     
        res.send(data);
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE")
        res.status(error.response.status);
        res.send(error.response.data)
    })

}

// Create NGO By Email
exports.create_ngo = function(req, res) {
    const ngoEthaddress = createEthaddress(req.body.emailAddress);
    const ngoEmailHash = createHashes(req.body.emailAddress);
    
    // const qr = generateTollQR(tollEthaddress, req.body.tollPricing);
        tokenInstance.post('/addNgoByEmailSelfApprove', {
            ethAddress: ngoEthaddress,
            emailHash: ngoEmailHash
            
        })
        .then(function (response) {
            const data = response.data;
            data["ethAddress"] = ngoEthaddress;
            console.log("RESPONSE FROM API", data);
            // let tollFileData = {
            //     'Email'             : req.body.emailAddress,
            //     'Ethaddress'        : tollEthaddress,
            //     'DocumentId'        : req.body.documentId,
            //     'Car Price'         : req.body.tollPricing.car,
            //     'Truck Price'       : req.body.tollPricing.truck,
            //     'Bike Price'        : req.body.tollPricing.bike,
            //     'Govt. Price'       : req.body.tollPricing.govt,
            //     'AccountApproved'   :'1',
            // }//1 for approved and 0 for yet to approve and -1 for rejected.
            // getTollData();
            // createUpdateCSV(tollFields, tollFileData, "TollData");
            res.send(data);
            // res.type('svg');
            // qr.pipe(res);
        })
        .catch(function (error) {
            console.log("ERRROR STARTS HERE::\n",error.response.data);
            console.log("\nERROR ENDS HERE")
            res.status(error.response.status);
            res.send(error.response.data)
        })
    }


//REVOKE USER Account
exports.revoke_user = function(req, res) {
    const userEthaddress = req.body.ethAddress;
    tokenInstance.post('/revokeUser', {
        ethAddress  : userEthaddress
    })
    .then(function (response) {
        const data = response.data;
        console.log(data);
        // removeRowInCSV(userEthaddress, "userData");
        // if (data.success){
        //     console.log('User '+ ethaddress+' By Email added');
        // }
        res.send(data)
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE")
        res.status(error.response.status);
        res.send(error.response.data)
    })
}

//REVOKE ngo Account
exports.revoke_ngo = function(req, res) {
    const ngoEthaddress = req.body.ethAddress;
    tokenInstance.post('/revokeNgo', {
        ethAddress  : ngoEthaddress
    })
    .then(function (response) {
        const data = response.data;
        console.log(data);
        // removeRowInCSV(tollEthaddress, "TollData");
        // if (data.success){
        //     console.log('User '+ ethaddress+' By Email added');
        // }
        res.send(data)
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE")
        res.status(error.response.status);
        res.send(error.response.data)
    })
}

//mint for user
exports.mint = function(req, res) {
    const userEthaddress = createEthaddress(req.body.emailAddress);
    const mintAmount = req.body.amount;
    erc20Mintable.post('/mint', {
        account: userEthaddress,
        amount: mintAmount
    })
    .then(function (response) {
        const data = response.data;
        console.log("Minted",data);
        res.send(data)
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE")
        res.status(error.response.status);
        res.send(error.response.data)
    })
}

// Check user balance in ERC20Mintable
exports.balanceOf = function(req, res) {
    const userEthaddress = createEthaddress(req.body.emailAddress);
    const erc20MintableBalance = axios.create({
        baseURL : config.apiPrefix + config.erc20minContractAddress + '/balanceOf/' + userEthaddress,
        timeout: 5000,
    })
    erc20MintableBalance.get()
    .then(function (response) {
        console.log(response.data);
        res.send(response.data)
    })
    .catch(function (error) {
        res.status(error.response.status);
        res.send(error)
    })
}

// Donate
exports.donate = function(req, res) {
    const userEthaddress = createEthaddress(req.body.UseremailAddress);
    const ngoEthaddress = createEthaddress(req.body.NgoemailAddress);

    const transferAmount = req.body.amountPayed;
        tokenInstance.post('/Donate', {
            from: userEthaddress,
            to: ngoEthaddress,
            amount: transferAmount
        })
        .then(function (response) {
            const data = response.data;
            data["AmountPayed"] = transferAmount;
            console.log("RESPONSE FROM API Transfer", data);
            res.send(data);
        })
        .catch(function (error) {
            console.log("ERRROR STARTS HERE::\n",error.response.data);
            console.log("\nERROR ENDS HERE");
            res.status(error.response.status);
            res.send(error.response.data)
        })
    }