
    let num = document.getElementById('inum')
    let list = document.getElementById('ilista')
    let res = document.getElementById('rest')
    let valores =[]

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function gerador(){
 if(isnumero(num.value) && !inlista(num.value, valores)){
  valores.push(Number(num.value))
  let item = document.createElement('option')
  item.text = `O valor é ${num.value}` 
  list.appendChild(item)
 }else{
    window.alert('Nao pode')
 }
 num.value =''
 num.focus()
}
 
function informacao(){
 if(valores.length == 0){
 window.alert ('lista vazia adicione valores antes de finalizar')
}else{
    let tot = valores.length
    let maior = valores[0]
     let menor = valores[0]
     for(let posc in valores){
           if(valores[posc] > maior)   
           maior =valores[posc]
           if(valores[posc] < menor)   
           menor =valores[posc]
     }
    res.innerHTML = ''
    res.innerHTML += `<p> Total de valores adicionado foi ${tot}</p>`
    res.innerHTML += `<p> O maior valor foi ${maior}</p>`
    res.innerHTML += `<p> O menor valor foi ${menor}</p>`
   }
  
    
 
}