// var Web3 = require('web3')

const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_main",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "cart",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            }
        ],
        "name": "Get",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            }
        ],
        "name": "refund",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transderToContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "defaultaddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalanceOfContract",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "getProduct",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "productIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "showProductstatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalBidders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

let totalaccounts = [];
let nowAccounts;
web3.eth.getAccounts().then(function (accounts) {
    totalaccounts = accounts[0];
    nowAccounts = accounts[0];
});
var myContract = new web3.eth.Contract(abi, '0x59788e8cCda458086fDfBc8b247B277D1F35E25f');

if (typeof window.ethereum !== 'undefined') { console.log('MetaMask is installed!'); }

console.log("myContract==>", myContract)

//获取当前账户
async function getAccount() {
    totalaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = totalaccounts[0];
    console.log("async account==>>>>>", account);
    // $(".showAccount").html(account);
}

ethereum.on('accountsChanged', function (accounts) {
    const account = accounts[0];
    console.log("accounts[0]==>", account)
    nowAccounts = account;
    console.log("nowAccounts[0]==>>>", nowAccounts)
    // $(".showAccount").html(account);
});


//向合约里转钱
$("#priceContract").click(function () {
    var priceNews = document.getElementById("money").innerText.split("￥")[1];
    var lastprice = priceNews + '000000000000000000'
    console.log(lastprice)
    console.log("nowAccounts[0]==>>>", nowAccounts)
    myContract.methods.transderToContract().send({
        from: nowAccounts,
        to: '0x59788e8cCda458086fDfBc8b247B277D1F35E25f',
        value: lastprice,
        gas: 3000000
    })
        .on('transactionHash', function (hash) {
            // alert(hash)
        })
        .on('confirmation', function (confirmationNumber, receipt) {

        })
        .on('receipt', function (receipt) {
            console.log(receipt);
            if (receipt.status === true) {
                alert("结算成功")
            }

        })
        .on('error', function (error, receipt) {
        })
})

