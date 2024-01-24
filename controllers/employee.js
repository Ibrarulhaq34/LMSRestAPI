var Employee = require("../models/employee")

module.exports.add = function (req, res, next) {
    Employee.create(req.body)
    .then((employees) => {
        res.json(employees);
    })
    .catch((err) => {
        return err;
    });
};

module.exports.view = function (req, res, next) {
    Employee.find().sort({ lastName: 1 }).exec()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      return err;
    });
  
};

module.exports.viewOne = function (req, res, next) {
  Employee.find({EmployeeID: req.params.EmployeeID}).exec()
  .then((employees) => {
      res.json(employees);
  })
  .catch((err) => {
      return err;
  });
};

module.exports.update = function (req, res, next) {
  Employee.findOneAndUpdate(
    { EmployeeID: req.body.EmployeeID },
  { name: req.body.name },
  { new: true }
    )
  .then((employees) => {
      res.json(employees);
  })
  .catch((err) => {
      return err;
  });
};