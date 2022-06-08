// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
contract buy{
     mapping(string => bool) goodsChk;
    //定义商户结构体
    // struct Bid {
    //     address bidder;
    //     uint256 value;
    // }
    address public defaultaddress;
    uint256 public productIndex;
    uint256 public totalBidders;
    mapping(address => mapping(uint256 => Product)) stores;
    struct Product {
        //商品id
        uint256 id;
        //商品名称
        string name;
        //商品详情
        string main;
        //商品现价
        uint256 price;
       
}
//收款
function transderToContract() payable public {
        payable(address(this)).transfer(msg.value);
}
//退款
function refund(uint256 money)payable public{
     payable(address(msg.sender)).transfer(money);
} 
//交易
//function pay{}
function Get(uint256 money)payable public{
    payable(address(msg.sender)).transfer(money);
}
function getBalanceOfContract() public view returns (uint256) {
    return address(this).balance;
}

fallback() external payable {}

receive() external payable {}


//上链
constructor() {
        productIndex = 0;
    }
     mapping(uint256 => Product) requests;
 function cart(
        uint256 _id,
        string memory _name,
        string memory _main,
        uint256 _price)public returns(bool){
        Product storage r = requests[productIndex];
        r.id=_id;
        r.name=_name;
        r.main=_main;
        r.price=_price;
        productIndex = productIndex + 1;
        return true;

}
   //通过商品ID读取商品信息(获取商品信息)
    function getProduct(uint256 _productId)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint256
        
        )
    {
        //id数等于商品传进来的id
        uint256 idnumber = requests[_productId].id;
        string memory name = requests[_productId].name;
        string memory main = requests[_productId].main;
        uint256 price = requests[_productId].price;
        return (
            idnumber,
            name,
            main,
            price
          );
    }
     //查看商品状态
    function showProductstatus(uint256 id) public view returns (uint256) {
        return (requests[id].id);
    }

}