/*
    Author: Ryan Drew
    Creation: 11/21/14
*/
var ATavern = ATavern || {};

function Ship(id, name) {
    this.id = id;
    this.name = name;
    this.heading = 0;
    this.speed = 0;
    this.distance = 0;
    this.crewcap = 0
    this.cargoworth = 0;
    this.loot = [];
    this.captain = {};
    this.crew = [];
}

// A generic sea goer, prey. Their captain is one of them but a tiny bit bigger.
function Seafarer(id, name) {
    this.id = id;
    this.name = name;
    this.ship = -1;
    this.maxhp = 15;
}
// utility for partial movement to ship. Sets their ship id.
Seafarer.prototype.setShipId = function (id) {
    this.ship = id;
    return id;
}

// Has more teeth than other sea goers.
function Pirate(id, name) {
    Seafarer.call(this, id, name);
    this.money = 0;
    this.thirst = 0;
    this.maxhp = 25;
    this.attackstr = 2;
    this.greed = 2000;
}

Pirate.prototype = Object.create(Seafarer.prototype);

// The most teeth.
function PirateCaptain(id, name) {
    Pirate.call(this,id, name);
    this.maxhp = 25 + (Math.random() * 25);
    this.attackstr = 2 + (Math.random() * 15);
    this.loot = [];
}
PirateCaptain.prototype = Object.create(Pirate.prototype);


//ATavern.activeCargoShips = [];
//TODO make this part of the objects.?

// Next three functions keep track of issued id numbers for the entities by type.
ATavern.nextPirateId = 1;
ATavern.getNextPirateId = function () {
    ATavern.nextPirateId++;
    return ATavern.nextPirateId;
}

ATavern.nextSeafarerId = 1;
ATavern.getNextSeafarerId = function () {
    ATavern.nextSeafarerId++;
    return ATavern.nextSeafarerId;
}

ATavern.nextShipId = 1;
ATavern.getNextShipId = function () {
    ATavern.nextShipId++;
    return ATavern.nextShipId;
}


// Promote a seafarer to 'captain' by giving them a little more hp
ATavern.makeNewMerchantCaptain = function(name){
    var tCapt = new Seafarer(ATavern.getNextSeafarerId(),name);
    tCapt.maxhp = 25 + (Math.random() * 25);
    return tCapt;
}

// Create a merchant cargo ship of a certain worth with some list of loot (or not)
ATavern.makeCargoship = function(captain, worth, loot) {
    var tShip = new Ship(ATavern.getNextShipId(), "Freighter One");
    captain.setShipId(tShip.id);
    tShip.captain = captain;
    tShip.worth = worth;
    tShip.loot.push(loot);
    tShip.crewcap = 10 + (Math.random() * 25);
    for( var i = 0; i < tShip.crewcap; i++){
        var sm = new Seafarer(ATavern.getNextSeafarerId(), "John Doe");
        sm.setShipId(tShip.id);
        tShip.crew.push(sm);
    }
    return tShip;
}


// Make a pirate ship to go out and feed.
ATavern.makeRandomPirateShip = function() {
    var tShip = new Ship(ATavern.getNextShipId(), "Serenity");
    var tPirate = new PirateCaptain(ATavern.getNextPirateId(), "Capt. Reynolds");
    tShip.captain = tPirate;
    tShip.crewcap = 15 + (Math.random() * 22);
    for( var i = 0; i < tShip.crewcap; i++){
        var sm = new Pirate(ATavern.getNextPirateId(), "X");
        sm.setShipId(tShip.id);
        tShip.crew.push(sm);
    }
    return tShip;
}

//Utility display function

ATavern.appendGameLog = function(str){
    var nline = $("<div></div>", {
      "text": str,
      "class": "LogLine",
      "title": "a long line"
    });
    $( ".GameLog" ).append(nline);
}

ATavern.cargoShips = [];
ATavern.pirateShips = [];

ATavern.tickGameState = function () {
    //  
    //  draw one pirate, one cargo, make em fight
    //  triangle wins, triangleman
    //  when a pirate has fulfilled greed it makes its way to your tavern.
    //  when it arrives it tries to sell loot,
    //      it's crew take their share and buy beer/cause trouble 
}

// Part test bed at the moment. Game loop to be tick sequence based on the notes below.
ATavern.initializeGame = function (){
    $( ".GameLog" ).append("WELCOME TO YOUR NEW TAVERN'S DEBUG LOG - ARRRR\n");
    ATavern.appendGameLog("Creating 100 cargo ships");
    var tempCaptain = ATavern.makeNewMerchantCaptain("Capt Dull");
    var cargoship = ATavern.makeCargoship(tempCaptain,100,100);
    var randomPirate = ATavern.makeRandomPirateShip();
    ATavern.appendGameLog("Creating 20 pirate ships");

}
