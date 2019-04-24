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
 * 
 * HANDLE MULTIPLE CARDS OF THE SAME PLAYER NAME
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

outbidChecker = async (type, amount, name) =>{
    let playerElement = playerList.find(obj => obj.name == name);
    let updatedInfo;
    let response = await fetch('/outbidCheck/'+playerElement.original_page);
    let data = await response.json();
    let finalOutput = await data.find(obj => obj.name == name)
    return finalOutput;
}


addToBidTable = (type, amount, name) =>{
    let bidTable = document.querySelector("#bidChecker .bidList tbody"),
    bidAmount = amount,
    currentPrice,
    bidType= type

    bidTable.innerHTML += "<tr data-item-name='"+name+"'>"+"<td class='itemName'>"+name+"</td>"+"<td class='itemAmount'>"+bidAmount+"</td>"+"<td class='currentBid'>"+currentPrice+"</td>"+"<td class='bidType'>"+bidType+"</td>"+"<td class='deleteItem'>X</td>"+"</tr>"    
}


updateBidTable = (biddingData) => {
    let bidTableDOM = document.querySelector("#bidChecker .bidList tbody");
    //find the matching row
    //apply updates to that row for current bid
    let selectedRow = document.querySelector("tr[data-item-name='"+biddingData.name+"']")
    let selectedCurrentBid = selectedRow.querySelector(".currentBid");
    let selectedMyBid = selectedRow.querySelector(".itemAmount");
    let selectedRowType = selectedRow.querySelector(".bidType").textContent;
    selectedCurrentBid.innerHTML = selectedRowType == "buyOrder" ? biddingData.best_buy_price : biddingData.best_sell_price;
    checkForOutbidExistence(selectedRow, selectedRowType, selectedMyBid, biddingData);
}

checkForOutbidExistence = (domElement, type, selectedMyBid, data) =>{
    let buyPrice = data.best_buy_price;
    let sellPrice = data.best_sell_price;
    let currentBid = selectedMyBid.textContent;
    console.log(data)

    switch(type) {
        case "buyOrder": 
        console.log(currentBid+" "+buyPrice)
        if(currentBid == buyPrice){
            domElement.classList.add("currentHighBidders")
        }   else if (currentBid > buyPrice){
            domElement.classList.remove("currentHighBidder")
            domElement.classList.add("orderCompleted")
        } else if (currentBid < buyPrice){
            domElement.classList.remove("currentHighBidder")
            domElement.classList.add("outbid")
        }
        break;
        
        case "sellOrder":
        if(currentBid == sellPrice){
            console.log("all good")
        }   else if (currentBid < sellPrice){
            console.log("order completed");
        } else if (currentBid > sellPrice) {
            console.log('outbid');
        }
        break;
    }
}

getDataForBidTable = (mutationsList, observer) => {

    let adds = mutationsList[0].addedNodes;
    let bidData;

    setInterval(function() {
        
        for(let i=3; i<adds.length; i++){
            //get the updated bids for the player names (fucntion already exsits in bidChecker)
            //update the currentBid and change a class to green or red to show when I've been outbid
            //need to wait until outbidchecker returns a result to finish.
            outbidChecker(adds[i].cells[3].innerText,adds[i].cells[1].innerText,adds[i].cells[0].innerText)
            .then(data => bidData = data) //start to use the data..
            .then(data => updateBidTable(bidData)) 
        }
        
    }, 10 * 1000);
}


window.onload = () =>{
//mutation observation for the bidtable
let bidConfig = {childList: true, subtree: true}
let bidTableDOM = document.querySelector("#bidChecker .bidList tbody");

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
    addToBidTable(orderType, amount, playerName);
})

//start up the bidWatcher
let bidWatcher = new MutationObserver(getDataForBidTable);
bidWatcher.observe(bidTableDOM, bidConfig)

//run fetch every minute to grab latest
setInterval(function() {
    fetchPlayers();
}, 60 * 1000);

}