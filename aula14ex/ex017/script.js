function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        alert('digite o numero')
    } else {
        let n = Number(num.value)
        let c =1
        tab.innerHTML = ''
       // while (c<=10){
           for(c=1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` //para ficar marcado
            tab.appendChild(item)
            //c++
        }
    }
}
