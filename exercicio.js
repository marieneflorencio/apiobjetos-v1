const resultados = {

    pessoas: [{id:1, nome: "Marcelo"}, {id:2, nome: "João"}, {id:3, nome: "Maria"}],

    carros: [{id:1, modelo: "Fusca"}, {id:2, modelo: "Gol"}, {id:3, modelo: "Palio"}],

    animais: [{id:1, nome: "Cachorro"}, {id:2, nome: "Gato"}, {id:3, nome: "Papagaio"}]

    }

 

// 1) Fazer um servidor que devolva os dados acima, de acordo com a url acessada 35 pontos

https://localhost/pessoas

https://localhost/carros

https://localhost/animais

 

// 2) Fazer um sistema de cache que, se o valor mudar devolvo status 200 e o novo array,

// se o array for igual da ultima chamada, devolver 304 15 pontos

 

//Extra (devolver apenas um item) 5 pontos

https://localhost/pessoas/1

https://localhost/carros/2

https://localhost/animais/3