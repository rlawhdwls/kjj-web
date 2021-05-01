const clock = document.querySelector('.js-clock');
function Clock_play(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${hour<10? `0${hour}` : `${hour}`} : ${minute<10? `0${minute}` : `${minute}`} : ${seconds<10 ? `0${seconds}` : `${seconds}`}`


    clock.innerText = time;
}

function init(){
    setInterval(Clock_play,1000);
}
init();
