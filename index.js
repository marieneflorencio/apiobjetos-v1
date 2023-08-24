const express = require('express')
const app = express()
const resultados = {

  pessoas: [{id:1, nome: "Marcelo"}, {id:2, nome: "João"}, {id:3, nome: "Maria"}],

  carros: [{id:1, modelo: "Fusca"}, {id:2, modelo: "Gol"}, {id:3, modelo: "Palio"}],

  animais: [{id:1, nome: "Cachorro"}, {id:2, nome: "Gato"}, {id:3, nome: "Papagaio"}]

  }

  const cache=new Map()

app.get('/pessoas', function (req, res) {
  if(cache.has("pessoas")){
    res.status(304).send(cache.get("pessoas"))
  }
  else{
    cache.set("pessoas",resultados.pessoas)
    res.send(resultados.pessoas)
  
  }


})
app.get('/carros', function (req, res) {
  if(cache.has("carros")){
    res.status(304).send(cache.get("carros"))
  }
  else{
    cache.set("carros",resultados.carros)
    res.send(resultados.carros)
  
  }
  
})



app.get('/animais', function (req, res) {
  if(cache.has("animais")){
    res.status(304).send(cache.get("animais"))
  }
  else{
    cache.set("animais",resultados.animais)
    res.send(resultados.animais)
  }  
})

app.get('/pessoas/:id', function (req, res) {
  const id=Number(req.params.id)
  res.send(resultados.pessoas.find(pessoa=>pessoa.id===id))
})
app.get('/carros/:id', function (req, res) {
  const id=Number(req.params.id)
  res.send(resultados.carros.find(carros=>carros.id===id))
})
app.get('/animais/:id', function (req, res) {
  const id=Number(req.params.id)
  res.send(resultados.animais.find(animais=>animais.id===id))
})

app.listen(80, () => {console.log('Server up.')})

