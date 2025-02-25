let noButtonSize = 100;
let yesButtonSize = 100;
let noClickCount = 0; // Contador de clics en el botón "No"
const maxNoClicks = 12; // Número máximo de clics antes de que desaparezca el botón "No"
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Función para obtener una posición aleatoria dentro de los límites de la pantalla
function getRandomPosition() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    
    const maxX = screenWidth - buttonWidth;
    const maxY = screenHeight - buttonHeight;
    
    return {
        x: Math.max(0, Math.min(Math.random() * maxX, maxX)),
        y: Math.max(0, Math.min(Math.random() * maxY, maxY))
    };
}

noBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Incrementar el contador de clics
    noClickCount++;

    if (noClickCount >= maxNoClicks) {
        // Ocultar el botón "No" cuando se alcanza el límite de clics
        noBtn.style.display = 'none';
        return;
    }

    // Reducir tamaño del botón "No"
    noButtonSize = Math.max(noButtonSize - 10, 30);
    noBtn.style.transform = `scale(${noButtonSize/200})`;

    // Aumentar tamaño del botón "Sí"
    yesButtonSize = Math.min(yesButtonSize + 150, 10000); // ← Modifica aquí el tamaño máximo del botón "Sí"
    yesBtn.style.width = `${Math.min(yesButtonSize, window.innerWidth * 0.8)}px`; // Máximo 80% del ancho de la pantalla
    yesBtn.style.height = `${Math.min(yesButtonSize * 0.4, window.innerHeight * 0.2)}px`; // Máximo 20% de la altura de la pantalla


    // Mover el botón "No" a una posición aleatoria
    const newPos = getRandomPosition();
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newPos.x}px`;
    noBtn.style.top = `${newPos.y}px`;
});

yesBtn.addEventListener('click', () => {
    // Aquí puedes cambiar la URL a la que quieres redirigir
    window.location.href = '/love.io-main/principal.html';
});

// Asegurarse de que el botón "No" no se salga de la pantalla en caso de resize
window.addEventListener('resize', () => {
    if (noBtn.style.position === 'fixed') {
        const newPos = getRandomPosition();
        noBtn.style.left = `${newPos.x}px`;
        noBtn.style.top = `${newPos.y}px`;
    }
});
