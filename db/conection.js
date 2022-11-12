const mysql = require('mysql2')

const con = mysql.createConnection({
  host:"localhost",
  user:"rodrigo",
  password:"123456",
  database:"testebackend",
})

con.connect((err)=>{
  if (err){console.log(err.code)}
  else{console.log("conected")}
})

async function getSQL(params) {
  await con.connect((err)=>{
    if (err) throw err;

    con.query(`select * from ${params}` , (err,result,fields)=>{
      if(err) throw err;
      console.log(result);
      return result
    })
  })
}

function postSQL_usuario(nome,sobrenome,email,telefone,cpf) {
  con.connect((err)=>{
  if (err) throw err;

  con.query(
    `insert into usuarios (nome,sobrenome,email,telefone,cpf) value ("${nome}","${sobrenome}","${email}","${telefone}","${cpf}")` 
    , (err,result,fields)=>{
      if(err) throw err;
      console.log("add-user 1\n"+result);
      return result
    })
  })
}

function postSQL_endereco(id_usuarios,logradouro,numero,cidade,uf,cep,bairro,complemento) {
  con.connect((err)=>{
  if (err) throw err;

  con.query(
    `insert into enderecos_usuarios (id_usuarios,logradouro,numero,cidade,uf,cep,bairro,complemento) 
    value ("${id_usuarios}","${logradouro}","${numero}","${cidade}","${uf}","${cep}","${bairro}","${complemento}")` 
    , (err,result,fields)=>{
      if(err) throw err;
      console.log("add-endereco 1\n"+result);
      return result
    })
  })
}

function putSQL_usuario(id,nome,sobrenome,email,telefone,cpf) {
  con.connect((err)=>{
    if (err) throw err;
  
    con.query(
      `update usuarios
      set nome="${nome}",sobrenome="${sobrenome}",email="${email}",telefone="${telefone}",cpf="${cpf}"
      where ${id};` 
      , (err,result,fields)=>{
        if(err) throw err;
        console.log("update\n"+result);
        return result
      })
    })
}

function putSQL_endereco(id,id_usuarios,logradouro,numero,cidade,uf,cep,bairro,complemento) {
  con.connect((err)=>{
    if (err) throw err;
  
    con.query(
      `update enderecos_usuarios 
      set id_usuarios=${id_usuarios},logradouro="${logradouro}",numero="${numero}",cidade="${cidade}",uf="${uf}",cep="${cep}",bairro="${bairro}",complemento="${complemento}"
      where ${id};` 
      , (err,result,fields)=>{
        if(err) throw err;
        console.log("update\n"+result);
        return result
      })
    })
}

function delSQL(table,id) {
  con.connect((err)=>{
    if (err) throw err;
  
    con.query(
      `delete from ${table} where ${id}` 
      , (err,result,fields)=>{
        if(err) throw err;
        console.log("deleted\n"+result);
        return result
      })
    })
}

module.exports = {
  getSQL,
  postSQL_usuario,
  postSQL_endereco,
  putSQL_usuario,
  putSQL_endereco,
  delSQL
}