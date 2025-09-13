//permite agregar nombres (validacion de ingreso de datos)
let amigos = [];

function agregarAmigo() {
    let input = document.querySelector("#amigoNombre").value;
    // validacion
    if (input.trim() === "") {
        alert("ingrese un nombre valido..");
    } else if (amigos.length >= 5 ) {
        alert('no puede ingresar mas amigos');    
    } else {
        //limpiamos resultado antes de volver a jugar 
        document.getElementById('resultado').innerHTML = '';
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
    } else if (amigos.length === 1 ) {
        alert('Debe ingresar mas de 1 amigo');
    } else {
        let amixElegido = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[amixElegido];
        document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
        limpiarlista();
        return amigoSorteado;
    }
}
  
function limpiarlista(){
    amigos = [];
        //vaciamos el array y luego limpiamos la lista 
        document.getElementById('listaAmigos').innerHTML = "Amigo sorteado:";

}

