var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        return res.json(friends);
    });


    app.post('/api/friends', function (req, res) {
        var surveyData = req.body;
        var match;
        var scoreData = [];
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var x = 0; x < friends[i].scores.length; x++) {
                var scoreDifference = Math.abs(parseInt(surveyData.scores[x]) - parseInt(friends[i].scores[x]));
                difference += scoreDifference;
            }
            scoreData.push(difference);
        };
        
        var matchIndex = scoreData.indexOf(Math.min(...scoreData));

        match = friends[matchIndex];

        friends.push(surveyData);
        res.json(match);
    });
};