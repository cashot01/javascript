let valores = [1, 4, 5, 7, 3, 6]
console.log(valores)
valores.sort()
//console.log(valores)
/*for(let pos=0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem valor ${valores[pos]}`)
} */
for(let pos in valores) {
    console.log(`a posição ${pos} tem valor ${valores[pos]}`)
}