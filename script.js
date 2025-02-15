function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('hidden');
}

// Crear corazones animados
function crearCorazones() {
    const container = document.body;
    const numCorazones = 20;

    for (let i = 0; i < numCorazones; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(heart);
    }
}

crearCorazones();