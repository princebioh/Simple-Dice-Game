let player1 = Math.round(Math.random() * 5) + 1;
let player2 = Math.round(Math.random() * 5) + 1;

if(player1 > player2){
    drawImages();
    document.querySelector("#header1").textContent = "Player 1 Wins";
} else if(player2 > player1){
    drawImages();
    document.querySelector("#header1").textContent = "Player 2 Wins";
} else{
    drawImages();
    document.querySelector("#header1").textContent = "DRAW";
}

function drawImages(){
    document.querySelector(".img1").setAttribute("src", `./images/dice${player1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${player2}.png`);
}

