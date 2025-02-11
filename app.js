let Amigos = [];

function Limpiar() {
    document.querySelector('#amigo').value = ''; // Restablece el campo de entrada
}

function Agregar() {
    let inputAmigo = document.querySelector('#amigo'); // Capturar el input
    let nombre = inputAmigo.value.trim(); // Obtener el valor ingresado y eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Evita continuar si el campo está vacío
    }

    Amigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Llamar a la función que actualiza la lista en la UI
    Limpiar(); // Limpiar el campo de entrada después de agregar
}

function actualizarLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; 

    Amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("aria-label", `Amigo: ${amigo}`);
        listaAmigos.appendChild(li);
    });
}

function sortearAmigoAleatorio() {
    // Validar que haya amigos disponibles
    if (Amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Por favor, añade al menos uno.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * Amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = Amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

// Asociar el evento click al botón de añadir
document.querySelector(".button-add").addEventListener("click", Agregar);

// Asociar el evento click al botón de sortear
document.querySelector(".button-draw").addEventListener("click", sortearAmigoAleatorio);