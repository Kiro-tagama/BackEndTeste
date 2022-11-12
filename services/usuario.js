const {getSQL,postSQL_usuario,putSQL_usuario,delSQL,}= require('../db/conection')

function exibe(params) {
  return {code:200,status:"sucesso",mensagem:"Ação Realizada com sucesso",data:[params]}
}

function usuario(app) {

  // get
  app.get('/usuarios',(req,res)=>{
    const data=JSON.stringify(getSQL('usuarios'))
    res.json(exibe(data))
  })
  
  app.get('/usuarios/:id',(req,res)=>{
    const id = req.params.id
    const data=JSON.stringify(getSQL('usuarios where id_usuarios='+id))
    res.send(exibe(data))
  })

  // post
  app.post('/usuarios',(req,res)=>{
    const nome=req.body.nome
    const sobrenome=req.body.sobrenome
    const email=req.body.email
    const telefone=req.body.telefone
    const cpf=req.body.cpf
  
    postSQL_usuario(nome,sobrenome,email,telefone,cpf)
    res.json(`add ${nome}`)
  })

  //put
  app.put('/usuarios',(req,res)=>{
    const id=`id_usuarios=${req.body.id}`
    const nome=req.body.nome
    const sobrenome=req.body.sobrenome
    const email=req.body.email
    const telefone=req.body.telefone
    const cpf=req.body.cpf
  
    putSQL_usuario(id,nome,sobrenome,email,telefone,cpf)
    res.json(`update ${nome}`)
  })

  //del
  app.delete('/usuarios/:id',(req,res)=>{
    const id = req.params.id
    delSQL("usuarios", `id_usuarios = ${id}`)
    res.send("deleted 1")
  })

}
module.exports=usuario