$(document).ready(function() {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var timeRemaining = 0;
	var counter = 0;
	var i = 0;

	//define object with questions and answers


	var quiz = [
					{question: "How long was the USS Enterprise's mission supposed to last?",
					answer1:"3 years",
					answer2:"10 years",
					answer3:"5 years",
					answer4:"it was never stated",
					rightAnswer: answer3},

					{question: "Where did Captain James Kirk serve before the USS Enterprise?",
					answer1:"USS Farragut",
					answer2:"USS Summit",
					answer3:"USS Republic",
					answer4:"USS Defiant",
					rightAnswer: answer1},

					{question: "Scotty was played by James Doohan. What country is James orinally from?",
					answer1:"Australia",
					answer2:"The United States",
					answer3:"Scotland",
					answer4:"Canada",
					rightAnswer: answer4},


					{question: "Amanda Grayson, Spocks mother, was very fond of one author.  Who was her favorite writer?",
					answer1:"Lewis Carroll",
					answer2:"Ernest Hemmingway",
					answer3:"Jack London",
					answer4:"William Shakespeare",
					rightAnswer: answer1},


					{question:"The original Star Trek took place over how many years?",
					answer1:"1",
					answer2:"5",
					answer3:"3",
					answer4:"10",
					rightAnswer: answer3},


					{question:"What does Kirk call McCoy?",
					answer1:"Mac",
					answer2:"Doc",
					answer3:"Jay",
					answer4:"Bones",
					rightAnswer: answer4},


					{question:"Which state is the birthplace of James T. Kirk?",
					answer1:"Arizona",
					answer2:"Iowa",
					answer3:"Maine",
					answer4:"New Jersey",
					rightAnswer: answer2},

					{question:"One of the members of the crew was chief communications officer Uhura.  Her name comes from the swahili word 'uhuru'.  What does it mean?",
					answer1:"Star",
					answer2:"Hope",
					answer3:"Peace",
					answer4:"Freedom",
					rightAnswer: answer4},


					{question:"What does the T in James T. Kirk stand for?",
					answer1:"Thomas",
					answer2:"Terrence",
					answer3:"Tiberius",
					answer4:"Timothy",
					rightAnswer: answer3}

				]							

	console.log(quiz[i].question);
	//define popsum
	function popsum() {
		$('#correct').text = "Correct: " + correct;
		$('#incorrect').text = "Incorrect: " + incorrect;
		$('#unanswered').text = "Unanswered: " + unanswered;

		//create start over button
	}

	


	//define popques function
	 function popQues() {
		if (counter < 5) {
			//populate question and answers on screen
			$('#question').text = quiz[i].question;
			$('#answer1').text = quiz[i].answer1;
			$('#answer2').text = quiz[i].answer2;
			$('#answer3').text = quiz[i].answer3;
			$('#answer4').text = quiz[i].answer4;

			i++
			counter++;
			console.log(counter)
			console.log(i); 

		} else{ //populate summary info

			popsum()
			
			} 
	}

	//define decrement function
	function decrement(){
            timeRemaining--;
            $('#o-time-remaining').text('Time Remaining: ' + number);
             if (timeRemaining === 0){
                  
                unanswered++
                popsum();
             }

	}

	//define timer function
		 function timer() {
		 	countdown = setInterval(decrement, 1000);
		}


	$("#startButton").on("click", function() {
		//move questions and answers to page
		 popQues();
		 timer();
	});


	//define onclick functions for answers

	//create onclick function for start over
});
