function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    // Улучшенная адаптация под мобильные
    const screenWidth = window.innerWidth;
    const xPos = Math.random() * screenWidth;
    heart.style.left = `${xPos}px`;

    const delay = Math.random() * 1.5; 
    heart.style.animationDelay = `${delay}s`;

    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); 
}


setInterval(createHeart, 250);
