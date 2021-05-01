const form = document.querySelector('.naming-form'),
    text = document.querySelector('.naming-text'),
    naming = document.querySelector('.js-naming'),
    youjin_box = document.querySelector('.youjin');
const Delbtn = document.createElement('button'),
    Subbtn = document.createElement('button'),
    Youjinbtn=document.createElement('button');
Subbtn.className='js-subbtn';
Delbtn.className='js-delbtn';
Youjinbtn.className='js-youjinbtn';


const Showing = 'showing',
    currentUser ='currentUser';

function askName(){
    form.classList.add(Showing);
    form.addEventListener('submit',submitName);
    Subbtn.innerText='✅';
    form.appendChild(Subbtn);
}
function submitName(event){
    event.preventDefault();
    const currentName = text.value;
    if(currentName=="조유진"){
        Youjin(currentName);
        saveName(currentName);
        return;
    }
    printName(currentName);
    saveName(currentName);
}
function printName(name){
    form.classList.remove(Showing);
    naming.classList.add(Showing);
    naming.innerHTML = `Welcome ${name}✨`;
    Delbtn.innerText = '❌';
    Delbtn.addEventListener('click',deleteName);
    naming.appendChild(Delbtn);
    
}
function deleteName(){
    naming.classList.remove(Showing);
    youjin_box.classList.remove(Showing);
    localStorage.removeItem(currentUser);
    askName();
}
function saveName(name){
    localStorage.setItem(currentUser,name);
}
function loadName(){

    const user = localStorage.getItem(currentUser);
    console.log(user)
    if(user==null){
        askName();
    }
    else if(user=='조유진'){
        Youjin(user);
    }
    else{
        printName(user);
    }
}
function Youjin(name){
    form.classList.remove(Showing);
    naming.classList.add(Showing);
    youjin_box.classList.add(Showing);
    naming.innerHTML = `토끼빠아아앙❤❤❤🧡🧡💛💚💙`;
    Delbtn.innerText = '❌';
    Delbtn.addEventListener('click',deleteName);
    naming.appendChild(Delbtn);


}

function init(){
    loadName();
}
init();