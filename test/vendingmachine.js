var expect = require('chai').expect;//require the use of the expect function
var myVendingMachine = require('../app/vendingmachine');//vending-machine object

describe('Vending Machine', function (){//Describe the feature
    describe('When it is turned on', function (){
        it('Should have a money amount', function (){
            expect(myVendingMachine).to.have.property('bank');
        });
        it('Should have a item amount', function (){
            expect(myVendingMachine).to.have.property('wares');
        });
    });
    describe('When an item is selected', function (){//Finer Level Detail Description
        it('Should determine if the item exists');
    });
});