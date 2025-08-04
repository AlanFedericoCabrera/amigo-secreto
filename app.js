// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosAgregar = [];

function asignarTexto (elemento, texto){
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return
}


function agregarAmigo() {
    let amigosDeUsuario = document.getElementById("amigo").value;    
    listaAmigosAgregar.push(amigosDeUsuario);

    let texto = "";
    for (let i = 0; i < listaAmigosAgregar.length; i++) {

        if (listaAmigosAgregar[i] == "") {
            // Si el campo esta vacio...
            alert("Por favor, inserte un nombre...");
            listaAmigosAgregar.pop("");
        }
        else {
            // Si ingresa un nombre: Se lo coloca uno debajo del otro.
            texto += listaAmigosAgregar[i] + "<br>"; // Realiza un salto de linea.
        }
    }
    console.log(listaAmigosAgregar);
    document.getElementById("amigo").value = "";
    return asignarTexto("#listaAmigos", texto);
}
