const db = require("../models");
//const Note = require("../models/note");
const customerDB = require("../models/customer");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Customer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Customer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Customer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Customer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getNotes: function(req, res) {
    const {id} = req.params;
    const customer = customerDB.findById(id);
    console.log('customer', customer);
  },
  createNotes: function(req, res) {
   
    const newNote = new Note(req.body);
   
    newNote.customerId = req.params.id ;
    console.log(newNote);
    //save car with changes
    newNote.save();

    res.status(201).json(newNote);


  }
};
