var express = require("express");
var app = express();
var path = require('path');

const request = require('request');



app.listen(3000, () => {
 let wholeCollection = [];
 let initialIterator = 1;

 app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

 app.get("/requestPlayers", (req, res, next) => {
    callToAPI(res, initialIterator, "MLB_Card");
 })

 app.get("/requestStadiums", (req, res, next) => {
    callToAPI(res, initialIterator, "Stadium");
 })

 app.get("/requestEquipment", (req, res, next) => {
    callToAPI(res, initialIterator, "Equipment");
 })

 app.get("/requestSponsorships", (req, res, next) => {
    callToAPI(res, initialIterator, "Sponsorship");
 })

 app.get("/requestUnlockables", (req, res, next) => {
    callToAPI(res, initialIterator, "Unlockable");
 });

 function callToAPI(res, iterator, type){
    request("https://mlb19.theshownation.com/apis/listings.json?type="+type+"&page="+iterator, function (error, response, body) {
        let resp = JSON.parse(response.body)
        wholeCollection.push(resp.listings);
        if(resp.listings.length != 0){
            initialIterator++;
            callToAPI(res, initialIterator, type);
        }else{
            res.send(consumeData(wholeCollection.flat()));
        }
    })    
}

function consumeData(collection){
    let finalObj = {};
    let draftArr = [];
    
    for(let i = 0; i<collection.length;i++){
        draftArr. push ({
            "name": collection[i].name,
            "profitMargin": ((collection[i].best_sell_price - collection[i].best_sell_price * .10) - collection[i].best_buy_price),
            "sell_price": collection[i].best_sell_price,
            "buy_price": collection[i].best_buy_price
        })
    }

    function compare(a,b) {
        if (a.profitMargin > b.profitMargin)
          return -1;
        if (a.profitMargin < b.profitMargin)
          return 1;
        return 0;
      }
      
      draftArr.sort(compare);

    return draftArr;
}

   });
