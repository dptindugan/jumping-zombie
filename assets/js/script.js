
let playerPosition = 0
let bulletPosition = 1000
let yZombie = 0
let yBullet = 0
let score = 0
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
		yZombie = 100
	}
})	

$("html").keyup(function(e){
	if (e.which == 38 ) {
		sprite.player.animate({
			"bottom" : "0"
		})
		yZombie=0
	}
})	

$("html").keydown(function(e){
	if (e.which == 37 ) {
		sprite.player.animate({
			"left" : (playerPosition -= 50) + "px"
		})
	}
})

$("html").keydown(function(e){
	if (e.which == 39 ) {
		sprite.player.animate({
			"left" : (playerPosition += 50) + "px"
		})
	}
})	

$("#start").click(function(){
	$(this).toggle()
	bullAnimate()
	scoring()

})

function scoring(){
	score++
	$("#score").html(score)
	setTimeout(scoring, 200)

}

function bullAnimate(){
	// if(gameOver == true){
	// 	return
	// }

	if(bulletPosition == 0){
		uh()
		bulletPosition = 1000
		setTimeout(uh, 500)
		bullAnimate()
		return
	}

	bulletSprite.bull.animate({
	"left" : (bulletPosition -= 100) + "px"
	})
	gameOver()
	setTimeout(bullAnimate, 450)
}

function uh(){
	$("#bullet").toggle()
}


function gameOver(){
	if(playerPosition == bulletPosition && yZombie == yBullet){
		$("#start").toggle()
		alert("game over!!")
		return true
	}
}