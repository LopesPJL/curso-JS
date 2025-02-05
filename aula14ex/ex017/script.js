function Contar() {
    var ta = document.getElementById('txtt')
    var res = document.getElementById('res')

    if (ta.value.length == 0){
        res.innerHTML = 'Impossível contar'
        window.alert('Error')
    } else {
        var t = Number(ta.value)

        var c = t 
        while(c <= 10) {
            console.log(c * 1)

        }
    }
}