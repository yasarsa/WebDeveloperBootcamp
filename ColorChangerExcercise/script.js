var button = document.querySelector("button");
var body = document.querySelector("body");
var isClicked=false;
button.addEventListener("click", function(){
	if(isClicked===false){
		body.style.background = "purple";
		isClicked = true;
	}else{
		body.style.background = "white";
		isClicked = false;
	}
});