require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note office pulse install crisp bone surface'; 
let testAccounts = [
"0x7dbbcac45a868907eec05a8bbcea7c0c3a70f5c824a13ddda88674f9613c725e",
"0x56972c46a5bcaecfd2eef7f2676e9b3d8ffe7059780902abd6e4d57f5c49b366",
"0x290b10d0386c7f1abe7c97344a626fdffda902b84bb0fa41538ffa340e40d690",
"0xbf1a1de1f490d76c7869f08d95d6eb4c5c8a9400173de2a94b00d2c3236f787d",
"0x6286b9b665495f1469722cef75370050dea9134bf8f3d069ca2a64bb27dc6d25",
"0x9e69c7e6c62aac442bcb78c7300c09f16b3b1675f90543ed42696aa465450ddd",
"0x76c7848192b6b98891fc82ee332879871a307610d894615c0691700750c587ef",
"0x1b476ba6423e8e903d64f61942a95453a27fc27c58cfa4d69805a4bd64e32825",
"0x359860b88c90a3238ba23270e749f551cb93d67368e65d0f6d74a8ea75389f43",
"0xe8d15ac411805118ca319780406c38bd98af21971c2e3f73f2f490b1f3a21885"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
