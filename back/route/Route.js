var fs  = require("fs");
module.exports.route=function (app){

    app.get('/', function(req, res) {

        res.setHeader('Content-Type', 'text/plain');
    
        res.send('Vous êtes à l\'accueil');
    
    });
    app.get('/list', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
        try{
               var d= fs.readFileSync('./route/note.json','utf-8')
                res.send(d)
        }catch(e){
             console.log(e.stack);
        }
    
    });
    
    
    app.get('/test', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
    
        try{
                var b=fs.readFileSync('./route/test.json','utf-8')
                    res.send(b)
        }catch(z){
            console.log(z.stack);
        }
    
    });

    app.get('/personne', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
    
        try{
                var m=fs.readFileSync('./route/personne.json','utf-8')
                    res.send(m)
        }catch(n){
            console.log(n.stack);
        }
    
    });

    // if (page == '/') {

    //     res.write(' acceuil');

    // }

    // else if (page == '/list') {
    //     try{
    //         var d= fs.readFileSync('./route/note.json','utf-8')
    //         res.write(d)
    //     }catch(e){console.log(e.stack);
    //     }

    // }

    // else if (page == '/test') {

    //         try{
    //             var b=fs.readFileSync('./route/test.json','utf-8')
    //             res.write(b)
    //         }catch(z){console.log(z.stack);
    //         }
            

    // }
   
}

