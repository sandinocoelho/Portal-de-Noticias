module.exports = function(application){
    application.get('/add_noticia', function(req, res){
        application.app.controllers.admin.formulario_inclusao_noticia(application, res, res);
    });

    application.post('/noticias/salvar', function(req, res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });

};