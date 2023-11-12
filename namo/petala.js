const rainContainer = document.querySelector('.rain');

function createRaindrop() {
    const raindrop = document.createElement('img');
    raindrop.src = 'https://www.pngmart.com/files/6/Heart-Love-Transparent-Background.png';
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = (Math.random() * 3 + 1) + 's';
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 5000);
}

setInterval(createRaindrop, 200);
