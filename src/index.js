// Requerimientos
// ===========================================
const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');
// ===========================================

// Configuración de puerto
// ===========================================
app.set('Port', process.env.PORT || 3000);
// ===========================================



// Configuración de middlewares
// ===========================================
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors({origen : '*'})); // Se podrían especificar los metodos también. Link de info: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
// ===========================================




// Configuración de la escucha puertos
// ===========================================
app.listen(app.get('Port'), ()=>{
    console.log("El servidor está escuchando por el puerto: ", app.get('Port'));
})
// ===========================================



// Configuración de la DB
// ===========================================
require('./database');
// ===========================================



// Configuración de Rutas
// ===========================================
app.use(require('./controllers/imagenes-controller'));
app.use('/skills', require('./routes/skills-router'));
// ===========================================