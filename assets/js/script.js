
let playerPosition = 0
let bulletPosition = 900
let yZombie = 0
let yBullet = 0
const sprite = {
	player : $("#character"),
	// pos : 0
}

const bulletSprite ={
	bull: $("#bullet")
}


$("html").keydown(function(e){
	console.log(e.which)
	if (e.which == 38 ) {
		sprite.player.animate({
			"bottom" : "100px"
		})
		y = 100
	}
	gameOver()
})	

$("html").keyup(function(e){
	if (e.which == 38 ) {
		sprite.player.animate({
			"bottom" : "0"
		})
		y=0
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
$("start").click(function(){
	bullAnimate()
})

function bullAnimate(){
		if(bulletPosition == 0){
			return
		}

		bulletSprite.bull.animate({
		"left" : (bulletPosition -= 50) + "px"
		})

		bullAnimate()
	}


function gameOver(){
	if(playerPosition == bulletPosition && yZombie == yBullet){
		alert("Game Over")
	}
}