var expect  = require('chai').expect;
var request = require('request');
var server = require('../server');

describe('Status and Content', function () {
    describe('Landing Page', function () {
        it('status', function(done) {
            server.listen(8080, (address) => {
                request('http://localhost:8080/', function(error, response, body) {
                    if(error)
                        done(error);
                    else {
                        expect(response.statusCode).to.equal(200);
                        done();
                    }
                });
            });
        });
    });
});