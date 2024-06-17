let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let message=document.querySelector(".msg-container");
let newbtn=document.querySelector(".new-btn");
let win=document.querySelector(".win");
let count=0;

let turn0=true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        count++;
    
        let isWinner = checkwinner();
    
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const showWinner = (winner) => {
    win.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
};


const checkwinner=()=>{
    for(let i of winPatterns){
        let pos1val=boxes[i[0]].innerText;
        let pos2val=boxes[i[1]].innerText;
        let pos3val=boxes[i[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
            }

        }
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const Resetgame=()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    message.classList.add("hide");
}

const gameDraw = () => {
    win.innerText = `Game was a Draw.`;
    message.classList.remove("hide");
    disableBoxes();
  };

resetbtn.addEventListener("click",Resetgame);
newbtn.addEventListener("click",Resetgame);