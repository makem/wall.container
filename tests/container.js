var should  = require('should');

describe('A simple test suite',function(){
    var value = 0;
    beforeEach(function(){
        value = 1;
    });
    it('value should be always equals 1',function(){
       value.should.be.equal(1);
    });
});