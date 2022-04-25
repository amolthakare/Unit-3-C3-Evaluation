// Store the wallet amount to your local storage with key "amount"

let walletMoney = JSON.parse(localStorage.getItem("walletMoney")) || [];

function addToWallet(){
    let money = document.getElementById("amount").value;
    walletMoney.push(parseInt(money));
    console.log(walletMoney);
    localStorage.setItem("amount",JSON.stringify(walletMoney));
    window.location.reload();
}

function show() {
    let walletMoney = JSON.parse(localStorage.getItem("amount")) || [];
    console.log(walletMoney);

    document.getElementById("wallet").append(walletMoney);
}
show();
