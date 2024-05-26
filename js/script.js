do { 
    var jugada = prompt("Ingrese su jugada: 1-piedra, 2-papel, 3-tijera");
    console.log(`Jugador: ${jugada}`);
} while (parseInt(jugada) < 1 || parseInt(jugada) > 3);

let jugadaMaquina = Math.floor(Math.random() * 3 + 1);
console.log(`Maquina: ${jugadaMaquina}`);

if (parseInt(jugada) === jugadaMaquina) {
    console.log("Empate");
} else {
    switch (parseInt(jugada)) {
        case 1:
            if (jugadaMaquina === 3) {
                console.log("Gana Jugador");
            } else {
                console.log("Gana Maquina");
            }
            break;
        case 2:
            if (jugadaMaquina === 1) {
                console.log("Gana Jugador");
            } else {
                console.log("Gana Maquina");
            }
            break;
        case 3:
            if (jugadaMaquina === 2) {
                console.log("Gana Jugador");
            } else {
                console.log("Gana Maquina");
            }
            break;
        default:
            break;
    }
}
