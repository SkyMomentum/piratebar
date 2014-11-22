var ATavern = ATavern || {};

function Ship(id, name) {
    this.id = id;
    this.name = name;
}

function Seafarer(id, name, shipid) {
    this.id = id;
    this.name = name;
    this.ship = shipid;
    this.maxhp = 0;
}

function Pirate(id, name, shipid) {
    Seafarer.call(this, id, name, shipid);
    this.maxhp = 25;
    this.attackstr = 2;
}

Pirate.prototype = Object.create(Seafarer.prototype);

function PirateCaptain(id, name, shipid) {
    Pirate.call(this,id, name, shipid);
    this.maxhp =+ (Math.random() * 25);
    this.attackstr =+ (Math.random() * 15);
}
PirateCaptain.prototype = Object.create(Pirate.prototype);

ATavern.initializeGame = {

}