function Noticias(connection){
    this._connection = connection;
}
Noticias.prototype.getNoticias = function( callback){
    this._connection.query('SELECT * FROM noticias order by data_n desc', callback);
}

Noticias.prototype.getNoticia = function(id, callback){
    console.log(id.id_noticia);
    this._connection.query('SELECT * FROM noticias WHERE id_noticia ='+id.id_noticia, callback);
    
}
Noticias.prototype.salvarNoticia = function(noticia, callback){    
    console.log(noticia +" salvar noticiasModel");
    this._connection.query('insert into noticias set ? ', noticia, callback);
}
Noticias.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_n desc limit 8',callback);
}
module.exports = function(){ 
    return Noticias;
}