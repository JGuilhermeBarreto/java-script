function contagem(){
let inic = document.getElementById('iinicio')
let fim = document.getElementById('ifim')
let passo = document.getElementById('ipasso')
let res = document.getElementById('result')

if(inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
window.alert ('Erro Tente novamente')

} else {
    res.innerHTML = 'Contando: '
    let i = Number(inic.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p ==0){
        window.alert('[Erro] invalido considero Passo 1')
        p = 1
    }
    if(i < f){
      for(let z = i; z <= f; z += p ) {
      res.innerHTML += ` ${z} \u{1F449}`
     }
     res.innerHTML += `\u{1f3c1}`

    }else if (i > f){
      for(let z = i; z >= f; z -=p){
        res.innerHTML += ` ${z} \u{1F449}`
     }  
res.innerHTML += `\u{1f3c1}`  
    }
  }
}