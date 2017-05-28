//$(document).ready(function(){

var game = {
		crystalValueArray: [],
		targetScore: 0,
		userScore: 0,
		numWins: 0,
		numLosses: 0,


		openAnimation: function() {
			$("#crystal-1").ready(function() {
        		$("#crystal-1").animate({opacity: "0"}, 400).animate({opacity: "1"}, 1200);
      		});
			$("#crystal-2").ready(function() {
        		$("#crystal-2").animate({opacity: "0"}, 500).animate({opacity: "1"}, 1000);
      		});
			$("#crystal-3").ready(function() {
        		$("#crystal-3").animate({opacity: "0"}, 600).animate({opacity: "1"}, 1000);
      		});
			$("#crystal-4").ready(function() {
        		$("#crystal-4").animate({opacity: "0"}, 640).animate({opacity: "1"}, 1000);

      		});
		},

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
			$(".crystal-img").on("click", function() {
				game.userScore = game.userScore + parseInt($(this).val());
				$("#user-score").html(game.userScore);
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

		onClickCrystal: function() {
			$(".crystal-img").on("click", function() {
        		$(this).animate({ height: "145px", width: "145px"}, 50).animate({ height: "155px", width: "155px"}, 50).animate({ height: "150px", width: "150px"}, 50);
        		console.log("crystal click!");
      		});
      		game.addCrystalValues();
		},


	};

game.openAnimation();
game.resetGame();
game.onClickCrystal();

//$(this).animate ({opacity: "1"}).animate({ height: "160px", width: "160px"}).animate({ height: "150px", width: "150px"}).animate ({opacity: ".5"});

//})