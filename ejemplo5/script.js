const element = document.querySelector('img');
element.src = '../regaloImg/gift-icon.png';

function abrirRegalo(event) {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7K1G/giphy.gif';

    const mensaje = document.querySelector('h1');
    mensaje.textContent='Felicidades';
    image. removeEventListener('click', abrirRegalo);
}
    