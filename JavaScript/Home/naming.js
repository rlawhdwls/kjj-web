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
        // Youjin(currentName);
        // saveName(currentName);
        Youjin_check(currentName);
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
    Todo.classList.remove(Showing);
    localStorage.removeItem(currentUser);
    askName();
}
function saveName(name){
    localStorage.setItem(currentUser,name);
}
function loadName(){

    const user = localStorage.getItem(currentUser);
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



function Youjin_check(name){
        
    const pas = document.querySelector('.js-pas')
    const pas_box = document.querySelector('.js-pas_box');

    pas_box.classList.add(Showing);
    // form.classList.remove(Showing);
    const pas_btn = document.createElement('button');
    pas_btn.innerText='✅';
    pas_box.appendChild(pas_btn);
    pas_box.appendChild(pas);
    
    pas_box.addEventListener('submit',()=>{
        const pas_val = pas.value;
        const check_name = '조유진';
        if(pas_val == 0909){
            Youjin(name);
            saveName(name);
        }
        else{
            pas_box.classList.remove(Showing);
            askName();
        } 
    });
    
    
}
function pas_check(){

    const check_name = '조유진';
    alert(val);
    if(val == 0909){
        Youjin(ckeck_name);
        saveName(ckeck_name);
    }
    else{
        pas_box.classList.remove(Showing);
        askName();
    } 
}

function init(){
    loadName();
}
init();