var mongoose = require('mongoose');
var Company = mongoose.model('Company');

exports.findAll = function (req, res) {
  Company.find({}, function (err, results) {
    if (err) {
      console.error(err);
    }

    console.log(results);

    return res.send(results);
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  Company.findOne({ _id: id }, function (err, result) {
    res.send(result);
  });
};

exports.add = function (req, res) {
  console.log('body', req.body);
  // console.log('req', req);
  Company.create(req.body, function (err, company) {
    console.log('company', company);
    if (err) {
      return console.log(err);
    } else {
      return res.send(company);
    }
  });
};

exports.update = function (req, res) {
  var id = req.params.id;
  var updates = req.body;

  Company.updateOne({ _id: id }, req.body, function (err, numberAffected) {
    if (err) {
      return console.log(err);
    }
    console.log('updated %d companies', numberAffected);

    return res.send(202);
  });
};

exports.import = function (req, res) {
  Company.create(
    { name: 'Xerox', address: '123 Main St, Rochester NY 12345', revenue: 10000, phone: '585-555-1234' },
    { name: 'Kodak', address: '456 South St, Rochester NY 12345', revenue: 20000, phone: '585-555-5678' },
    { name: 'Google', address: '1 Moneybags Blvd, Mountain View, CA 90210', revenue: 88888, phone: '415-555-8888' },
    function (err) {
      if (err) {
        return console.log(err);
      }
      return res.send(202);
    }
  );
};
