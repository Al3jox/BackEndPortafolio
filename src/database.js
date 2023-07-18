const mongoose = require('mongoose');

//DB Local
// =====================================
URL = ('mongodb://127.0.0.1/DBPrueba');
// =====================================

// Conexión con la DB
// =====================================
// - Con true reprime de forma global y con false indica que se debe sobreescribir la consulta actual
//mongoose.set("strictQuery", true);

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Se ha realizado la conexión a la BD: ', db.connection.name))
.catch(error => console.log(error))
// =====================================


// Exportación del módulo
// ====================================
module.exports = mongoose;
// ====================================