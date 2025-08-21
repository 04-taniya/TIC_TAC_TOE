let boxes = document.querySelectorAll(".box")
let rebtn = document.querySelector("#r1");
let newbt = document.querySelector("#n1");
let contain_msg =document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turn_o=true;

let game=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
];

const resetgame =()=>{
    turn_o=true;
    enableboxes();
    contain_msg.classList.add("hide");
}

boxes.forEach((box) => {
       box.addEventListener("click",() =>{
    
        console.log("boxes are cliked!!")
        if(turn_o=== true)
        {
            box.innerText ="O";
            turn_o = false;
        }
            else{
                box.innerText="X";
                turn_o= true;
        }
        box.disabled= true; //this line used for next time click the button not applicable

        win();
    });
});
let disable =()=>{
    for(let box1 of boxes){
        box1.disabled=true;
    }
}
let enableboxes =()=>{
    for(let box1 of boxes){
        box1.disabled=false;
        box1.innerText="";
    }
}

const showwin =(WINNER)=>{
     msg.innerText= `Congratulations winner is ${WINNER}`;
     contain_msg.classList.remove("hide");
     disable();
}

let win=()=>
{
    for (let pattern of  game)
    {
        // console.log(pattern[0],
        //     pattern[1],
        //     pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let p1 =boxes[pattern[0]].innerText;
            let p2 = boxes[pattern[1]].innerText;
             let p3= boxes[pattern[2]].innerText;

             if(p1!="" && p2!="" && p3!="")
            {
                if(p1 === p2 && p2===p3)
                {
                    console.log("winner",p1)

                   showwin(p1);
                    
                }
            } 
    }
}
newbt.addEventListener("click", resetgame);
rebtn.addEventListener("click", resetgame);



