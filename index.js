const ex = require('express')
const enderecos = require('./services/enderecos.js')
const usuario = require('./services/usuario.js')

const app= ex()
const port=8080

app.use(ex.json())

app.listen(port, ()=>{console.log(`start: http://localhost:${port}`);})

app.get('/',(req, res)=>{
  res.send('Teste Back-end iniciado')
})

// serviços
usuario(app)
enderecos(app)