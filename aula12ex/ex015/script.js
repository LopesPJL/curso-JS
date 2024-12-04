function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length ==0 || fano.value > ano){
        window.alert('Verificque os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-crianca-m.png')
        } else if (idade < 21) {
            //jovem 
            img.setAttribute('src', 'foto-joven-m.png')
        } else if (idade < 50) {
            //aduto
            img.setAttribute('src', 'foto-aduto-m.png')
        } else {
            //idoso 
            img.setAttribute('src', 'foto-idoso-m.png')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança 
            img.setAttribute('src', 'foto-crianca-f.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-joven-f.png')
        } else if (idade < 50) {
            //aduto 
            img.setAttribute('src', 'foto-aduto-f.png')
        } else {
            //idoso 
            img.setAttribute('src', 'foto-idosa-f.png')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}