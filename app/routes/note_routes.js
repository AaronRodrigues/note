module.exports = function(app) {
  
      var notes = require('../controllers/note_controller.js');
  
      // Create a new Note
      app.post('/notes', notes.create);

      app.get('/notes', notes.findAll);
      
}  