'use strict';


var mongoose = require('mongoose'),
Cliente = mongoose.model('Clientes');

exports.list_all_client = function(req, res) {
  Cliente.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_client = function(req, res) {
  //ok!
  var new_client = new Cliente(req.body);
  new_client.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_client = function(req, res) {
  //No funciona....
  Cliente.find ({DNI: req.params.DNI}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_client = function(req, res) {
  //No funciona....
  Cliente.findOneAndUpdate({DNI: req.params.DNI}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_client = function(req, res) {
   //No funciona....
  Cliente.remove({
    DNI: req.params.DNI
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Cliente eliminado' });
  });
};