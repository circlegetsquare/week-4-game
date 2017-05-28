
var game = {
		crystalValueArray: [],
		targetScore: 0,
		userScore: 0,
		numWins: 0,
		numLosses: 0,

		// crystals fade in on page load
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

		// creates random target score
		randomTargetScore: function() {
			this.targetScore = Math.floor(Math.random() * 102) + 19;
			$("#target-score").html(this.targetScore);
		},

		// creates values for the four crystals
		randomCrystalValues: function() {
			for (var i = 0; i < 4; i++) {
				this.crystalValueArray[i] = Math.floor(Math.random() * 12) +1;
				$("#crystal-" + (i+1)).val(this.crystalValueArray[i]);
				$("#crystal-" + (i+1)).html(this.crystalValueArray[i]);
			}
		},
		
		// resets game
		resetGame: function() {
			this.randomTargetScore();
			this.randomCrystalValues();
			this.userScore = 0;
			$("#user-score").html(this.userScore);
		},

		// takes value from clicked crytal and adds to user score
		addCrystalValues: function() {
			$(".crystal-img").on("click", function() {
				game.userScore = game.userScore + parseInt($(this).val());
				$("#user-score").html(game.userScore);
				game.scoreTracker();
            });

		},

		// checks to see if the current core means win, lose or play on
		scoreTracker: function() {
			if (this.userScore === this.targetScore) {
				this.youWin();
			}
			else if (this.userScore > this.targetScore) {
				this.youLose();
			}
		},

		// one a game win, resets game, adds 1 to win count, and displays win message
		youWin: function() {
			this.resetGame();
			this.numWins ++;
			$('#wins').html(this.numWins);	
			$('#message').html("WINNER!");
		},

		// one a game lose, resets game, adds 1 to loss count, and displays loss message
		youLose: function() {
			this.resetGame();
			this.numLosses ++;
			$('#losses').html(this.numLosses);
			$('#message').html("LOSER!");
		},

		// when a crystal is clicked, animation and adds crystal value
		onClickCrystal: function() {
			$(".crystal-img").on("click", function() {
        		$(this).animate({ height: "145px", width: "145px"}, 50).animate({ height: "155px", width: "155px"}, 50).animate({ height: "150px", width: "150px"}, 50);
      		});
      		this.addCrystalValues();
		},


	};

game.openAnimation();
game.resetGame();
game.onClickCrystal();

