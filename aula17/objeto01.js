let amigo = {nome:'cleitin',
sexo:'M',
peso:'127', 
engordar(p=0){
    console.log(`Engordou`)
    this.peso += p
}}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)