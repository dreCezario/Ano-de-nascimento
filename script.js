let opcoes 

for (contador = 1900; contador <= 2022; contador++) {
    opcoes = opcoes + `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes