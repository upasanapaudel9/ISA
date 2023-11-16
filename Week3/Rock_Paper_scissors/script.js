var winMsg = 'You Won!!';
var loseMsg = 'You are defeated!!';
var tieMsg = 'Its a Tie!!';
var moveList = ['Rock', 'Paper', 'Scissors'];

var moveDisplays = document.querySelectorAll(".move-display h2");
var button = document.querySelectorAll("button");
var moves = {};

var startGame = () => {
    document.getElementById('status-head').innerHTML = "ChooseMe";
    for (i = 0; i < button.length; i++) {
        button[i].removeEventListener("click", startGame);
        button[i].addEventListener("click", endGame);
        button[i].style.visibility = 'visible';
        button[i].innerHTML = moveList[i];
        button[i].style.display = 'inline-block';
    }
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'hidden';
    }
}

var randomMove = () =>{
    return Math.floor(Math.random() * 3);
}

var endGame = (event) => {
    var userMoveText = event.target.innerHTML;
    var userInput = moveList.indexOf(userMoveText);
    var computerInput = randomMove();
    var moves = calculate(userInput, computerInput);
    document.getElementById('status-head').innerHTML = moves['Message'];
    for (i = 0; i < button.length; i = i + 2) {
        button[i].style.visibility = 'hidden';
    }
    document.querySelectorAll('button')[1].innerHTML = "Click to Play Again";
    button[1].addEventListener("click", startGame);
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'visible';
    }
   
    moveDisplays[0].innerHTML = "You chose " + moveList[parseInt(moves["User"])];
    moveDisplays[1].innerHTML = "Computer chose " + moveList[parseInt(moves["Computer"])];
}

var calculate = (move1, move2) =>{
    if (move1 == move2){
        return {
            "Message" : tieMsg,
            "User": move1,
            "Computer" :move2};
    } else if (
        (move1 == "0" && move2 == "2") ||
        (move1 == "1" && move2 == "0") ||
        (move1 == "2" && move2 == "1")){
        return {
            "Message": winMsg,
            "User": move1,
            "Computer": move2
        };
    } else{
        return {
            "Message": loseMsg,
            "User": move1,
            "Computer": move2
        };
    }
}

document.addEventListener("onload", startGame());