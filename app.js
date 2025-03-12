// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    if(!nombreAmigo){ //Valida si la entrada esta vacia
        alert("Por favor, inserte  un nombre.");
        return;
    }
    amigos.push(nombreAmigo);//agrega el valor al array    
    inputAmigo.value = '';//limpia el campo de entrada
    inputAmigo.focus();    
    actualizaLista();    
}   

//actualiza la lista de amigos en pantalla
function actualizaLista(){    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = " ";
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");        
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

//selecciona de manera aleatoria un amigo
function sortearAmigo(){

    if(amigos.length > 0){        
        let numIndice = Math.floor(Math.random() * amigos.length);               
        let resultado = document.getElementById('resultado');              
        resultado.innerHTML = `El amigo secreto es ${amigos[numIndice]}`;       
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = " ";
        amigos = [] 

    } else{
        alert("No ha ingresado el nombre de ningun amigo.");
        resultado.innerHTML = " ";
    }
}



