const play = document.querySelector('#play'),
pause=document.querySelector('#pause'),
audio=document.querySelector('#audio');

play.addEventListener('click',()=>{
    console.log("play click")
    audio.play()
})
pause.addEventListener('click',()=>{
    console.log("pause click")
    audio.pause()
})
