function calcular(){
    var num = document.getElementById('num')
    var tab = document.getElementById('itabuada')
 
    if(num.value.length ==0){
    window.alert ('Erro tente novamente')
   
 }else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML=""
    while(c <= 10 ){
      let item = document.createElement('option')
      let mul = c * n
      item.text = `${n} X ${c} = ${mul}`
      tab.appendChild(item)
      c++

    } 
  }
}
