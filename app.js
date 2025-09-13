//permite agregar nombres (validacion de ingreso de datos)
let amigos = [];

function agregarAmigo() {
    let input = document.querySelector("#amigoNombre").value;
    // validacion
    if (input.trim() === "") {
        alert("ingrese un nombre valido..");
    } else if (amigos.length >= 5) {
        alert('no puede ingresar mas amigos');
    } else {
        amigos.push(input); // agrega al array los nombres ingresados por el usuario
        let mostrarlista = document.getElementById('listaAmigos');
        mostrarlista.innerHTML = " Lista de amigos:" + ('<br>') + amigos.map(amigo => `<li>${amigo}</li>`).join('');
        limpiarInput();
    }

}
function limpiarInput() {
    let limpiar = document.querySelector('#amigoNombre');
    limpiar.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return null;
    } else {
        let amixElegido = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[amixElegido];
        document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
        return amigoSorteado;
    }
}


