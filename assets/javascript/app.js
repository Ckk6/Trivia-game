$(document).ready(function() {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var timeRemaining = 0;
	var counter = 0;
	var right = false;
	var i = 0;
	var countdown = 0;
	var answer ;
	var timeup = false;
	var one = 1;
	var zero = 0;

	//define object with questions and answers


	var quiz = [
					{question: "How long was the USS Enterprise's mission supposed to last?",
					answer1:"3 years",
					answer2:"10 years",
					answer3:"5 years",
					answer4:"it was never stated",
					rightAnswer: ['answer3','5 years']},

					{question: "Where did Captain James Kirk serve before the USS Enterprise?",
					answer1:"USS Farragut",
					answer2:"USS Summit",
					answer3:"USS Republic",
					answer4:"USS Defiant",
					rightAnswer: ['answer1','USS Farragut']},

					{question: "Scotty was played by James Doohan. What country is James orinally from?",
					answer1:"Australia",
					answer2:"The United States",
					answer3:"Scotland",
					answer4:"Canada",
					rightAnswer: ['answer4','Canada']},


					{question: "Amanda Grayson, Spocks mother, was very fond of one author.  Who was her favorite writer?",
					answer1:"Lewis Carroll",
					answer2:"Ernest Hemmingway",
					answer3:"Jack London",
					answer4:"William Shakespeare",
					rightAnswer: ['answer1','Lewis Carroll']},


					{question: "The original Star Trek took place over how many years?",
					answer1:"1",
					answer2:"5",
					answer3:"3",
					answer4:"10",
					rightAnswer: ['answer3','3']},


					{question:"What does Kirk call McCoy?",
					answer1:"Mac",
					answer2:"Doc",
					answer3:"Jay",
					answer4:"Bones",
					rightAnswer: ['answer4','Bones']},


					{question:"Which state is the birthplace of James T. Kirk?",
					answer1:"Arizona",
					answer2:"Iowa",
					answer3:"Maine",
					answer4:"New Jersey",
					rightAnswer: ['answer2','Iowa']},

					{question:"One of the members of the crew was chief communications officer Uhura.  Her name comes from the swahili word 'uhuru'.  What does it mean?",
					answer1:"Star",
					answer2:"Hope",
					answer3:"Peace",
					answer4:"Freedom",
					rightAnswer:['answer3','Peace']},


					{question:"What does the T in James T. Kirk stand for?",
					answer1:"Thomas",
					answer2:"Terrence",
					answer3:"Tiberius",
					answer4:"Timothy",
					rightAnswer: ['answer3','Tiberius']}

				]							

	console.log(quiz[i].question);
	console.log(quiz[i].rightAnswer[0]);
	console.log(quiz[i].rightAnswer[1]);
	//define popsum
	function popSum() {
		console.log('I am in the popsum function.');
		emptyQuest();
		console.log('I am back in popsum');
	
		$('#correct').text(correct);
		console.log('correct');
		$('#incorrect').text("Incorrect: " + incorrect);
		$('#unanswered').text("Unanswered: " + unanswered);

		//create start over button

		startOver = $('<button>').text('start over');
		startOver.attr('class', 'start-over');

		//$('#start-over-button'). append('<br><button class="btn btn-primary active start-over-button">Start Over</button><br>');
	}

	


	//define popques function
	 function popQuest() {
	 	right = false;
	 	timeRemaining = 30;
	 	console.log("i am in the popquest function");
		if (counter < 4) {
			//populate question and answers on screen
			
			$('#question').text(quiz[i].question);
			
			ans1 = $('<button>').text(quiz[i].answer1);
			ans1.attr('class', 'answer1');
			ans1.attr('font-size', '22px');


			
			ans2 = $('<button>').text(quiz[i].answer2);
			ans2.attr('class', 'answer2');
			ans2.attr('font-size', '22px');


			ans3 = $('<button>').text(quiz[i].answer3);
			ans3.attr('class', 'answer3');
			ans3.attr('font-size', '22px');

			ans4 = $('<button>').text(quiz[i].answer4);
			ans4.attr('class', 'answer4');
			ans4.attr('font-size', '22px');

			
			$('#answer1').append(ans1);
			$('#answer2').append(ans2);
			$('#answer3').append(ans3);
			$('#answer4').append(ans4);


			
			console.log(counter)
			console.log(i);
			timer();                                                          


		} else{ //populate summary info

			popSum();
			
			} 
	}

	// decrement function
	function decrement(){
            timeRemaining--;
            $('#o-time-remaining').text('Time Remaining: ' + timeRemaining);
             if (timeRemaining == 0){
                clearInterval(countdown);
                timeup = true;
                emptyQuest();
                unanswered++;
                console.log("unanswered "+ unanswered);
                $("#answer-message").text("You're out of time!!");
				$("#right-answer").text(quiz[i].rightAnswer[1]);
				i++;
				counter++;
				//trigger next question after delay
				console.log('i am now pausing for next question');
				answerpause = setTimeout(emptyAns, 5000);

            
             }
 
	}

	//timer function
		 function timer() {
		 	countdown = setInterval(decrement, 1000);

		 			}


	//empty question function
	function emptyQuest() {
		console.log('i am in emptyQuest');

		$('#question').empty();
		$('#answer1').empty();
		$('#answer2').empty();
		$('#answer3').empty();
		$('#answer4').empty();
		console.log('i am leaving emptyQuest');

		}

		function emptyAns() {
		$('#answer-message').empty();
		$('#right-answer').empty();
		popQuest();
		}



	 function endQuest(){
	 	console.log('i am in endQuest');
	 	//stop timer
	 	stop = timeRemaining;
		clearInterval(countdown);
		$('#o-time-remaining').text('Time Remaining: ' + stop);
		
		//empty page
		emptyQuest();

		//build answer page

		//determine if answer is right or wrong
		if (right == true) {
			correct++;
			//print you are right msg
			$('answer-message').text("You are absolutely correct!!");
			
		} else {
			incorrect++;
			//print incorrect msg wrong and correct answer
			$('answer-message').text("No, that's not it!!");
			//quiz[i].rightAnswer
			$('right-answer').text(quiz[i].rightAnswer[1]);
			
		}
		//print quiz[i].picture
		i++;
		counter++;

		//set time delay for popQues function
		answerpause = setTimeout(emptyAns, 5000);
	}

		
	//on click functions 
	
	$('#start-button').on('click', function() {
		console.log("start button clicked");
		//remove startbutton
		document.getElementById('start-button').style.display="none";
		//move questions and answers to page
		 popQuest();
		 
	});


	//define onclick functions for answers
			
	$('ans1').on('click', function() {
		console.log(' answer1 was clicked');
		if (quiz[i].rightAnswer[0] == 'answer1') {
			right = true
			endQuest();
		} 

		});

	$("ans2").on("click", function() {
		if (quiz[i].rightAnswer[0] == 'answer2') {
			right = true
			endQuest();
		}
	});
	$("ans3").on("click", function() {
		if (quiz[i].rightAnswer[0] == 'answer3') {
			right = true
			endQuest();
		}
	});
	$("ans4").on("click", function() {
		if (quiz[i].rightAnswer[0] == 'answer4') {
			right = true
			endQuest();
		}
	});


	//create onclick function for start over button

	$('#start-over-button').on('click', function(event) {

		//remove startbutton
		document.getElementsByClassname('start-over-button').style.display="none";
		//empty summary
		$('#correct').empty();
		$('#incorrect').empty();
		$('#unanswered').empty();
		
		//reset
		counter = 0;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		timeRemaining = 0;
		right = false;
		if (i > 4){
			i = 0

		}


		popQuest();
	});
});
