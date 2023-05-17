const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html', require("ejs").renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('viewa',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    console.log(req.query);

    if(req.query.busca== null){
        res.send('home');
    }else{
        res.send('busca'+req.query.busca);
    }
})

app.listen(8000,()=>{
    console.log('server rodando porta 8000!');
})