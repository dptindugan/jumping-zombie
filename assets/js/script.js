
let playerPosition = 0
let bulletPosition = 100;
let yZombie = 0
let yBullet = 0
let score = 0
const sprite = {
	player : $("#character"),
	playerPosX : 0
}

const bulletSprite ={
	bull: $("#bullet"),
	bulletPosX: 0
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
		if(playerPosition != 0){
		sprite.player.animate({
			"left" : (playerPosition -= 10) + "vw"
		})
		sprite.playerPosX = playerPosition
		}
	}
})

$("html").keydown(function(e){
	if (e.which == 39 ) {
		if(playerPosition < 90){
		sprite.player.animate({
			"left" : (playerPosition += 10) + "vw"
		})
		sprite.playerPosX = playerPosition
		}
	}
})	

$("#start").click(function(){
	$(this).toggle()
	bullAnimate()
	scoring()

})

function scoring(){
	if(bulletSprite.bulletPosX == sprite.playerPosX && yZombie == yBullet){
		return
	}
	score += 10
	$("#score").html(score)
	setTimeout(scoring, 100)

}

function bullAnimate(){
	
  
	if(bulletPosition == 0){
		bulletToggle()
		bulletPosition = 100
		setTimeout(bulletToggle, 500)
	}
	bulletSprite.bull.animate({
	"left" : (bulletPosition -= 10) + "vw"
	})
	bulletSprite.bulletPosX = bulletPosition
	gameOver()
	setTimeout(bullAnimate, 450)
}

function bulletToggle(){
	$("#bullet").toggle()
}


function gameOver(){
	if(bulletSprite.bulletPosX == sprite.playerPosX && yZombie == yBullet){
		$("#start").toggle()
		alert("game over!!")
		return true;
	}
}

