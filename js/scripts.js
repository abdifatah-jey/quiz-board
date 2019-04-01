function check() {

    var q1 = document.quiz.answer1.value;
    var q2 = document.quiz.answer2.value;
    var q3 = document.quiz.answer3.value;
    var q4 = document.quiz.answer4.value;
    var q5 = document.quiz.answer5.value;
    var count=0;

        if (q1 == "c") {
          count+=20;
        }
        if (q2 == "c"){
          count+=20;
        }
        if (q3 == "b"){
          count+=20;
        }
        if (q4 == "c"){
          count+=20;
        }
        if (q5 == "b"){
          count+=20;
        }
  document.getElementById("after_submit").style.visibility = "visible"
   document.getElementById("number_count").innerHTML = "Your score is: " +count + "%.";
}
