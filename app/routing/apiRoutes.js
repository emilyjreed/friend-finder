var friends = require("../data/friends.js");

module.exports = function(app) {

app.get('/api/friends', function(req, res){
    return res.json(friends);
 });

 
 app.post('/api/clear', function(req, res) {
     friends = [];

     console.log(friends);
 });

};