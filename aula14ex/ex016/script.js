function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel contar'
        alert('[erro] digite os numeros')
    } else {
        res.innerHTML ='contando:  <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            alert('passo invalido, passo é menor ou igual a 0')
        }
        if (i < f) { //contagem crescente
            for(let c = i; c<= f; c+=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(let c = i; c>= f; c-= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }  if (p>f){
            alert('[erro] passo é maior que o fim ')
            res.innerHTML = 'impossivel contar '
        }
        
        }
        res.innerHTML += `\u{1f3c1}`
        
    }
    

