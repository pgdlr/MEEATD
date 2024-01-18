// script.js
let aguja = document.getElementById('aguja');
let velocidad = 0; // Velocidad inicial

// Función para actualizar la aguja
function actualizarVelocimetro(nuevaVelocidad) {
    velocidad = nuevaVelocidad;
    let angulo = mapearVelocidad(velocidad, 0, 100, -90, 90);
    aguja.style.transform = `rotate(${angulo}deg)`;
}

// Mapear velocidad a un ángulo
function mapearVelocidad(valor, in_min, in_max, out_min, out_max) {
    return (valor - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Actualizar la velocidad para la demostración
setInterval(() => {
    let nuevaVelocidad = Math.floor(Math.random() * 100);
    actualizarVelocimetro(nuevaVelocidad);
}, 2000);
