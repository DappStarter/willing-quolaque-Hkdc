require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note shift pupil hockey argue front slice'; 
let testAccounts = [
"0x03ace7b34c19eb396c0cc35a12871a6169489cbc146792dd43a05ed7b421dd0b",
"0xbe77e629e518b59b9ce4a808a151421217c1f790a1bd6653edeb4aac9086fde8",
"0xf0f34729df9c1a8e2bd9dc7a312fa2f1e9cab9e6ac29e1aec6516242a21a1939",
"0x5774f79c0a8c161e22e6127635d521efe042db75f3181dfd1821f784eaa02945",
"0x9c439d201ef0b8846ddf64e6435aedbcb04087dfd9d1a57aa9b2fe26c257fd3d",
"0x15dd5e42253c595ac4af93a247282194f92359cd7a0b4cf888072ef755777110",
"0x26f73bebf63a9f21bf317da8035d06159316c6aed10d381e7574e5d48794128d",
"0x9a09b93b66d5be1c78d8819669f519066c6e2069844abec7dcdca02e4a9d3462",
"0x38a5996e65e86d4ef82340bedea6eedf8e1d920a253d088921f8dde659cd0d61",
"0x6c5dd06a186aa26518a9df9b55f5601be440af10ef1ed194a167a48a2110a153"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


