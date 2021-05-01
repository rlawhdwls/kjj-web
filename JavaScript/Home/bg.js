
const body = document.querySelector('body');
const IMG_number = 3;

function paintImage(img_number){
    const img=new Image();
    img.src=`img/${img_number+1}.jpg`
    img.classList.add('bgImg')
    body.prepend(img);
    
}

function genRandom(){
    const number = Math.floor(Math.random() *IMG_number);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();