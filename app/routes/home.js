module.exports = function(application){
    application.get('/', function(req, res){
        console.log('rota home.js')
        application.app.controllers.home.index(application, req, res);
    });
};