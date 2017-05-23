//$(document).ready(function(){

var game = {
		crystalValueArray: [],
		targetScore: 0,
		userScore: 0,
		numWins: 0,
		numLosses: 0,


		randomTargetScore: function() {
			game.targetScore = Math.floor(Math.random() * 102) + 19;
			$("#target-score").html(game.targetScore);
		},

		randomCrystalValues: function() {
			for (var i = 0; i < 4; i++) {
				game.crystalValueArray[i] = Math.floor(Math.random() * 12) +1;
				console.log(game.crystalValueArray[i]);
				$("#crystal-" + (i+1)).val(game.crystalValueArray[i]);
				$("#crystal-" + (i+1)).html(game.crystalValueArray[i]);
			}
		},
		
		resetGame: function() {
			game.randomTargetScore();
			game.randomCrystalValues();
			game.userScore = 0;
			$("#user-score").html(game.userScore);
		},

		addCrystalValues: function() {
			$(".crystal").on("click", function() {
				game.userScore = game.userScore + parseInt($(this).val());
				$('#user-score').html(game.userScore);
				game.scoreTracker();
            });
		},

		scoreTracker: function() {
			if (game.userScore === game.targetScore) {
				game.youWin();
			}
			else if ( game.userScore > game.targetScore) {
				game.youLose();
			}
		},

		youWin: function() {
			game.resetGame();
			game.numWins ++;
			$('#wins').html(game.numWins);	
			$('#message').html("WINNER!");
		},

		youLose: function() {
			game.resetGame();
			game.numLosses ++;
			$('#losses').html(game.numLosses);
			$('#message').html("LOSER!");
		},


	};


game.resetGame();
game.addCrystalValues();




//})