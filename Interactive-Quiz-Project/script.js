var questions = [{
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }, {
    question: "What is the baby of a Moth",
    choices: ["baby", "infant", "kitt", "larva"],
    correctAns: 4
  }];
  var curruntQ = 0;
  var correctA = 0;
  var quizO = false;
  
  $(document).ready(function() {
    displayCurrentQuestion();
    $(this).find('.quizMessage').hide();
    $(this).find('.nextButton').on("click", function() {
      if (!quizO) {
        value = $("input[type='radio']:checked").val();
        if (value == undefined) {
          $(document).find(".quizMessage").text("Please select an answer");
          $(document).find(".quizMessage").show();
        } else {
          $(document).find(".quizMessage").hide();
          if (value == question[curruntQ].correctA) {
            correctA++;
          }
          curruntQ++;
          if (curruntQ < question.length) {
            displayCurrentQuestion();
          } else {
            displatScore();
            $(document).find(".nextButton").text("Take again!");
            quizO = true;
          }
        }
      } else {
        quizO = false;
        $(document).find(".nextButton").text("Next question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
  });
  
  function displayCurrentQuestion() {
    console.log("On display current question")
    var question = questions[curruntQ].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choicesList = $(".choiceList");
    var numChoices = questions[curruntQ].choices.length;
    $(questionClass).text(question);
    $(choicesList).find("li").remove();
    var choice;
    for (i = 0; i < numChoices; i++) {
      choice = questions[curruntQ].choices[i];
      $('<li><input type="radio" value=' + i + ' name="dynradio"/>' + choice + '<li>').appendTo(choicesList);
  
    }
  }
  
  function resetQuiz() {
    currentQ = 0;
    correctA = 0;
    hideScore();
  }
  
  function displatScore() {
    $(document).find(".quizContainer > .result").text("You scored" + correctA + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
  }
  
  function hideScore() {
    $(document).find(".result").hide();
  }
  