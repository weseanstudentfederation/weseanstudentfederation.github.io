function animateLoader() {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    let width = 0;
    let interval = setInterval(() => {
        width++;
        progressBar.style.width = width + '%';
        progressText.textContent = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            showWelcomeScreen();
        }
    }, 30); // Adjust speed of animation here
}

function showWelcomeScreen() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    welcomeScreen.classList.remove('hidden');
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 5000); // Show welcome screen for 5 seconds
}

function createFloatingElements() {
    const elementsContainer = document.getElementById('floating-elements');
    const items = ['book.png', 'pen.png', ]; // Add paths to icons or images
    for (let i = 0; i < 30; i++) {
        let item = document.createElement('div');
        item.classList.add('floating-item');
        item.style.backgroundImage = `url('${items[Math.floor(Math.random() * items.length)]}')`;
        item.style.left = `${Math.floor(Math.random() * 100)}vw`;
        item.style.animationDuration = `${Math.floor(Math.random() * (15 - 8) + 8)}s`;
        item.style.animationDelay = `-${Math.floor(Math.random() * 8)}s`;
        item.style.animationTimingFunction = `cubic-bezier(${Math.random() * 1}, ${Math.random() * 1}, ${Math.random() * 1}, ${Math.random() * 1})`;
        item.style.animationName = 'float';
        elementsContainer.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    animateLoader();
    createFloatingElements();
});
