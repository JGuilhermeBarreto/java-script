function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById("ano")
    var resultado= document.getElementById("result")
    var img = document.getElementById('foto')
   
    if(fano.value.length == 0 || fano.value > ano){
    window.alert('Erro ao verificar tente novamente')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ""
        
        if(fsex[0].checked){
            genero = 'Masculino'
            result.innerHTML=`Você é do Sexo ${genero} de Idade  ${idade} Anos`
            if(idade > 0 && idade <= 10){
             img.src = 'imagem/criançaM.jpg';
            }else if(idade < 18){
             img.src= 'imagem/adolescenteM.jpg'
            }else if(idade <50){
                img.src= 'imagem/adulto.jpg'
            }else{
                img.src='imagem/idoso.jpg'
            }
        }else if(fsex[1].checked){
            
            if(idade > 0 && idade <= 10){
                img.src = 'imagem/criançaF.jpg';
               }else if(idade < 18){
                img.src= 'imagem/adolescenteF.jpg'
               }else if(idade <50){
                   img.src= 'imagem/adulta.jpg'
               }else{
                   img.src='imagem/idosa.jpg'
               }
            genero='Feminino'    
            result.innerHTML=`Você é do Sexo ${genero} de Idade  ${idade} Anos` 
    }

    
    img.style.height='200px'
    img.style.width='200px'
}
}