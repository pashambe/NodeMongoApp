const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};

module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // Здесь будем создавать заметку.
    res.send('Hello')
  });
};