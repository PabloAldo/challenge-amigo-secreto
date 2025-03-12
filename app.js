// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value; //Obtiene el valor de campo de entrada
    if(nombreAmigo === ''){ //Valida si la entrada esta vacia
        alert("Por favor, inserte  un nombre.");
    } else{
        amigos.push(nombreAmigo);//agrega el valor al array        
        actualizaLista();          
    }
    document.getElementById('amigo').value = '';//limpia el campo de entrada
}   

//actualiza la lista de amigos en pantalla
function actualizaLista(){    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = " ";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");        
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//selecciona de manera aleatoria un amigo
function sortearAmigo(){
    if(amigos.length > 0){        
        let numIndice = Math.floor(Math.random() * amigos.length);
        console.log(numIndice);        
        let resultado = document.getElementById('resultado');
        let li = document.createElement("li");        
        li.textContent = `El amigo secreto es ${amigos[numIndice]}`;
        resultado.appendChild(li);
        inicio();       
    } else{
        alert("No ha ingresado el nombre de ningun amigo.");
        resultado.innerHTML = " ";
    }
}

//Inicio de pagina
function inicio(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = " ";
    amigos = []    
}



