const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(index, timestamp, data, previoushash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previoushash = previoushash;
        this.hash = ''
    }

    calculateHash() {
      return SHA256(this.index + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block (0, '01/01/2024', 'Genesis block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.lenght - 1];
    }

    addBlock(newBlock){
        newBlock.previoushash = this.getLatestBlock().hash;
        newBlock.hash
    }
}