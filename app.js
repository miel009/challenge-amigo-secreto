//permite agregar nombres (validacion de ingreso de datos)
let amigos = [];
function agregarAmigo() { 
    let input = document.querySelector("#amigoNombre").value; 
    // validacion
    if (input.trim() === "") { 
        alert("ingrese un nombre valido..");
    } else if(!input.trim() > 5) {
        alert('no puede ingresar mas amigos');
    }else{
        // logica para agregar al amigos - array
        amigos.push(input); // agrega al array los nombres ingresados por el usuario
        let mostrarlista = document.querySelector('ul');
        mostrarlista.innerHTML =  'Lista de amigos:' + ('<br>') + '<ul>' + amigos.map(amigo => `<li>${amigo}</li>`).join('') + '</ul>';
        limpiarInput();
    }

}
function limpiarInput(){
    let limpiar= document.querySelector('#amigoNombre');
    limpiar.value='';
}

