const ex = require('express')
const app= ex()
const port=8080

app.listen(port, ()=>{console.log("start:  http://localhost:"+port);})

app.get('/',(req, res)=>{
  res.send('Teste Back-end iniciado')
})