
function play(){
    let numberOne = Math.floor(Math.random()*6) + 1;
    let numberTwo = Math.floor(Math.random()*6) + 1;

    document.querySelector(".img1").setAttribute("src", `images/dice${numberOne}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${numberTwo}.png`);

    if(numberOne === numberTwo){
        document.querySelector("h1").innerText = "It's a Draw!";
    }
    else if(numberOne > numberTwo){
        document.querySelector("h1").innerText = "🏆 Player 1 Wins!";
    }
    else{
        document.querySelector("h1").innerText = "Player 2 Wins! 🏆"
    }
    setTimeout(function() {
        location.reload();
    }, 3000);
}