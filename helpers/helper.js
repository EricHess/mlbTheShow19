let playerList;
let profitList;

fetchPlayers = () =>{
    let loadingBar = document.querySelector(".loadingBar");
    loadingBar.innerHTML="Grabbing Players.... Please Wait."
    fetch('/requestPlayers')
    .then(response => response.json())
    .then(data => {
        // Here's a list of repos!
        playerList = data;
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
    return gatheredPlayers;
}

outbidChecker = (type, amount, name) =>{
    let playerElement = playerList.find(obj => obj.name == name);

    switch(type){
        case "buyOrder":
        playerElement.buy_price > amount ? console.log('outbid') : console.log('all good still')
        break;

        case "sellOrder":
        playerElement.sell_price < amount ? console.log('outbid') : console.log('all good still')   
    }
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