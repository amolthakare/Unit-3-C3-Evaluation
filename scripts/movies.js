// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let checkoutArr= JSON.parse(localStorage.getItem("checkoutMovie")) || [];

async function main(){
    let data=await searchMovies();
    
    if(data===undefined){
        return false;
    }
    let movies_div = document.getElementById("movies");

let id;

async function searchMovies(){

    try{

        const query = document.getElementById("search").value;
    
        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)
    
        const data = await res.json();
        console.log("data:",data);

        const movies = data.Search;

        // appendMovies(movies);

        return movies;

    }catch(err){
        console.log("err:",err);
    }
}

function appendMovies(data) {

    movies_div.innerHTML=null;
    data.forEach(function(elem){

        let div = document.createElement("div");
        div.setAttribute("class","movie_tab")

            let image = document.createElement("img");
            image.src = elem.Poster;

            let title = document.createElement("h3");
            title.innerText = elem.Title;

            let year = document.createElement("h4");
            year.innerText = elem.Year;

            let btn = document.createElement("button");
            btn.innerText="Book Now";
            btn.addEventListener("click",function(){
                bookMovie(elem);
            })

            div.append(image, title, year,btn);
            document.querySelector("#movies").append(div);

    });
}appendMovies(data)
    console.log("data:",data);
}


function debouncing(func, delay){
    if(id){
        clearTimeout(id);
    }
    id=setInterval(function () {
        func();
    }, delay);
}

function bookMovie(elem){
    console.log(elem);
    elem.quant = 1;
    checkoutArr.push(elem);
    console.log(checkoutArr);
    localStorage.setItem("checkoutMovie", JSON.stringify(checkoutArr));
    window.location.href="checkout.html";
}

function show() {
    let walletMoney = JSON.parse(localStorage.getItem("amount")) || [];
    console.log(walletMoney);

    document.getElementById("wallet").append(walletMoney);
}
show();