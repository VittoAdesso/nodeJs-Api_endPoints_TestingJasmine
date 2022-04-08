var Request = require('request');

//test grouping
describe('Server', () =>{
    // to initialize the server and test 
    var server;
    beforeAll(() =>{
        server = require('../app');
    }); 
    afterAll(() =>{
        server.close();
    });

    //now i write what i want
    describe("GET /", () =>{
        var data = {}; 
        beforeAll((done) =>{
            Request.get("http://localhost:3000/", (err, res, body) =>{
                data.status =res.statusCode;
                data.body = body;
                done();
            });
        });
        //every test i run into it 
        it("Status 200 OK", () =>{
            //toBE (what i expected)
            expect(data.status).toBe(200);
        }); 
    });
  //now i write what i want
    describe("GET /test", () =>{
        var data = {}; 
        beforeAll((done) =>{
            Request.get("http://localhost:3000/test", (err, res, body) =>{
                data.status =res.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        //every test i run into it 
        it("Status 500", () =>{
            //toBE (what i expected)
            expect(data.status).toBe(500);
        }); 
        it("Body", () =>{
            //toBE (what i expected)
            expect(data.body.message).toBe("Error response");
        }); 
});

});