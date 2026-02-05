'use strict';



let score=20;
let highscore=0;

const check=document.querySelector('.check');

let number=Math.trunc(Math.random()*20+1)


check.addEventListener('click',function(){

    
    
    let guess=document.querySelector('.guess').value;
// When no guess 
    if(!guess){
        document.querySelector('.message').textContent="No Number"
    }
  // when player wins  
    else if (number==guess){

        document.querySelector('.number').textContent=number;
        document.querySelector('.message').textContent="Matched !!!"
        document.querySelector('body').style.backgroundColor='#4ec431ff';
        document.querySelector('.number').style.width='30rem'
        if(score>highscore){
            highscore=score;
        }
        document.querySelector('.highscore').textContent=highscore;
        
    }
  else if(guess !==number  ){
        if(score>1){
        document.querySelector('.message').textContent=guess>number?"Too high !":"To Low !!!";
        score--;
        document.querySelector('.score').textContent=score;
        }else{
          document.querySelector('.message').textContent="You Lost the Game !!"; 
          document.querySelector('.score').textContent=0; 
        }
     
    }

})

document.querySelector('.again').addEventListener('click',function(){

    score=20;

    number=Math.trunc(Math.random()*20+1);

    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='Start Guessing...'
    document.querySelector('.guess').value=''

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'
    guess=document.querySelector('.guess').value;
    

// When no guess 
    if(!guess){
        document.querySelector('.message').textContent="No Number"
    }
  // when player wins  
    else if (number==guess){

        document.querySelector('.number').textContent=number;
        document.querySelector('.message').textContent="Matched !!!"
        document.querySelector('body').style.backgroundColor='#4ec431ff';
        document.querySelector('.number').style.width='30rem'
        if(score>highscore){
            highscore=score;
        }
        document.querySelector('.highscore').textContent=highscore;
        
    }
  //when guess is to high  
    else if(guess !==number  ){
        if(score>1){
        document.querySelector('.message').textContent=guess>number?"Too high !":"To Low !!!";
        score--;
        document.querySelector('.score').textContent=score;
        }else{
          document.querySelector('.message').textContent="You Lost the Game !!"; 
          document.querySelector('.score').textContent=0; 
        }
     
    }

})


