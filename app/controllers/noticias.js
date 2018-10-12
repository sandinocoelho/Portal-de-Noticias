module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function(error, result){
        if(error){
            console.log(error);
        }else{
            res.render('noticias/noticias', {noticias : result});
        }
    });
};

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
        
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticia(function(error, result){
        if(error){
            console.log(error);
        }else{
            res.render('noticias/noticia', {noticia : result});
        }
    });
};