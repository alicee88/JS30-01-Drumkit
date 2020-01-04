const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio');

document.addEventListener('keydown', playSound);


keys.forEach((key) => {
    key.addEventListener('transitionend', removeEffects);
});

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio)
        return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}

function removeEffects(e) {
    if(e.propertyName != 'transform')
        return;

    this.classList.remove('playing');
}