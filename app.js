let gameseq = [];
let userseq = [];
let started = false;
let level = 0 ;
let btns = ["orange", "pink", "blue", "sky"];

let h3 = document.querySelector("h3");
// game start
document.addEventListener("keypress",function () {

    if (started == false) {
        console.log("game is started");
        started= true;
    }
    levelUp();
});
// level up and flash buttons 

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");    
    },250);    
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");    
    },250);    
}


function levelUp() {
  userseq = [];
  level++;
  h3.innerText = `level ${level}`;
  let ranidx = Math.floor(Math.random()*3);
  let ranclr = btns[ranidx];
  let ranbtn = document.querySelector(`.${ranclr}`);
  gameseq.push(ranclr);
  console.log(gameseq);
  gameflash(ranbtn);
}

//press button which access from html

function btnPress() {
    // console.log("button is pressed");
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    ansCheck(userseq.length - 1); 
}

let btnAll = document.querySelectorAll(".btn");
for (btn of btnAll) {
btn.addEventListener("click", btnPress);
}

function ansCheck(idx) {
   if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
        setTimeout(levelUp, 1000);
    }
   } else {
  h3.innerHTML = ` Game over! <br> your score is ${level}<br> press anykey to start game`;


  document.querySelector("body").style.background = "red";
  setTimeout(function () {
  document.querySelector("body").style.background = "white";

  }, 150);
  reset();
   }
}

function reset() {
    started= false;
    gameseq = [];
    userseq = [];
    level = 0 ;
    
}