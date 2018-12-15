  /*-- TRIVIA GAME -->
  <!-- ================================================================ -->
  <!-- Find the selected answer in the HTML                             -->
  <!-- Handle what happens if the answer is correct.                    -->
  <!-- Handle what happens if the answer is wrong.                      -->
  <!--                                                                  -->
  <!-- ================================================================ -->*/
  
   /* Global Variables
  ---------------------------------------------------------------------- */
  
  var intervalId;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unanswered = 0;
  var timer = 20;
  
  // Create an object to store all the questions and answers
  const myQuestions = [
        {
          questionNumber: "1",
          question: "The Fantastic Four have the headquarters in what building?",
          answers: [
            "Stark Tower",
            "Fantastic Headquarters",
            "Baxter Building",
            "Xavier Institute"
          ],
          correctAnswer: "Stark Tower"
        },
        {
          questionNumber: "2",
          question: "Peter Parker works as a photographer for:",
          answers: [
              "The Daily Planet",
              "The Daily Bugle",
              "The New York Times",
              "The Rolling Stone"
        ],
          correctAnswer: "The Daily Planet"
        },
        {
          questionNumber: "3",
          question: "Ghost Rider is known as:",
          answers: [ 
              "The Guardian Devil", 
              "The Spirit of Hate",
              "The Spirit of Vengeance", 
              "The Red Skull"
        ],
          correctAnswer: "The Red Skull"
        },
        {
          questionNumber: "4",
          question: "Captain America was frozen in which war?",
          answers: [ 
              "World War I", 
              "World War II",
              "Cold War", 
              "American Civil War"
        ],
          correctAnswer: "Cold War"
        },
        {
          questionNumber: "5",
          question: "What vehicle is the Avengers primary mode of transport?",
          answers: [ 
              "A bus", 
              "The Quinjet",
              "The Blackbird", 
              "The Blackhawk"
        ],
          correctAnswer: "The Quinjet"
        }
      ];
  
  /* When an answer is clicked perform form check input
  ---------------------------------------------------------------------- */
  
  $(document).on("click", ".form-check-input", function() {
  
  //retrieve the value of questionIndex created for each answer that is clicked
    var index = $(this).attr("questionIndex");
      //   console.log(this);
  
  //if correct answer is chosen add correct answer
    if($(this).attr("value") == myQuestions[index].correctAnswer){
      correctAnswer++;    

  //if incorrect answer is chosen add incorrect answer
    } else if($(this).attr("value") !== myQuestions[index].correctAnswer) {
      incorrectAnswer++;
    }
  
      //   console.log(myQuestions.length);
      //   console.log(incorrectAnswer);
      //   console.log(correctAnswer);
  
    // Show unanswered questions
    unanswered = myQuestions.length - (incorrectAnswer + correctAnswer);
  
  })
  
  // Games starts when the start button is clicked
  // Hide start button once clicked
  $("#start").on("click", function() {
    $("#start").hide();
  
  
    // Call timer function
    countDown();
    
    
    //Build quiz
    //display questions number for each question...
    for (var i = 0; i < myQuestions.length; i++) {
      $("#quiz").append("<div class='questionNumber'>Question #" + myQuestions[i].questionNumber + "/" + myQuestions.length + "</div>");
  
      //display questions
  
          $("#quiz").append("<h2>" + myQuestions[i].question + "</h2>");
  
      //display answers
      //create a radio button for each answers
          for (var j = 0; j < myQuestions[i].answers.length; j++) { 
              
              $("#quiz").append("<div class='form-check'><input class='form-check-input' type='radio' questionIndex='" + i + "' value='" + myQuestions[i].answers[j] + "'><label class='form-check-label'>" + myQuestions[i].answers[j] + "</label></div>");
    
          }
    }
  
  
    // Create a submit button
    $("#quiz").append("<div class='text-center'><button class='btn btn-primary results' id='results'>Results</button></div>");
    
    $("#results").on("click", function() {
      results();
    })
    
  })
  
  
  //show Results
  
  function results() {
    clearInterval(intervalId);
    $("#quiz").html("<h3>All Done!</h3><p><strong>Correct Answers:</strong> " + correctAnswer + "</p><p><strong>Incorrect Answers:</strong> " + incorrectAnswer + "</p><p><strong>Unanswered:</strong> " + unanswered + "</p>");
  }
  
  // Timer function
  /*---------------------------------------------------------------------- */
  function countDown() {
  
  // Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  
  // The decrement function.
  function decrement() {
    timer--;
    $("#show-number").html("<h4>Time Remaining: " + timer + "</h4>");
  
    //  Once number hits zero...
    if (timer === 0) {
      results();
    }
  }
  
  // Execute the run function.
  run();
  }
  /*---------------------------------------------------------------------- */