var Express = require('express'); 

var app = Express();

// manage the routes with traditional nodeJs
app.get("/", (req, res) => {
    res.status(200).send("Vitto's trying Jasmine test"); 
}); 

// an other enpoint
app.get("/", (req, res) => {
    res.status(500).send({
        "message": "Error response"
    })
}); 
//an other endpoint
app.get("/test", (req, res) => {
    res.status(500).send({
        "message": "Error response"
    })
}); 

var server = app.listen(3000, () => {
    console.log('Listening on port' + server.address().port +"...");
}); 

module.exports = server;