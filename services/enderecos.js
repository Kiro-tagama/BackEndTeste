const {getSQL,postSQL_endereco,putSQL_endereco,delSQL}= require('../db/conection')

function exibe(params) {
  return {code:200,status:"sucesso",mensagem:"Ação Realizada com sucesso",data:[params]}
}

function enderecos(app) {

  //get
  app.get('/enderecos',(req,res)=>{
    const data=JSON.stringify(getSQL('enderecos_usuarios'))
    res.send(exibe(data))
  })
  
  app.get('/enderecos/:id',(req,res)=>{
    const id= req.params.id
    const data=JSON.stringify(getSQL('enderecos_usuarios where id_endereco_usuario='+id))
    res.send(exibe(data))
  })
  
  app.get('/enderecos/usuario/:id',(req,res)=>{
    const id= req.params.id
    const data=JSON.stringify(getSQL('enderecos_usuarios where id_usuarios='+id))
    res.send(exibe(data))
  })

  //post
  app.post('/enderecos',(req,res)=>{
    const id_usuarios=req.body.id_usuarios
    const logradouro=req.body.logradouro
    const numero=req.body.numero
    const cidade=req.body.cidade
    const uf=req.body.uf
    const cep=req.body.cep
    const bairro=req.body.bairro
    const complemento=req.body.complemento
  
    postSQL_endereco(id_usuarios,logradouro,numero,cidade,uf,cep,bairro,complemento)
    res.json(`add endereço do usuario com id: ${id_usuarios}`)
  })

  //put
  app.put('/enderecos',(req,res)=>{
    const id=`id_endereco_usuario=${req.body.id}`
    const id_usuarios=req.body.id_usuarios
    const logradouro=req.body.logradouro
    const numero=req.body.numero
    const cidade=req.body.cidade
    const uf=req.body.uf
    const cep=req.body.cep
    const bairro=req.body.bairro
    const complemento=req.body.complemento
  
    putSQL_endereco(id,id_usuarios,logradouro,numero,cidade,uf,cep,bairro,complemento)
    res.json(`update endereço: ${id}`)
  })

  //del
  app.delete('/enderecos/:id',(req,res)=>{
    const id = req.params.id
    delSQL("enderecos_usuarios", `id_endereco_usuario = ${id}`)
    res.send("deleted 1")
  })
}
module.exports=enderecos
