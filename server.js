const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using all the routes created
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}/`);
});
