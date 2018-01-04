var Note = require('../models/note_model.js')

exports.create = function(req, res) {
  // Create and Save a new Note
  if(!req.body.content) {
      res.status(400).send({message: "Note can not be empty"});
  }
  var note = new Note({title: req.body.title || "Untitled Note", content: req.body.content});

  note.save(function(err, data) {
      console.log(data);
      if(err) {
          console.log(err);
          res.status(500).send({message: "Some error occurred while creating the Note."});
      } else {
          res.send(data);
      }
  });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Note.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(notes);
        }
    });
};