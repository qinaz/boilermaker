// say our sequelize instance is create in 'db.js'
const db = require('./server/db/db.js');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server');
const port = process.env.PORT || 3000;

db.sync() // sync our database
  .then(function () {
    console.log('db synced');
    app.listen(port, () => console.log(`server is running on port ${port}`)); // then start listening with our express server once we have synced
  });
