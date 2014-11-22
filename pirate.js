var ATavern = ATavern || {};

function Ship(id, name) {
    this.id = id;
    this.name = name;
    this.heading = 0;
    this.speed = 0;
    this.crewcap = 0
    this.cargoworth = 0;
    this.loot = [];
    this.captain = {}
}

function Seafarer(id, name) {
    this.id = id;
    this.name = name;
    this.ship = 0;
    this.maxhp = 15;
}

function Pirate(id, name) {
    Seafarer.call(this, id, name, shipid);
    this.money = 0;
    this.thirst = 0;
    this.maxhp = 25;
    this.attackstr = 2;
}

Pirate.prototype = Object.create(Seafarer.prototype);

function PirateCaptain(id, name) {
    Pirate.call(this,id, name, shipid);
    this.maxhp = 25 + (Math.random() * 25);
    this.attackstr = 2 + (Math.random() * 15);
    this.loot = [];
}
PirateCaptain.prototype = Object.create(Pirate.prototype);


ATavern.activeCargoShips = [];

ATavern.nextCaptId = 1
ATavern.makeNewMerchantCaptain = function(name){
    var tCapt = new Seafarer(ATavern.nextCaptId ,name);
    ATavern.nextCaptId++;
    tCapt.maxhp = 25 + (Math.random() * 25);
    return tCapt;
}

ATavern.nextShipId = 1
ATavern.makeCargoship = function(captain, worth, loot) {
    var tShip = new Ship(ATavern.nextShipId, "Freighter One");
    ATavern.nextShipId++;
    tShip.captain = captain;
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
    var tempCaptain = ATavern.makeNewMerchantCaptain("Capt Dull");
    var cargoship = ATavern.makeCargoship(tempCaptain,100,100);
    ATavern.appendGameLog("Creating 20 pirate ships");
}
