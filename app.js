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

document.addEventListener('keydown', inflate)
document.addEventListener('keydown', deflate)