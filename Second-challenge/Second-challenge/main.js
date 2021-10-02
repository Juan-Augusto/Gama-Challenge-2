
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
let arrayItensDepAdapt = []
let arrayItensDepFer = []
let arrayItensDepElet = []
let arrayItensDepAcess = []
let arrayItensDepCas = []
let arrayItensDepMoveis = []
let arrayItensDepTabeCel = []
let arrayItensDepGam = []
let arrayItensDepInfo = []
list.map(disp=>{
  if(disp.disponivel=="sim" && disp.departamento.nomeDepto =="Adaptadores"){
  arrayItensDepAdapt.push(disp.departamento.nomeDepto)
  }else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Ferramentas"){
    arrayItensDepFer.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Eletronicos"){
    arrayItensDepElet.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Acessorios"){
    arrayItensDepAcess.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Casa"){
    arrayItensDepCas.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Moveis"){
    arrayItensDepMoveis.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Tablets e Celulares"){
    arrayItensDepTabeCel.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Games"){
    arrayItensDepGam.push(disp.departamento.nomeDepto)
  }
  else if(disp.disponivel=="sim" && disp.departamento.nomeDepto=="Informatica"){
    arrayItensDepInfo.push(disp.departamento.nomeDepto)
  }
})
console.log('-----------Quantidade de itens por departamento---------------')
console.log(`${arrayItensDepAdapt[0]} - Quantidade: ${arrayItensDepAdapt.length}`)
console.log(`${arrayItensDepFer[0]} - Quantidade: ${arrayItensDepFer.length}`)
console.log(`${arrayItensDepElet[0]} - Quantidade: ${arrayItensDepElet.length}`)
console.log(`${arrayItensDepAcess[0]} - Quantidade: ${arrayItensDepAcess.length}`)
console.log(`${arrayItensDepCas[0]} - Quantidade: ${arrayItensDepCas.length}`)
console.log(`${arrayItensDepMoveis[0]} - Quantidade: ${arrayItensDepMoveis.length}`)
console.log(`${arrayItensDepTabeCel[0]} - Quantidade: ${arrayItensDepTabeCel.length}`)
console.log(`${arrayItensDepGam[0]} - Quantidade: ${arrayItensDepGam.length}`)
console.log(`${arrayItensDepInfo[0]} - Quantidade: ${arrayItensDepInfo.length}`)

//Item 12
let arrayItensDepAdapt12 = []
let sumAdapt = 0
let arrayItensDepFer12 = []
let sumFer = 0
let arrayItensDepElet12 = []
let sumElet = 0
let arrayItensDepAcess12 = []
let sumAcess = 0
let arrayItensDepCas12 = []
let sumCas = 0
let arrayItensDepMoveis12 = []
let sumMoveis = 0
let arrayItensDepTabeCel12 = []
let sumTabeCel = 0
let arrayItensDepGam12 = []
let sumGam = 0
let arrayItensDepInfo12 = []
let sumInfo = 0

list.map(disp=>{
  if(disp.departamento.nomeDepto =="Adaptadores"){
  arrayItensDepAdapt12.push(disp.departamento.nomeDepto)
    sumAdapt += (disp.preco*disp.qtdEstoque)    
  }else if(disp.departamento.nomeDepto=="Ferramentas"){
    arrayItensDepFer12.push(disp.departamento.nomeDepto)
    sumFer += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Eletronicos"){
    arrayItensDepElet12.push(disp.departamento.nomeDepto)
    sumElet += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Acessorios"){
    arrayItensDepAcess12.push(disp.departamento.nomeDepto)
    sumAcess += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Casa"){
    arrayItensDepCas12.push(disp.departamento.nomeDepto)
    sumCas += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Moveis"){
    arrayItensDepMoveis12.push(disp.departamento.nomeDepto)
    sumMoveis += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Tablets e Celulares"){
    arrayItensDepTabeCel12.push(disp.departamento.nomeDepto)
    sumTabeCel += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Games"){
    arrayItensDepGam12.push(disp.departamento.nomeDepto)
    sumGam += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Informatica"){
    arrayItensDepInfo12.push(disp.departamento.nomeDepto)
    sumInfo += (disp.preco*disp.qtdEstoque)    

  }
})
console.log('-----------Inventário de itens por departamento---------------')
console.log(`${arrayItensDepAdapt12[0]} - Inventário: ${sumAdapt}`)
console.log(`${arrayItensDepFer12[0]} - Inventário: ${sumFer}`)
console.log(`${arrayItensDepElet12[0]} - Inventário: ${sumElet}`)
console.log(`${arrayItensDepAcess12[0]} - Inventário: ${sumAcess}`)
console.log(`${arrayItensDepCas12[0]} - Inventário: ${sumCas}`)
console.log(`${arrayItensDepMoveis[0]} - Inventário: ${sumMoveis}`)
console.log(`${arrayItensDepTabeCel12[0]} - Inventário: ${sumTabeCel}`)
console.log(`${arrayItensDepGam12[0]} - Inventário: ${sumGam}`)
console.log(`${arrayItensDepInfo12[0]} - Inventário: ${sumInfo}`)

//Item 13

let arrayItensDepAdapt13 = []
let inventAdapt = 0
let arrayItensDepFer13 = []
let inventFer = 0
let arrayItensDepElet13 = []
let inventElet = 0
let arrayItensDepAcess13 = []
let inventAcess = 0
let arrayItensDepCas13 = []
let inventCas = 0
let arrayItensDepMoveis13 = []
let inventMoveis = 0
let arrayItensDepTabeCel13 = []
let inventTabeCel = 0
let arrayItensDepGam13 = []
let inventGam = 0
let arrayItensDepInfo13 = []
let inventInfo = 0

list.map(disp=>{
  if(disp.departamento.nomeDepto =="Adaptadores"){
  arrayItensDepAdapt13.push(disp.departamento.nomeDepto)
    inventAdapt += (disp.preco*disp.qtdEstoque/arrayItensDepAdapt13.length)    
  }else if(disp.departamento.nomeDepto=="Ferramentas"){
    arrayItensDepFer13.push(disp.departamento.nomeDepto)
    inventFer += (disp.preco*disp.qtdEstoque/arrayItensDepFer13.length)    
  }
  else if(disp.departamento.nomeDepto=="Eletronicos"){
    arrayItensDepElet13.push(disp.departamento.nomeDepto)
    inventElet += (disp.preco*disp.qtdEstoque/arrayItensDepElet13.length)    

  }
  else if(disp.departamento.nomeDepto=="Acessorios"){
    arrayItensDepAcess13.push(disp.departamento.nomeDepto)
    inventAcess += (disp.preco*disp.qtdEstoque/arrayItensDepAcess13.length)    

  }
  else if(disp.departamento.nomeDepto=="Casa"){
    arrayItensDepCas13.push(disp.departamento.nomeDepto)
    inventCas += (disp.preco*disp.qtdEstoque/arrayItensDepCas13.length)    

  }
  else if(disp.departamento.nomeDepto=="Moveis"){
    arrayItensDepMoveis13.push(disp.departamento.nomeDepto)
    inventMoveis += (disp.preco*disp.qtdEstoque/arrayItensDepMoveis13.length)    

  }
  else if(disp.departamento.nomeDepto=="Tablets e Celulares"){
    arrayItensDepTabeCel13.push(disp.departamento.nomeDepto)
    inventTabeCel += (disp.preco*disp.qtdEstoque/arrayItensDepTabeCel13.length)    

  }
  else if(disp.departamento.nomeDepto=="Games"){
    arrayItensDepGam13.push(disp.departamento.nomeDepto)
    inventGam += (disp.preco*disp.qtdEstoque/arrayItensDepGam13.length)    

  }
  else if(disp.departamento.nomeDepto=="Informatica"){
    arrayItensDepInfo13.push(disp.departamento.nomeDepto)
    inventInfo += (disp.preco*disp.qtdEstoque/arrayItensDepInfo13.length)    
  }
})
console.log('-----------Valor do Ticket Médio por departamento---------------')
console.log(`${arrayItensDepAdapt13[0]} - TM: ${inventAdapt}`)
console.log(`${arrayItensDepFer13[0]} - TM: ${inventFer}`)
console.log(`${arrayItensDepElet13[0]} - TM: ${inventElet}`)
console.log(`${arrayItensDepAcess13[0]} - TM: ${inventAcess}`)
console.log(`${arrayItensDepCas13[0]} - TM: ${inventCas}`)
console.log(`${arrayItensDepMoveis[0]} - TM: ${inventMoveis}`)
console.log(`${arrayItensDepTabeCel13[0]} - TM: ${inventTabeCel}`)
console.log(`${arrayItensDepGam13[0]} - TM: ${inventGam}`)
console.log(`${arrayItensDepInfo13[0]} - TM: ${inventInfo}`)

//Item 14
let arrayItensDepAdapt14 = []
let sumAdapt14 = 0
let arrayItensDepFer14 = []
let sumFer14 = 0
let arrayItensDepElet14 = []
let sumElet14 = 0
let arrayItensDepAcess14 = []
let sumAcess14 = 0
let arrayItensDepCas14 = []
let sumCas14 = 0
let arrayItensDepMoveis14 = []
let sumMoveis14 = 0
let arrayItensDepTabeCel14 = []
let sumTabeCel14 = 0
let arrayItensDepGam14 = []
let sumGam14 = 0
let arrayItensDepInfo14 = []
let sumInfo14 = 0

list.map(disp=>{
  if(disp.departamento.nomeDepto =="Adaptadores"){
  arrayItensDepAdapt14.push(disp.departamento.nomeDepto)
    sumAdapt14 += (disp.preco*disp.qtdEstoque)    
  }else if(disp.departamento.nomeDepto=="Ferramentas"){
    arrayItensDepFer14.push(disp.departamento.nomeDepto)
    sumFer14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Eletronicos"){
    arrayItensDepElet14.push(disp.departamento.nomeDepto)
    sumElet14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Acessorios"){
    arrayItensDepAcess14.push(disp.departamento.nomeDepto)
    sumAcess14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Casa"){
    arrayItensDepCas14.push(disp.departamento.nomeDepto)
    sumCas14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Moveis"){
    arrayItensDepMoveis14.push(disp.departamento.nomeDepto)
    sumMoveis14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Tablets e Celulares"){
    arrayItensDepTabeCel14.push(disp.departamento.nomeDepto)
    sumTabeCel14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Games"){
    arrayItensDepGam14.push(disp.departamento.nomeDepto)
    sumGam14 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Informatica"){
    arrayItensDepInfo14.push(disp.departamento.nomeDepto)
    sumInfo14 += (disp.preco*disp.qtdEstoque)    

  }
})
let arrayMaxDep = [sumAdapt14, sumFer14, sumElet14, sumAcess14, sumCas14, sumMoveis14, sumTabeCel14, sumGam14, sumInfo14]
let maiorValorDep = arrayMaxDep.reduce(function(x,y){
  return Math.max(x,y);
})

console.log('-----------Departamento mais valioso---------------')
console.log(maiorValorDep)

//Item 14
let arrayItensDepAdapt15 = []
let sumAdapt15 = 0
let arrayItensDepFer15 = []
let sumFer15 = 0
let arrayItensDepElet15 = []
let sumElet15 = 0
let arrayItensDepAcess15 = []
let sumAcess15 = 0
let arrayItensDepCas15 = []
let sumCas15 = 0
let arrayItensDepMoveis15 = []
let sumMoveis15 = 0
let arrayItensDepTabeCel15 = []
let sumTabeCel15 = 0
let arrayItensDepGam15 = []
let sumGam15 = 0
let arrayItensDepInfo15 = []
let sumInfo15 = 0

list.map(disp=>{
  if(disp.departamento.nomeDepto =="Adaptadores"){
  arrayItensDepAdapt15.push(disp.departamento.nomeDepto)
    sumAdapt15 += (disp.preco*disp.qtdEstoque)    
  }else if(disp.departamento.nomeDepto=="Ferramentas"){
    arrayItensDepFer15.push(disp.departamento.nomeDepto)
    sumFer15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Eletronicos"){
    arrayItensDepElet15.push(disp.departamento.nomeDepto)
    sumElet15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Acessorios"){
    arrayItensDepAcess15.push(disp.departamento.nomeDepto)
    sumAcess15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Casa"){
    arrayItensDepCas14.push(disp.departamento.nomeDepto)
    sumCas15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Moveis"){
    arrayItensDepMoveis15.push(disp.departamento.nomeDepto)
    sumMoveis15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Tablets e Celulares"){
    arrayItensDepTabeCel15.push(disp.departamento.nomeDepto)
    sumTabeCel15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Games"){
    arrayItensDepGam15.push(disp.departamento.nomeDepto)
    sumGam15 += (disp.preco*disp.qtdEstoque)    

  }
  else if(disp.departamento.nomeDepto=="Informatica"){
    arrayItensDepInfo15.push(disp.departamento.nomeDepto)
    sumInfo15 += (disp.preco*disp.qtdEstoque)    

  }
})
let arrayMinDep = [sumAdapt15, sumFer15, sumElet15, sumAcess15, sumCas15, sumMoveis15, sumTabeCel15, sumGam15, sumInfo15]
let menorValorDep = arrayMinDep.reduce(function(x,y){
  return Math.min(x,y);
})

console.log('-----------Departamento menos valioso---------------')
console.log(menorValorDep)