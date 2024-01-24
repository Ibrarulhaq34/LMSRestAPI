var Team = require("../models/team")

module.exports.add = function (req, res, next) {
    Team.create(req.body)
    .then((team) => {
        res.json(team);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.view = function (req, res, next) {
    Team.find().sort({ lastName: 1 }).exec()
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      return err;
    });
  
};

module.exports.delete = function (req, res, next) {
    Team.deleteOne({
        teamID: req.params.teamID
    })
    .then((team) => {
        res.json(team);
    })
    .catch((err) => {
        return err;
    });
};
