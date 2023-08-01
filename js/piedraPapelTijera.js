function jugar(eleccionUsuario) {
    // Definir las opciones disponibles por medio de un Arreglo
    let opciones = ["piedra", "papel", "tijeras"];
  
    // Generar la elección aleatoria de la máquina con metodos
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  
    // Verificar el resultado del juego con condicional if
    if (eleccionUsuario === eleccionMaquina) {
      // Empate
      prompt (("Empate. Ambos eligieron " + eleccionUsuario + "."));
    } else if (
      (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
      (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
      (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
    ) {
      // El usuario gana
      prompt (("¡Ganaste! Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + "."));
    } else {
      // El usuario pierde
      prompt (("Perdiste. Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + "."));
    }

  }
// Obtener la elección del usuario
let eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

// Verificar si la elección del usuario es válida y jugar el juego
if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
  jugar(eleccionUsuario);
} else {
    prompt (("Elección inválida. Por favor, elige piedra, papel o tijeras."));
}
 
