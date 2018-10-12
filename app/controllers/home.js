module.exports.index = function(application, req, res){

    var connection = application.config.dbConnection();
    
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.get5UltimasNoticias(function(error, result){
        if(error){
            console.log(error);
        }else{
            console.log(result);
            res.render('home/index', {noticias: result});
        }
    })

}