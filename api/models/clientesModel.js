
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clientesSchema = new Schema({
  DNI: {
    type: Number,
    required: 'Ingrese DNI'
  },
  TotalAhorro: {
    type: Number,
    default: 0
  },
  TotalDeuda: {
    type: Number,
    default: 0
  },
  Ahorros: {
    ACa: {
      type: Number,
      default: 0
    },
    ACc: {
      type: Number,
      default: 0
    },
    ATarjetas: {
      type: Number,
      default: 0
    },
  },
  Deudas: {
    DCa: {
      type: Number,
      default: 0
    },
    DCc: {
      type: Number,
      default: 0
    },
    DTarjetas: {
      type: Number,
      default: 0
    },
  }
});

module.exports = mongoose.model('Clientes', clientesSchema);