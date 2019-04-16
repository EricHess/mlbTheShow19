

let playerList = localStorage.getItem("players") != null ? JSON.parse(localStorage.getItem("players")) : null;
let profitList;



fetchPlayers = () =>{
    localStorage.removeItem("players");
    let loadingBar = document.querySelector(".loadingBar");
    loadingBar.innerHTML="Grabbing Players.... Please Wait."
    fetch('/requestPlayers')
    .then(response => response.json())
    .then(data => {
        playerList = data;
        localStorage.setItem("players", JSON.stringify(data));
        loadingBar.innerHTML="Players Loaded!"
    })
}

gatherProfitRange = (min,max) =>{
    let gatheredPlayers = []
    for(let i=0;i < playerList.length; i++){
        if(playerList[i].profitMargin > min && playerList[i].profitMargin < max ){
            gatheredPlayers.push(playerList[i])
        }
    }
    console.table(gatheredPlayers);
    return gatheredPlayers;
}

outbidChecker = (type, amount, name) =>{
    //NEED TO GET THE UID INSTEAD OF THE NAME
    //NEED TO POPULATE BID TABLE
    //NEED TO CONSISTENTLY CHECK BID TABLE
    let playerElement = playerList.find(obj => obj.name == name);
    fetch('/outbidCheck/'+playerElement.original_page)
    .then(response => response.json())
    .then(data => {
        let updatedCost = data.find(obj => obj.name == name);

        switch(type){
            case "buyOrder":
            updatedCost.best_buy_price == parseInt(amount) ? console.log('all good still') : console.log('outbid, new bid is: '+updatedCost.best_sell_price) 
            //updateBidTable with name, price, amount
            updateBidTable();
            break;
    
            case "sellOrder":
            updatedCost.best_sell_price == parseInt(amount) ? console.log('all good still') : console.log('outbid, new bid is: '+updatedCost.best_sell_price)   
        }
     });

    
}

updateBidTable = (type, amount, name) =>{
    let bidTable = document.querySelector("#bidChecker .bidList");
    
}


window.onload = () =>{

//event listeners
document.querySelector("#profitMarginForm").addEventListener("submit", function(e){
    e.preventDefault();
    profitList = gatherProfitRange(e.target[0].value, e.target[1].value)
})

document.querySelector("#outbidChecker").addEventListener("submit", function(e){
    e.preventDefault();
    let orderType = e.target[0].checked === true ? "buyOrder" : "sellOrder"
    let amount = e.target[2].value;
    let playerName = e.target[3].value;
    outbidChecker(orderType, amount, playerName);
})


}