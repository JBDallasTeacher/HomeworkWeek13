var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // friends from friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });


    app.post("/api/friends", function (req, res) {

        var activeUser = req.body;

        for (var i = 0; i < activeUser.scores.length; i++) {
            activeUser.scores[i] = parseInt(activeUser.scores[i]);
        }

        var lowerMatchScore = 0;
        var maxMatchScore = 40;

        for (var i = 0; i < friendsData.length; i++) {
            compatibilityIndex = 0;

            for (var j = 0; j < activeUser.scores.lenght; j++) {
                var comparingFriends = math.abs(activeUser.scores[j] - friends[i].scores[j]);
                compatibilityIndex += comparingFriends;
            }

            if (compatibilityIndex < maxMatchScore) {
                friendMatchIndex = i;
                MaxMatchScore = compatibilityIndex;
            }
        }

        friendsData.push(activeUser);

        res.json(friendsData[friendMatchIndex]);

    });
};

