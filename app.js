const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

const dbcPersonalRouter = require('./routes/dbcPersonalRoutes');
const dbcExecRouter = require('./routes/dbcExecRoutes');

//1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
//routers

app.use('/api/v1/dbcPersonal', dbcPersonalRouter);
app.use('/api/v1/dbcExec', dbcExecRouter);

module.exports = app;
