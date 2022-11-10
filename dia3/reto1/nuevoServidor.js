const {application} = require('express');
const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send(`Petición recibida del cliente`);
    console.log(`Petición recibida del cliente`);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.status(200).json({ok:true,message:`recibido`});
});
app.get('/bye', function(req,res){
    res.status(200).json({ok:true,message:`Adios!`});
})
app.listen(3000);
