/*
- Elgatha Lee
- Duel III
- December 11, 2014
*/
document.addEventListener('DOMContentLoaded', function(){
	
	var playerArray = [
		{
			name: 'Kratos',
			health: 100,
			damage: 50,
			DOMContainer: document.querySelectorAll('#kratos p')[0]
		},
		{
			name: 'Kabal',
			health: 100,
			damage: 50,
			DOMContainer: document.querySelectorAll('#kabal p')[0]
		}
	];

	var fightStatus = {
		rounds: 10,
		currentRound: 0,
		gameOver: false,
		winner: false
	}

	function updateInterface(){
		var roundContainer = document.getElementById('round');
		for(var i = 0; i < playerArray.length; i++){
			playerArray[i].DOMContainer.innerHTML = '<h4>'+playerArray[i].name+'</h4>'+'<span>'+playerArray[i].health+'</span>';
		}

		winnerCheck();

		if(fightStatus.gameOver){
			roundContainer.innerHTML = (fightStatus.winner) ? fightStatus.winner : "Players Tied!";
		}else if(fightStatus.currentRound > 0){
			roundContainer.innerHTML = "Round "+fightStatus.currentRound;
		}else{
			roundContainer.innerHTML = "Click To Start Fight";
		}
	}

	function fight(){
		if(!fightStatus.gameOver){
			fightStatus.currentRound++;
			playerArray[0].health -= Math.floor(Math.random() * (playerArray[1].damage - (playerArray[1].damage/2)) + (playerArray[1].damage/2));
			playerArray[1].health -= Math.floor(Math.random() * (playerArray[0].damage - (playerArray[0].damage/2)) + (playerArray[0].damage/2));
			updateInterface();
		}
	}

	function winnerCheck(){
		if(fightStatus.rounds == fightStatus.currentRound){
			fightStatus.gameOver = true;
			if(playerArray[0].health <= 0 && playerArray[1].health <=0){
				fightStatus.winner = "Both Players Die!";
			}else if(playerArray[0].health != playerArray[1].health){
				fightStatus.winner = (playerArray[0].health > playerArray[1].health) ? playerArray[0].name : playerArray[1].name;
				fightStatus.winner += " Wins!!";
			}
		}else{
			if(playerArray[0].health <= 0 && playerArray[1].health <=0){
				fightStatus.gameOver = true;
				fightStatus.winner = "Both Players Die!";
			}else if(playerArray[0].health <= 0 || playerArray[1].health <= 0){
				fightStatus.gameOver = true;
				fightStatus.winner = (playerArray[0].health > playerArray[1].health) ? playerArray[0].name : playerArray[1].name;
				fightStatus.winner += " Wins!!";
			}
		}
	}

	document.querySelector('#fight_btn a').addEventListener('click', fight);

	updateInterface();

});