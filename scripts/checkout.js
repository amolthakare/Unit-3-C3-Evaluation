// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let checkoutArr = JSON.parse(localStorage.getItem("checkoutMovie")) || [];
console.log(checkoutArr);

function appendMovies(){
    document.getElementById("movie").innerHTML=null;

    checkoutArr.forEach(function (elem) {
        let div = document .createElement("div");

        let image = document.createElement("img");
        image.src = elem.Poster;

        let title = document.createElement("h3");
        title.innerText = elem.Title;

        // let year = document.createElement("h4");
        // year.innerText = elem.Year;

        div.append(title,image);
        document.getElementById("movie").append(div);
    });
}

appendMovies(checkoutArr);

function show() {
    let walletMoney = JSON.parse(localStorage.getItem("amount")) || [];
    console.log(walletMoney);

    document.getElementById("wallet").append(walletMoney);
}
show();


function confirm(){
    // if(walletMoney>=100){

        alert ("Booking successful!");
    // }
    // else{
    //     alert("Insufficient Balance!");
    // }
}