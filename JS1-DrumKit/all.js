function PlaySound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0 ;
    if(!audio)return;
    audio.play();
    key.classList.add('playing');
}

//監聽window，點擊執行PlaySound
window.addEventListener('keydown',PlaySound,false);
//監聽keys,當transitionend，remove transition
const keys=document.querySelectorAll('.key');
keys.forEach(key=>{key.addEventListener('transitionend',removeTransition,false)});
console.log(keys)
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this)
}
