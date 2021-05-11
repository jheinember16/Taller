
function cargarArchivoJSON() {

     var infoJson = [{ numero: 1, carta: "As Diamantes", cantidad: 2}, 
    { numero: 2, carta: "Dos de Diamantes", cantidad: 3 },
    { numero: 3, carta: "Tres de Diamantes", cantidad: 4 },
    { numero: 4, carta: "Cuatro de corazones", cantidad: 6 }]

    localStorage.setItem("datos", JSON.stringify(infoJson))
}




function mostrarSelect() {
    const select = document.getElementById("lista");
    for (let i = 1; i < 14; i++) {
        const lista = document.createElement("option")
         lista.textContent = i
         lista.value = i
        select.appendChild(lista)

    }
}


function llenarTabla() {
    const table = document.getElementById("table");
    const tr = document.getElementById("tr");

    let datos = localStorage.getItem("datos");

    datos = JSON.parse(datos)

    console.log(datos);

    table.innerHTML = "";
    table.appendChild(tr)
    for (let i = 0; i < datos.length; i++) {

        table.innerHTML += `<tr>
                            <td> ${datos[i].numero} </td>
                            <td> ${datos[i].carta} </td>
                            <td> ${datos[i].cantidad} </td>
                        </tr>`
    }

}

function guardarCarta() {

    const descp = document.getElementById("descripcion");    
    const lista = document.getElementById("lista");    
    var datos = localStorage.getItem("datos");

    datos = JSON.parse(datos);

    console.log(datos)

    var dato = { numero: lista.value, carta: descp.value, cantidad: '0' };
    datos.push(dato)


    localStorage.setItem("datos", JSON.stringify(datos))
    llenarTabla();
}


cargarArchivoJSON();

mostrarSelect();

llenarTabla();

function cargarCartas() {
    
    const cartas = document.getElementById("grid");

    for (let i = 1; i < 14; i++) {

        const carta = document.createElement("div")
        const img = document.createElement("img")

        carta.id = "btn-carta"
        carta.className = "btn-carta"
        carta.setAttribute("data-carta", `${i}`)
        img.className = `btn-carta carta-${i}`
        img.src = `img/${i}.png`

        carta.appendChild(img)

        cartas.appendChild(carta)
    }
}

cargarCartas();