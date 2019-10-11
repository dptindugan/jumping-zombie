
let playerPosition = 0
let bulletPosition = 900

const sprite = {
	player : $("#character"),
	// pos : 0
}

const bulletSprite ={
	player: $("#bullet")
}


$("html").keydown(function(e){
	console.log(e.which)
	if (e.which == 38 ) {
		sprite.player.animate({
			"bottom" : "100px"
		})
	}
	gameOver()
})	

$("html").keyup(function(e){
	if (e.which == 38 ) {
		sprite.player.animate({
			"bottom" : "0"
		})
	}
	gameOver()
})	

$("html").keydown(function(e){
	if (e.which == 37 ) {
		sprite.player.animate({
			"left" : (playerPosition -= 50) + "px"
		})
	}
	gameOver()
})

$("html").keydown(function(e){
	if (e.which == 39 ) {
		sprite.player.animate({
			"left" : (playerPosition += 50) + "px"
		})
	}
	gameOver()
})	

function gameOver(){
	if(playerPosition == bulletPosition){
		alert("Game Over")
	}
}