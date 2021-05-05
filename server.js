// const express = require('express');
// //const routes = require('./routes');
// const eTracker=require('./develop/js/eTracker');
// const app = express();
// const PORT = process.env.PORT || 3001;
// const connection=require('./config/connection')

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// //app.use(routes);

// // turn on connection to db and server
// connection.createConnection({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });