// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

//Implementa una función para agregar amigos

//Implementa una función para actualizar la lista de amigos

//Implementa una función para sortear los amigos

let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombre);
    
    // Actualizar la lista de amigos en el DOM
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    input.value = '';
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista (<li>)
        let li = document.createElement('li');
        
        // Establecer el texto del <li> como el nombre del amigo
        li.textContent = amigos[i];
        
        // Agregar el <li> a la lista <ul>
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agregue al menos un amigo.');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}