let listaAmigos=[];

function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 
    
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo==''){
        alert('Debes colocar un nombre valido');
    } else{
        listaAmigos.push(nombreAmigo);
        mostrarLista();
    }
    limpiarCaja();
    console.log(listaAmigos);
}

function sortearAmigo(){
    console.log(listaAmigos);
    if (listaAmigos.length === 0) {
        alert("Incluye al menos un nombre antes de sortear");
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indice];
    asignarTextoElemento("#resultado", "El amigo secreto es: " + amigoSecreto);
    listaAmigos=[];
    mostrarLista();
}

