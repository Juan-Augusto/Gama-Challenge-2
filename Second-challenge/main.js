
const listaProdutos = require('./solucao.js');
const list = require('./solucao.js')

//map = Constrói um novo array com as condições solicitadas

//Item 1
console.log('-------------------Item 1---------------------------')
let estoquetotal = 0;

list.map(estq => {
   estoquetotal += estq.qtdEstoque
 })
 console.log(`Quantidade total de produtos: ${estoquetotal} produtos`)
 console.log('-----------------------------------------------------------------------')


//Item 2
console.log('-------------------Item 2---------------------------')
let destaques = 0;

list.map(dsq => {
  if(dsq.emDestaque==="sim"){
  destaques += dsq.qtdEstoque
  }
})
console.log(`Quantidade total de itens em destaque: ${destaques} produtos`)
console.log('-----------------------------------------------------------------------')

//Item 3
console.log('-------------------Item 3---------------------------')
let disponiveis = 0;

list.map(disp=>{
  if(disp.disponivel == "sim"){
  disponiveis += disp.qtdEstoque
  }
})
console.log(`Quantidade total de itens disponíveis: ${disponiveis}`)
console.log('-----------------------------------------------------------------------')

//Item 4
console.log('-------------------Item 4---------------------------')
let dispdest = 0;
list.map(dd =>{
  if((dd.disponivel == "sim") && (dd.emDestaque == "sim")){
    dispdest += dd.qtdEstoque
  }
})
console.log(`Quantidade de itens em destaque disponíveis: ${dispdest}`)
console.log('-----------------------------------------------------------------------')

//Item 5
console.log('-------------------Item 5---------------------------')
let sum = 0;

list.map(qtd =>{
  if(qtd.disponivel == "sim"){
    sum += (qtd.qtdEstoque*qtd.preco)
  }
})
console.log(`Valor do inventário: ${sum}`)
console.log('-----------------------------------------------------------------------')

//Item 6
console.log('-------------------Item 6---------------------------')
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
console.log('------------------Item mais caro--------------------------------')
console.log(`Produto mais caro da loja: ${list[arrayTesteMax.indexOf(maiorPreco)].descricao}`)
console.log(`Departamento: ${list[arrayTesteMax.indexOf(maiorPreco)].departamento.nomeDepto}`)
console.log(`Preço: ${maiorPreco}`)
console.log('-----------------------------------------------------------------------')
//Item 7
console.log('-------------------Item 7---------------------------')
let arrayTesteMin=[]

list.map(checkPMin =>{
  arrayTesteMin.push(checkPMin.preco)
})
let menorPreco = arrayTesteMin.reduce(function(x,y){
  return Math.min(x,y)
})
console.log('------------------Item mais barato--------------------------------')
console.log(`Produto mais barato da loja: ${list[arrayTesteMin.indexOf(menorPreco)].descricao}`)
console.log(`Departamento: ${list[arrayTesteMin.indexOf(menorPreco)].departamento.nomeDepto}`)
console.log(`Preço: ${menorPreco}`)
console.log('-----------------------------------------------------------------------')
//Item 8
console.log('-------------------Item 8---------------------------')
let arrayTesteMaxV=[]

list.map(checkPMaxV =>{
  if(checkPMaxV.disponivel =="sim"){
  arrayTesteMaxV.push(checkPMaxV.preco*checkPMaxV.qtdEstoque)
  }
})
let maiorValor = arrayTesteMaxV.reduce(function(x,y){
  return Math.max(x,y);
})
console.log('-------------------Produto mais valioso da loja-----------------------')
console.log(`Produto mais valioso da loja: ${list[arrayTesteMaxV.indexOf(maiorValor)].descricao}`)
console.log(`Preço: ${maiorValor}`)
console.log('-----------------------------------------------------------------------')
//Item 9
console.log('-------------------Item 9---------------------------')
let arrayTesteMinV=[]

list.map(checkPMinV =>{
  if(checkPMinV.disponivel =="sim"){
  arrayTesteMinV.push(checkPMinV.preco*checkPMinV.qtdEstoque)
  }
})
let menorValor = arrayTesteMinV.reduce(function(x,y){
  return Math.min(x,y);
})
console.log('--------------------Produto menos valioso da loja--------------------')
console.log(`Produto menos valioso da loja: ${list[arrayTesteMinV.indexOf(menorValor)].descricao}`)
console.log(`Preço:${menorValor}` )
console.log('-----------------------------------------------------------------------')
//Item 10
console.log('-------------------Item 10---------------------------')
let arrayTesteTM=[]
list.map(checkInvent =>{
  arrayTesteTM.push(checkInvent.preco)
})
let soma = arrayTesteTM.reduce(function(x,y){
  return x+y;
})
let TM = (soma/arrayTesteTM.length)
console.log(`Valor do ticket médio: ${TM}`)
console.log('-----------------------------------------------------------------------')
//Item 11
console.log('-------------------Item 11---------------------------') 
var listaDeptos = [];
let codDepto = 0;
  for(i=0; i<listaProdutos.length; i++){
    let produto = listaProdutos[i];
    if(produto.departamento.idDepto != codDepto){
      // console.log(`encontrei um novo departamento ${produto.departamento.nomeDepto}`)
      let itemLista = {
        nomeDepto: produto.departamento.nomeDepto,
        idDepto: produto.departamento.idDepto,
        somatoriaItens: 0
      }
      listaDeptos.push(itemLista)
      codDepto = produto.departamento.idDepto
    }
  }
  //console.log(listaDeptos)

    for(i=0; i<listaProdutos.length; i++){
      let produto = listaProdutos[i]
      for(j=0; j<listaDeptos.length; j++){
        if(produto.departamento.idDepto == listaDeptos[j].idDepto){
          listaDeptos[j].somatoriaItens+=produto.qtdEstoque 
          break
        }
      }
    }
  
  console.log(listaDeptos)
  console.log('-----------------------------------------------------------------------')
//Item 12
console.log('-------------------Item 12---------------------------')
var listaDeptos12 = [];
let codDepto12 = 0;
  for(i=0; i<listaProdutos.length; i++){
    let produto = listaProdutos[i];
    if(produto.departamento.idDepto != codDepto12){
      // console.log(`encontrei um novo departamento ${produto.departamento.nomeDepto}`)
      let itemLista12 = {
        nomeDepto: produto.departamento.nomeDepto,
        idDepto: produto.departamento.idDepto,
        somatoriaItens: 0
      }
      listaDeptos12.push(itemLista12)
      codDepto12 = produto.departamento.idDepto
    }
  }
  //console.log(listaDeptos12)

    for(i=0; i<listaProdutos.length; i++){
      let produto = listaProdutos[i]
      for(j=0; j<listaDeptos12.length; j++){
        if(produto.departamento.idDepto == listaDeptos12[j].idDepto){
          listaDeptos12[j].somatoriaItens+=(produto.qtdEstoque*produto.preco)
          break
        }
      }
    }
  
  console.log(listaDeptos12)
  console.log('-----------------------------------------------------') 
console.log('------------------------Item 13---------------------------')
var listaDeptos13 = [];
let codDepto13 = 0;
  for(i=0; i<listaProdutos.length; i++){
    let produto = listaProdutos[i];
    if(produto.departamento.idDepto != codDepto13){
      // console.log(`encontrei um novo departamento ${produto.departamento.nomeDepto}`)
      let itemLista13 = {
        nomeDepto: produto.departamento.nomeDepto,
        idDepto: produto.departamento.idDepto,
        somatoriaItens: 0
      }
      listaDeptos13.push(itemLista13)
      codDepto13 = produto.departamento.idDepto
    }
  }
  //console.log(listaDeptos13)

    for(i=0; i<listaProdutos.length; i++){
      let produto = listaProdutos[i]
      for(j=0; j<listaDeptos12.length; j++){
        if(produto.departamento.idDepto == listaDeptos13[j].idDepto){
          listaDeptos13[j].somatoriaItens+=(produto.qtdEstoque*produto.preco)
          break
        }
      }
    }
  
  console.log(listaDeptos13)
  console.log('--------------------------------------------------------------')

//Item 14
console.log('-------------------Item 14---------------------------')
var listaDeptos14 = [];
let codDepto14 = 0;
var listaDeptosteste = []
  for(i=0; i<listaProdutos.length; i++){
    let produto = listaProdutos[i];
    if(produto.departamento.idDepto != codDepto14){
      // console.log(`encontrei um novo departamento ${produto.departamento.nomeDepto}`)
      let itemLista14 = {
        nomeDepto: produto.departamento.nomeDepto,
        idDepto: produto.departamento.idDepto,
        somatoriaItens: 0
      }
      listaDeptos14.push(itemLista14)
      codDepto14 = produto.departamento.idDepto
    }
  }
  //console.log(listaDeptos14)

    for(i=0; i<listaProdutos.length; i++){
      let produto = listaProdutos[i]
      
      for(j=0; j<listaDeptos14.length; j++){
        if(produto.departamento.idDepto==listaDeptos14[j].idDepto){
          listaDeptos14[j].somatoriaItens+=(produto.preco*produto.qtdEstoque)
          break
          }
      }
    } 
    listaDeptos14.map(idDeptoT=>{
      if(idDeptoT.idDepto!=0)
    listaDeptosteste.push(idDeptoT.somatoriaItens)
    })
    let teste2 = listaDeptosteste.reduce(function(x,y){
      return Math.max(x,y)
    })
    console.log('-----------------------------------------------------------------------')

console.log(`Departamento mais valioso da loja: ${listaDeptos14[listaDeptosteste.indexOf(teste2)].nomeDepto}`)
console.log(`Valor do departamento: R$ ${teste2},00`)

//Item 15
console.log('-------------------Item 15---------------------------')
var listaDeptos15 = [];
let codDepto15 = 0;
var listaDeptosteste = []
  for(i=0; i<listaProdutos.length; i++){
    let produto = listaProdutos[i];
    if(produto.departamento.idDepto != codDepto15){
      // console.log(`encontrei um novo departamento ${produto.departamento.nomeDepto}`)
      let itemLista15 = {
        nomeDepto: produto.departamento.nomeDepto,
        idDepto: produto.departamento.idDepto,
        somatoriaItens: 0
      }
      listaDeptos15.push(itemLista15)
      codDepto15 = produto.departamento.idDepto
    }
  }
  //console.log(listaDeptos14)

    for(i=0; i<listaProdutos.length; i++){
      let produto = listaProdutos[i]
      
      for(j=0; j<listaDeptos15.length; j++){
        if(produto.departamento.idDepto==listaDeptos15[j].idDepto){
          listaDeptos15[j].somatoriaItens+=(produto.preco*produto.qtdEstoque)
          break
          }
      }
    } 
    listaDeptos15.map(idDeptoT=>{
      if(idDeptoT.idDepto!=0)
    listaDeptosteste.push(idDeptoT.somatoriaItens)
    })
    let teste3 = listaDeptosteste.reduce(function(x,y){
      return Math.min(x,y)
    })



console.log(`Departamento mais valioso da loja: ${listaDeptos15[listaDeptosteste.indexOf(teste3)].nomeDepto}`)
console.log(`Valor do departamento: R$ ${teste3},00`)
console.log('-----------------------------------------------------------------------')
