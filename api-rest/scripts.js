const API = 'https://swapi.dev/api/people/'

function personaje(texto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    let h_2texto = document.createTextNode(texto.height)
    let h2 = document.createElement('h2')
    h1.appendChild(h1_texto)
    h1.style.color = "yellow"
    h1.style.fontSize = "24px"
    div.appendChild(h1)
    h2.appendChild(h_2texto)
    h2.style.color = "green"
    h2.style.fontSize = "18px"
    div.appendChild(h2)
    let contenedor = document.getElementById('contenedor')
    contenedor.style.backgroundColor = "black"
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return personaje( await response.json() )
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}

for (let i=1; i<=80; i++) {
    obtener_personaje(i)
}
