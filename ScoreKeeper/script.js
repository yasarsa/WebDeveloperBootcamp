var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var playingToDisplay = document.getElementById("playingToDisplay");
var gameOver = false;
//var winningScore = playingToDisplay.textContent;
var winningScore = 5;


var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}	
});

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function(){
	playingToDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();

});

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}