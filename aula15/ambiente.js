let num = [5,3,4,2,9] 
num.sort()
num.push(1)
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('valor nao encontrado')
} else{
console.log(`o valor 4 está na posição ${pos}`) 
}
