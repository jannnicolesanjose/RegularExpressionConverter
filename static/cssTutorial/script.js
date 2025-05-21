document.addEventListener("DOMContentLoaded", () => {
    const characters = ['a', 'b', '1', '0'];
    const container = document.querySelector('.floating-container');

    for (let i = 0; i < 150; i++) {
        let span = document.createElement('span');
        span.classList.add('floating');
        span.innerText = characters[Math.floor(Math.random() * characters.length)];
        span.style.left = Math.random() * window.innerWidth + 'px';
        span.style.top = Math.random() * window.innerHeight + 'px';
        span.style.animationDuration = (Math.random() * 4 + 2) + 's';
        container.appendChild(span);
    }
});