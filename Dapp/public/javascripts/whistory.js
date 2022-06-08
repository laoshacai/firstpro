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
// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:3000'));
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


//从合约向商家转钱
$("#firm").click(function () {
    alert("收货成功")
    var priceNews = document.getElementById("money").innerText.split("￥")[1];
    var lastprice = priceNews + '000000000000000000'
    console.log(lastprice)
    console.log("nowAccounts[0]==>>>", nowAccounts)

    myContract.methods.Get(lastprice).send({ from: nowAccounts }), function (error, transactionHash) {

        if (!error) {
            console.log('transactionHash is ' + transactionHash);

        } else {
            console.log(error);
        }
    }
});

//从合约向买家退钱
$("#refund").click(function () {
    alert("退款成功")
    var priceNews = document.getElementById("money").innerText.split("￥")[1];
    var lastprice = priceNews + '000000000000000000'
    console.log(lastprice)
    console.log("nowAccounts[0]==>>>", nowAccounts)

    myContract.methods.refund(lastprice).send({ from: nowAccounts }), function (error, transactionHash) {
        if (!error) {
            console.log('transactionHash is ' + transactionHash);

        } else {
            console.log(error);
        }
    }
});

    // myContract.methods.Get(priceNews).send({
    //     from: '0x9EfDBBD4df79E332dA54691a56A631739Bc98FFA',
    //     to: nowAccounts,
    //     value: priceNews,
    //     gas: 3000000
    // })
    //     .on('transactionHash', function (hash) {
    //     })
    //     .on('confirmation', function (confirmationNumber, receipt) {

    //     })
    //     .on('receipt', function (receipt) {
    //         console.log(receipt);
    //         if (receipt.status === true) {
    //             alert("收款成功")
    //         }

    //     })
    //     .on('error', function (error, receipt) {
    //     })
// })

