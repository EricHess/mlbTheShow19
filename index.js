var express = require("express");
var app = express();

const request = require('request');

const stub = [
        {
            "name": "A.J. Burnett",
            "best_sell_price": 6000,
            "best_buy_price": 4600
        },
        {
            "name": "A.J. Cole",
            "best_sell_price": 222,
            "best_buy_price": 40
        },
        {
            "name": "A.J. Minter",
            "best_sell_price": 720,
            "best_buy_price": 330
        },
        {
            "name": "A.J. Pollock",
            "best_sell_price": 663,
            "best_buy_price": 426
        },
        {
            "name": "A.J. Ramos",
            "best_sell_price": 2200,
            "best_buy_price": 1775
        },
        {
            "name": "A.J. Ramos",
            "best_sell_price": 113,
            "best_buy_price": 27
        },
        {
            "name": "A.J. Reed",
            "best_sell_price": 28,
            "best_buy_price": 10
        },
        {
            "name": "Aaron Altherr",
            "best_sell_price": 110,
            "best_buy_price": 35
        },
        {
            "name": "Aaron Brooks",
            "best_sell_price": 48,
            "best_buy_price": 5
        },
        {
            "name": "Aaron Bummer",
            "best_sell_price": 50,
            "best_buy_price": 6
        },
        {
            "name": "Aaron Hicks",
            "best_sell_price": 1970,
            "best_buy_price": 1750
        },
        {
            "name": "Aaron Judge",
            "best_sell_price": 75000,
            "best_buy_price": 69000
        },
        {
            "name": "Aaron Loup",
            "best_sell_price": 209,
            "best_buy_price": 39
        },
        {
            "name": "Aaron Nola",
            "best_sell_price": 17295,
            "best_buy_price": 14901
        },
        {
            "name": "Aaron Sanchez",
            "best_sell_price": 179,
            "best_buy_price": 95
        },
        {
            "name": "Aaron Slegers",
            "best_sell_price": 65,
            "best_buy_price": 0
        },
        {
            "name": "Aaron Wilkerson",
            "best_sell_price": 40,
            "best_buy_price": 5
        },
        {
            "name": "Abraham Almonte",
            "best_sell_price": 49,
            "best_buy_price": 0
        },
        {
            "name": "Adalberto Mejia",
            "best_sell_price": 51,
            "best_buy_price": 10
        },
        {
            "name": "Adalberto Mondesi",
            "best_sell_price": 1995,
            "best_buy_price": 1660
        },
        {
            "name": "Adam Cimber",
            "best_sell_price": 50,
            "best_buy_price": 12
        },
        {
            "name": "Adam Conley",
            "best_sell_price": 299,
            "best_buy_price": 206
        },
        {
            "name": "Adam Duvall",
            "best_sell_price": 493,
            "best_buy_price": 275
        },
        {
            "name": "Adam Eaton",
            "best_sell_price": 530,
            "best_buy_price": 302
        },
        {
            "name": "Adam Engel",
            "best_sell_price": 54,
            "best_buy_price": 6
        }
    ]



app.listen(3000, () => {
 let wholeCollection = [];
 let initialIterator = 1;


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
 })

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
    let buy = 0;
    let sell = 0;
    let difference = 0;
    let finalObj = {};
    let draftArr = [];

    
    for(let i = 0; i<collection.length;i++){
        finalObj[collection[i].name] = {
            "profitMargin": ((collection[i].best_sell_price - collection[i].best_sell_price * .10) - collection[i].best_buy_price),
            "sell_price": collection[i].best_sell_price,
            "buy_price": collection[i].best_buy_price
        }
    }

    return finalObj;
}

   });
