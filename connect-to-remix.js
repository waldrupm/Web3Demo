const Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545');

web3.eth.getTransactionCount("0x96E8493e45a2576df3d3e16688449298C9682C13").then(console.log);