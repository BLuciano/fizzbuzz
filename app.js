$(document).ready(function(){
	var count = 100, curr ="";
	for(var i = 1; i <= count; i++){
		if(!(i % 3)){ 
			curr = "Fizz";
		}
		if(!(i % 5)){
			curr += "Buzz";
		}
		if(!curr){
			curr = i;
		}
		$('body').append(curr + "<br/>");
		curr = "";
	}
});