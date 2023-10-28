let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","puprle"];

let level = 0;
let started = false;

let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randomIdx = Math.floor(Math.random()*3);
    let ranColor = btns[randomIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    buttonFlash(ranBtn);
    gameSeq.push(ranColor);

    console.log(randomIdx);
    console.log(ranColor);
    console.dir(ranBtn);
}

function buttonFlash(btn){
       btn.classList.add("flash");
       setTimeout( function(){
        btn.classList.remove("flash")
       },400);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
     btn.classList.remove("userFlash")
    },400);
}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    console.log(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length ){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        if(highScore<level){
            highScore = level;
            let h = document.createElement("h3");
            h.innerText = `Your HighScore is ${highScore}`;
            h1 = document.querySelector("h1");
            h1.appendChild(h);
        }
        h2.innerHTML = ` Game Over ! Your Score is <b>${level}</b> <br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },250);
        reset();

    }
}


function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}