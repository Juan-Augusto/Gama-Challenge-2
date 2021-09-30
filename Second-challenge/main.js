
const list = require('./solucao.js')

//map = Constrói um novo array com as condições solicitadas

//Item 1
let estoquetotal = 0;

list.map(estq => {
   estoquetotal += estq.qtdEstoque
 })
 console.log(estoquetotal)


//Item 2
let destaques = 0;

list.map(dsq => {
  if(dsq.emDestaque==="sim"){
  destaques += dsq.qtdEstoque
  }
})
console.log(destaques)

//Item 3
let disponiveis = 0;

list.map(disp=>{
  if(disp.disponivel == "sim"){
  disponiveis += disp.qtdEstoque
  }
})
console.log(disponiveis)

//Item 4

let dispdest = 0;
list.map(dd =>{
  if((dd.disponivel == "sim") && (dd.emDestaque == "sim")){
    dispdest += dd.qtdEstoque
  }
})
console.log(dispdest)

//Item 5
let sum = 0;

list.map(qtd =>{
  if(qtd.disponivel == "sim"){
    sum += (qtd.qtdEstoque*qtd.preco)
  }
})
console.log(sum)

//Item 6
//reduce = executa uma função múltiplas vezes
//push = adiciona elementos de um array a um novo e retorna seu comprimento atualizado 
let arrayTesteMax=[]

list.map(checkPMax =>{
  arrayTesteMax.push(checkPMax.preco)
})
let maiorPreco = arrayTesteMax.reduce(function(x,y){
  return Math.max(x,y);
}
)
console.log(list[arrayTesteMax.indexOf(maiorPreco)].descricao)
console.log(list[arrayTesteMax.indexOf(maiorPreco)].departamento.nomeDepto)
console.log(maiorPreco)

//Item 7
let arrayTesteMin=[]

list.map(checkPMin =>{
  arrayTesteMin.push(checkPMin.preco)
})
let menorPreco = arrayTesteMin.reduce(function(x,y){
  return Math.min(x,y)
})
console.log(list[arrayTesteMin.indexOf(menorPreco)].descricao)
console.log(list[arrayTesteMin.indexOf(menorPreco)].departamento.nomeDepto)
console.log(menorPreco)

//Item 8
let arrayTesteMaxV=[]

list.map(checkPMaxV =>{
  if(checkPMaxV.disponivel =="sim"){
  arrayTesteMaxV.push(checkPMaxV.preco*checkPMaxV.qtdEstoque)
  }
})
let maiorValor = arrayTesteMaxV.reduce(function(x,y){
  return Math.max(x,y);
}
)
console.log(list[arrayTesteMaxV.indexOf(maiorValor)].descricao)
console.log(maiorValor)

//Item 9
let arrayTesteMinV=[]

list.map(checkPMinV =>{
  if(checkPMinV.disponivel =="sim"){
  arrayTesteMinV.push(checkPMinV.preco*checkPMinV.qtdEstoque)
  }
})
let menorValor = arrayTesteMinV.reduce(function(x,y){
  return Math.min(x,y);
}
)
console.log(list[arrayTesteMinV.indexOf(menorValor)].descricao)
console.log(menorValor)

//Item 10
let arrayTesteTM=[]
list.map(checkInvent =>{
  arrayTesteTM.push(checkInvent.preco)
})
let soma = arrayTesteTM.reduce(function(x,y){
  return x+y;
})
let TM = (soma/arrayTesteTM.length)
console.log(TM)

//Item 11
let arrayItensDep = []
list.map(disp=>{
  if(disp.disponivel=="sim"){
  arrayItensDep.push(disp.departamento.nomeDepto)
  }let check = arrayItensDep.reduce(function(x,y){
    for(var i=0; i=arrayItensDep.length; i++){
      if(arrayItensDep[i]==arrayItensDep[i+1]){
        return i;
      }
    }
})
console.log(arrayItensDep)
console.log(check)
})

