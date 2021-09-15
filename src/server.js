const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/* Inicializacion */
const app = express();

//configuracion de servidor
app.set('web', 'desarrolloUMG');
app.set('port', process.env.PORT || 5010)

//Middlewares 
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require('./database.js');

//APIs



//start
app.listen(app.get('port'), () => console.log('Server is running on port: ' + app.get('port')));

app.get('/', function (rect, res) {
    res.send('HOLAAAAA');
});