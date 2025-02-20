var valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
/*
for(var pos=0; pos < valores.length; pos++) {
    valores.sort()
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}