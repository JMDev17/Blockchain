const {Blockchain, Transaction} = require('./blockchain.js')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4d71339858288148062319cd3ab76a44487ff91a0296398e1b457fc4d88fa0fd')
const myWalletAddress = myKey.getPublic('hex')

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key vai aqui', 0);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));

savjeeCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', savjeeCoin.isChainValid())
