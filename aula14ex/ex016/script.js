function Contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('txtres')
    
    var con = ini  
    while(fim <= passo){
        passo ++
    }

    res.innerHTML = `Contando 
    ${con}`
}