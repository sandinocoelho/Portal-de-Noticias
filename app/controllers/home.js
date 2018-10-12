module.exports.index = function(application, req, res){
    console.log('teste')

    var connection = application.config.dbConnection();
    
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    console.log('teste')
    noticiasModel.get5UltimasNoticias(function(error, result){
        console.log('teste')
        if(error){
            console.log(error);
        }else{
            console.log(result);
            console.log('teste');
            //res.render('home/index');
        }
    })

}