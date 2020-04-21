const balloon = document.getElementById('balloon')

const inflate = (event) => {
    if(event.keyCode === 73) {
        style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        balloon.style.fontSize = (currentSize + 10) + 'px';
}
    
}

const deflate = (event) => {
    if(event.keyCode === 68) {
        style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        balloon.style.fontSize = (currentSize - 10) + 'px';
    }
    
}

const pop = (event) => {
    if(balloon.style.fontSize = "60px") {
        balloon.innerHTML = "O";
    }
}

document.addEventListener('keyup', inflate)
document.addEventListener('keyup', deflate)
document.removeEventListener('keyup', pop)