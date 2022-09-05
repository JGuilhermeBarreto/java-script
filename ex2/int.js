function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var horas = data.getHours()

msg.innerHTML=`Agarora são ${horas} horas`
if(horas >= 0 && horas < 12){
msg.innerHTML=`Agora é de Manhã ${horas} Horas`
img.src ='imagem/amanhecer.jpg'
document.body.style.backgroundColor= " #f9c261"

}else if(horas >= 12 && horas < 18){
msg.innerHTML=`Agora e de Tarde ${horas} Horas`
img.src = 'imagem/tarde.jpg'
document.body.style.backgroundColor= "#577a98"
}else{
msg.innerHTML=`Agora e de Noite ${horas} Horas` 
img.src = 'imagem/noite.jpg'
document.body.style.backgroundColor= "#2c3547"
}
}

