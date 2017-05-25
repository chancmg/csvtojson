'use strict';

var expect = require('chai').expect;
var convert = require('../index.js');

describe('#convert', function() {
    it('Should convert csvstring to json', function() {
        var result = convert.csvstring(" john,jack,joe \n 1,2,3 \n 4,5,6");
        expect(result).to.equal('[{" john":" 1","jack":"2","joe ":"3 "},{" john":" 4","jack":"5","joe ":"6"}]')
    });
});