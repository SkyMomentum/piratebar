var ATavern = ATavern || {};

function Ship(id, name) {
    this.id = id;
    this.name = name;
    this.heading = 0;
    this.speed = 0;
    this.cargoworth = 0;
    this.loot = [];
    this.captain = {}
}

function Seafarer(id, name, shipid) {
    this.id = id;
    this.name = name;
    this.ship = shipid;
    this.maxhp = 15;
}

function Pirate(id, name, shipid) {
    Seafarer.call(this, id, name, shipid);
    this.money = 0;
    this.thirst = 0;
    this.maxhp = 25;
    this.attackstr = 2;
}

Pirate.prototype = Object.create(Seafarer.prototype);

function PirateCaptain(id, name, shipid) {
    Pirate.call(this,id, name, shipid);
    this.maxhp = 25 + (Math.random() * 25);
    this.attackstr = 2 + (Math.random() * 15);
    this.loot = [];
}
PirateCaptain.prototype = Object.create(Pirate.prototype);


ATavern.activeCargoShips = [];

ATavern.nextCaptId = 1
ATavern.makeNewMerchantCaptain = function(name, loot){
    var tCapt = new Seafarer(2, "Capt. Dull", id);
}

ATavern.makeCargoship = function(captain, worth) {
    var tShip = new Ship(id, "Freighter One");
    
    tShip.captain = tCapt;
    tShip.worth = worth;
    tShip.loot.push(loot);
    return tShip;
}

ATavern.appendGameLog = function(str){
    var nline = $("<div></div>", {
      "text": str,
      "class": "LogLine",
      "title": "a long line"
    });
    $( ".GameLog" ).append(nline);
}


ATavern.initializeGame = function (){
    $( ".GameLog" ).append("WELCOME TO YOUR NEW TAVERN'S DEBUG LOG - ARRRR\n");
    ATavern.appendGameLog("Creating 100 cargo ships");
    var cargoship = ATavern.makeCargoship(1,1);
    ATavern.appendGameLog("Creating 20 pirate ships");
}
