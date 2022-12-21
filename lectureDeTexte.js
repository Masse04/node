var fs = require('fs') ;
// Création d'un fichier texte
fs.writeFile('welcome.txt','Hello Node', error => {
    if(error)
    console.error(error);
    console.log('fichier créé !!!');
});
/*
fs.appendFile('welcome.txt','Hello Node', error => {
    if(error)
    console.error(error);
    console.log('fichier créé !!!');
})
*/
fs.readFile('hello.txt',(error,data)=> {
    if(error)
    console.error(error);
    console.log(data.toString()) ;
})