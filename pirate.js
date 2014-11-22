var ATavern = ATavern || {};

function Ship(id, name) {
    this.id = id;
    this.name = name;
    this.cargoworth = 0;
    this.loot = [];
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
    ATavern.appendGameLog("TEST TEST TEST TEST");
}
