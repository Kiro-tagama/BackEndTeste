const { json } = require('express')
const ex = require('express')
const mysql = require('mysql2')

const app= ex()
const port=8080

const con = mysql.createConnection({
  host:"localhost",
  user:"rodrigo",
  password:"123456",
  database:"testebackend",
})

app.listen(port, ()=>{console.log("start: http://localhost:"+port);})

app.get('/',(req, res)=>{
  res.send('Teste Back-end iniciado')
})

con.connect((err)=>{
  if (err){console.log(err.code)}
  else{console.log("conected")}
})

function getSQL(params) {
  con.connect((err)=>{
  if (err) throw err;

  con.query(`select * from ${params}` , (err,result,fields)=>{
    if(err) throw err;
    console.log(result);
    return result
  })
})
}


// GET

app.get('/usuarios',(req,res)=>{
  res.send(JSON.stringify(getSQL('usuarios')))
})

app.get('/usuarios/:id',(req,res)=>{
  const id = req.params.id
  res.send(JSON.stringify(getSQL('usuarios where id_usuarios='+id)))
})

app.get('/enderecos',(req,res)=>{
  res.send(JSON.stringify(getSQL('enderecos_usuarios')))
})

app.get('/enderecos/:id',(req,res)=>{
  const id= req.params.id
  res.send(JSON.stringify(getSQL('enderecos_usuarios where id_endereco_usuario='+id)))
})

app.get('/enderecos/usuario/:id',(req,res)=>{
  const id= req.params.id
  res.send(JSON.stringify(getSQL('enderecos_usuarios where id_usuarios='+id)))
})

// POST

// PUT

// DEL