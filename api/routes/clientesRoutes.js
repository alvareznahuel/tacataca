'use strict';
module.exports = function(app) {
  var clientes = require('../controllers/clientesController');

  // todoList Routes
  app.route('/dni')
    .get(clientes.list_all_client)
    .post(clientes.create_a_client);


  app.route('/dni/:dni')
    .get(clientes.read_a_client)
    .put(clientes.update_a_client)
    .delete(clientes.delete_a_client);
};
