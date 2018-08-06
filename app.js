 var app = require('./config/server')

// var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaFormulario = require('./app/routes/formulario');
//rotaFormulario(app);

//var rotaHome = require('./app/routes/home');
//rotaHome(app);


app.listen(3000, function(){
    console.log("server ON");
});