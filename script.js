// FUNCION PARA REPRODUCIR TECLAS
const playSound = (e) => {
    
    // almacenamos el elemento audio con el atributo "data-key = <tecla presionada>"
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Si hay un tecla del piano con la clase "key" y el atributo "data-key=<tecla presionada>, lo almacenamos"
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    const divNotaMusical = document.querySelector('#nota-musical');
    
    // Si no hay un elemento audio con la el data-key de la tecla presionada paramos la funcion.
    if(!audio){return};
    // Seteamos el tiempo de reproduccion a cero para cuando queramos presionar la tecla mas de una vez.
    audio.currentTime = 0;

    //reproducimos el elemento audio
    audio.play();

    // insertamos el dataset "note" en el div para mostrar la nota musical
    divNotaMusical.innerText=key.dataset.note;

    // si llegamos hasta aquí significa que sí hay una tecla del piano con el data-key con el mismo valor que la tecla presionada
    // agregamos la clase activate a la tecla del piano presionada 
    key.classList.add('activate');

}

const removeActivateClass = (e) => {
    if(e.propertyName !== 'transform') {return}
    
    e.target.classList.remove('activate');
}


const teclas = document.querySelectorAll('.key');
teclas.forEach((tecla) => {
    tecla.addEventListener('transitionend', removeActivateClass)
})


document.addEventListener('keydown', playSound);

