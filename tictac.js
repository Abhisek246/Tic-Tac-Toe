let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let winnerBox = document.querySelector('.win-container');
let msg = document.querySelector('#winner');
let newBtn = document.querySelector('#new-btn');

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        console.log('button was clicked');
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});


const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
            }
        }    
    }
}


const showWinner = (winner) =>{
    winnerBox.classList.remove('hide');
    msg.innerText = `Congratulations, winner is ${winner}`;
    disableBtn();
}


const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const resetGame = ()=>{
    winnerBox.classList.add('hide');
    
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
    }
}



newBtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);
