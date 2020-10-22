// const qr = require('qr-image');
// const { SpaceClient } = require('@fleekhq/space-client');
// const fleek = require('@fleekhq/fleek-storage-js');   
// const { parse } = require('json2csv');
const createKeccakHash = require('keccak');
const sha3 = require('js-sha3');
const privateToAccount = require('ethjs-account').privateToAccount;
const chabi = 'kab00t4r';
// const path = require('path');
// const apiKey = process.env.APIKEY;
// const apiSecret = process.env.APISECRET;


const createEthaddress = (email) => {
  const emailHash = '0x'+createKeccakHash('keccak256').update(email).digest('hex');
  const ethAddress = privateToAccount(sha3.keccak256(chabi + emailHash)).address.toLowerCase();
  console.log("Ethaddress: ", ethAddress)
  return ethAddress;
}

const ngoInfoHashes = (document_id) => {
    const ngoData = document_id;
    const ngoInfoHash = '0x'+createKeccakHash('keccak256').update(ngoData).digest('hex');
    console.log("ngo info hash: ", ngoInfoHash);
    return ngoInfoHash;
}



const createHashes = (data) => {
    const dataHash = '0x'+createKeccakHash('keccak256').update(data).digest('hex');
    console.log("Data Hash: ", dataHash);
    return dataHash;
}



// const getPayableAmount = (carNum, tollPrice) => {
//     const carTypeCode = carNum[4]+carNum[5];
//     if(carTypeCode === "CR"){
//         return tollPrice.car;
//     }
//     else if(carTypeCode === "TR"){
//         return tollPrice.truck;
//     }
//     else if(carTypeCode === "BK"){
//         return tollPrice.bike;
//     }
//     return tollPrice.govt;
// }

// const createUpdateCSV = async (fields, data, fileName) => {
//     let newLine= "\r\n";
//     let quote= '';
//     let opts = {fields, quote};

//     const oldData = await getFileData(`${fileName}.csv`)
//     if (oldData !== -1){
//       var updateCsv = oldData + parse(data, {header : false, quote: ''}) + newLine;
//       console.log('UPDATED DATA: ', updateCsv)
//       FleekFileDataUpload(updateCsv,`${fileName}.csv`);
//     }
//     else{
//       var createCsv = parse(data, opts) + newLine;
//       console.log('CREATED DATA: ', createCsv)
//       FleekFileDataUpload(createCsv,`${fileName}.csv`);
//     }
// }


  // const FleekFileDataUpload = async (data, fileName) => {
  //   const input = {
  //     apiKey,
  //     apiSecret,
  //     key: fileName,
  //     data,
  //   };
  
  //   try {
  //     const result = await fleek.upload(input);
  //     console.log(result);
  //   } catch(e) {
  //     console.log('error', e);
  //   }
  // }



module.exports = {
    createEthaddress,
    ngoInfoHashes,
    createHashes,
}