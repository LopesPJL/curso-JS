function Contar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        res.innerHTML = 'Impossível contar'
        window.alert('Error')
    } else {
        var t = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            tab.appendChild(item) 
            c++
        }
    }
}