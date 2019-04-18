/**
 * Automated Flow to update dashboards
 * Dashboards: Total List Table, best profit tables, bid table
 * Total List Table: Run Fetch Players, output to that table, use local storage while it is updating
 * Profit Range Table: Run method at end of Total List Table using default range of 250 - 10000
 * Bid Table: Refresh every 30 seconds, utilizing method to grab fresh data, set up push alerts?
 * 
 * 
 * 
 * NEED TO BUILD A SCRAPER FOR THE BID TABLE
 * 
 * ALERTS WHEN A PRICE GOES ABOVE OR BELOW SOMETHING
 * 
 * START TO LOG SPECIFIC IDS TO GO RIGHT TO THAT MARKETPLACE PAGE
 * 
 * AUTO RUN THE OUTBID CHECKER
 */

let playerList = localStorage.getItem("players") != null ? JSON.parse(localStorage.getItem("players")) : null;
let profitList;
let profitRange = [150, 900];



fetchPlayers = () =>{
    let loadingBar = document.querySelector(".loadingBar");
    loadingBar.innerHTML="Grabbing Players.... Please Wait."
    fetch('/requestPlayers')
    .then(response => response.json())
    .then(data => {
        playerList = data;
        localStorage.removeItem("players");
        localStorage.setItem("players", JSON.stringify(data));
        loadingBar.innerHTML="Players Loaded!"
        //Need to output on to the page in a container
        profitRange[0] === 150 && profitRange[1] === 900 ? gatherProfitRange(150,900) : null;
    })
}

gatherProfitRange = (min,max) =>{
    profitRange[0] = min;
    profitRange[1] = max;
    
    let gatheredPlayers = [];
    for(let i=0;i < playerList.length; i++){
        if(playerList[i].profitMargin > min && playerList[i].profitMargin < max ){
            gatheredPlayers.push(playerList[i])
        }
    }
    console.table(gatheredPlayers);
    //need to output on to hte page in a container
    return gatheredPlayers;
}

outbidChecker = (type, amount, name) =>{
    //NEED TO GET THE UID INSTEAD OF THE NAME
    //NEED TO POPULATE BID TABLE
    //NEED TO CONSISTENTLY CHECK BID TABLE
    let playerElement = playerList.find(obj => obj.name == name);
    fetch('/outbidCheck/'+playerElement.original_page+"?")
    .then(response => response.json())
    .then(data => {
        let updatedInfo = data.find(obj => obj.name == name);

        //updateBidTable with name, price, amount
        updateBidTable(updatedInfo, type);

        switch(type){
            case "buyOrder":
            updatedInfo.best_buy_price == parseInt(amount) ? console.log('all good still') : console.log('outbid, new bid is: '+updatedInfo.best_sell_price) 
            break;
    
            case "sellOrder":
            updatedInfo.best_sell_price == parseInt(amount) ? console.log('all good still') : console.log('outbid, new bid is: '+updatedInfo.best_sell_price)   
        }
     });

    
}

updateBidTable = (obj, type) =>{
    let bidTable = document.querySelector("#bidChecker .bidList");
    console.log(obj)
    
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

//run fetch every minute to grab latest
setInterval(function() {
    fetchPlayers();
}, 60 * 1000);

}