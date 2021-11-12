var character=document.getElementById("character");
var block=document.getElementById("block");
var gameBody=document.getElementById("game");
var headBody=document.getElementById("heading");

function jump(){
    if(character.classList!="animateChar")
            character.classList.add("animateChar")
    setTimeout(
        function(){
    character.classList.remove("animateChar");
        },500);
}

function gameOver(){
    headBody.innerHTML="Please save the water drop (*_*)\nRefresh to Play Again!🏃‍♂️🏃‍♀️"
    block.style.animation="none";
    character.style.display="none";
}

var checkDead =setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<=70 && blockLeft>0 && charTop>=530){
        gameOver();
    }
    },10
    );
