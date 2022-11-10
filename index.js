const ex = require('express')
const app= ex()
const port=8080

const mysql = require('mysql')
const con = mysql.createConnection({
  host:"localhost",
  user:"rodrigo",
  password:"123456",
  database:"testebackend"
})

app.listen(port, ()=>{console.log("start:  http://localhost:"+port);})

app.get('/',(req, res)=>{
  res.send('Teste Back-end iniciado')
})

con.connect((err)=>{
  if (err) throw err;
  console.log("conected");
})

function getSQL(params) {
  con.connect((err)=>{
  if (err) throw err;

  con.query(`select * from ${params}` , (err,result,fields)=>{
    if(err) throw err;
    console.log(result);
  })
})
}

//select * from usuarios where id_usuarios=1;


// GET

app.get('/usuarios',(req,res)=>{
  getSQL('usuarios')
})

app.get('/usuarios/:id',(req,res)=>{
  const id=1
  getSQL('usuarios where id_usuarios='+id)
})

app.get('/enderecos',(req,res)=>{
  getSQL('enderecos_usuarios')
})

app.get('/enderecos/:id',(req,res)=>{
  const id=1
  getSQL('enderecos_usuarios where id_endereco_usuario='+id)
})

app.get('/enderecos/usuarios/:id',(req,res)=>{
  const id=1
  getSQL('enderecos_usuarios where id_usuarios='+id)
})

//