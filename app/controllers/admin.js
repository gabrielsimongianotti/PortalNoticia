//o controller 
module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', { validacao : {},noticia :  {} });
}
module.exports.verificar_e_salvar = function(application, req, res){
    var noticia = req.body;
        //notEmpty torna o canpo obrigatorio
        //len faz com que o campo tenha um numero maximo e minimo de linhas
        //isDate verifica as datas com o formato aaaa-mm-dd

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_n', 'Data deve ter ano, mes e dia').isDate({format: 'YYYY-MM-DD'});
        req.assert('data_n', 'Data é obrigatório').notEmpty()
        req.assert('noticias', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}