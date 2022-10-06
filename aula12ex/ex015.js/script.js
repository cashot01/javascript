function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if  (fano.value.lenght == 0 || fano.value > ano) {
       alert('[erro]verifique o ano digitado ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
           var genero = "homem"
           if (idade >= 0 && idade <10){
          img.setAttribute('src', 'criançaM.jpg')
        }else if (idade<21){
           img.setAttribute('src', 'adolescenteM.jpg')
        } else if (idade <50){
           img.setAttribute('src', 'adultoM.jpg')
        }else { 
            img.setAttribute('src', 'idosoM.jpg')
         }
        } else if (fsex[1].checked) {
           var genero = "mulher"
           if (idade >= 0 && idade <10){
          //criança
          img.setAttribute('src', 'criançaF.jpg')
        }else if (idade<21){
           //jovenzinho
           img.setAttribute('src', 'adolescenteF.jpg')
        } else if (idade <50){
           //adulto
           img.setAttribute('src', 'adultoF.jpg')
        }else {
           //velhotes
           img.setAttribute('src', 'idosoF.jpg')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `voce é ${genero} de ${idade} anos`
        res.appendChild(img)

    }   
    
}
