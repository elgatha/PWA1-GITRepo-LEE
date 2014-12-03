/*
- Elgatha Lee
- Duel 1
- Dec 1, 2014
*/

var playerOneName = 'kabal',
		playerOneHealth = 100,
		playerOneDamage = 50;

var playerTwoName = 'kratos',
		playerTwoHealth = 100,
		playerTwoDamage = 50;

function fight(){
	var rounds = 10,
			outcome = false,
			current_round = 0;

	alert(playerOneName+": "+playerOneHealth+" ** START ** "+playerTwoName+": "+playerTwoHealth);
	for(var i = 0; i < rounds; i++){
		current_round = i+1;
		playerOneHealth -= Math.floor(Math.random() * (playerTwoDamage - (playerTwoDamage/2)) + (playerTwoDamage/2));
		playerTwoHealth -= Math.floor(Math.random() * (playerOneDamage - (playerOneDamage/2)) + (playerOneDamage/2));
		outcome = winnerCheck(rounds, current_round);
		if(outcome.game_over){
			break;
		}else{
			alert(playerOneName+": "+playerOneHealth+" ** ROUND "+current_round+" Results ** "+playerTwoName+": "+playerTwoHealth);
		}
	}
	if(!outcome.winner){
		alert('Players Tied!');
	}else{
		alert(outcome.winner+" Wins!!");
	}
}

function winnerCheck(rounds, current_round){
	var outcome = {
		game_over: false,
		winner: false
	}
	if(rounds == current_round){
		outcome.game_over = true;
		if(playerOneHealth != playerTwoHealth){
			outcome.winner = (playerOneHealth > playerTwoHealth) ? playerOneName : playerTwoName;
		}
	}else{
		if(playerOneHealth <= 0 && playerTwoHealth <=0){
			outcome.game_over = true;
		}else if(playerOneHealth <= 0 || playerTwoHealth <= 0){
			outcome.game_over = true;
			outcome.winner = (playerOneHealth > playerTwoHealth) ? playerOneName : playerTwoName;
		}
	}
	return outcome;
}

fight();