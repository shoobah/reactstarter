var McFly = require('McFly');
//var Constants = require('../constants');
var Data = require('../../test/inventory.json');

var Flux = new McFly();

var _inventory = Data;

var ShopStore = Flux.createStore({
        getItems: function() {
           return _inventory;
        }
    },
    function(payload) {
        console.log('payload', payload);
    }
);

module.exports = ShopStore;
