function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `agora são ${hora} horas`
if (hora>= 0 && hora <12){
    // bom dia
    img.src = 'dia.jpg'
    document.body.style.background = 'yellow'
} else if (hora >= 12 && hora< 18 ) {
    //boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = 'red'
} else{
    //boa noite
    img.src = 'noite.jpg'
    document.body.style.background = 'black'
}
}