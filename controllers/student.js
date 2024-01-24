var Student = require("../models/student")

module.exports.dashboard = function (req, res, next) {
    res.send("Dashboard of Students.");
};

module.exports.view = function (req, res, next) {
    Student.find().exec()
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.viewOne = function (req, res, next) {
    Student.find({name: req.params.name}).exec()
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.add = function (req, res, next) {
    Student.create(req.body)
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.update = function (req, res, next) {
    Student.findOneAndUpdate({
        name: req.body.name
    }, {
        rollno: req.body.rollno
    })
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.delete = function (req, res, next) {
    Student.deleteOne({
        rollno: req.params.rollno
    })
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        return err;
    });
};
