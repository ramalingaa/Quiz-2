// questions list
var questionList = [
    {
    question:"In Which year India Cricket team won it's first world cup ? ",
    answer: "1983"
    },
    {
      question:"Who is the captain of 1983 world cup team ?",
      answer:"KAPIL DEV"
    },
  {
    question:"Who is called the wall in Cricket ? ",
      answer:"RAHUL DRAVID"
  
  },
  {
    question:"Which country won first t20 worldcup ?",
      answer:"INDIA"
  
  },
  {
    question:"Who is the man of the tournament ? ",
      answer:"YUVARAJ SINGH"
  
  }
  ]
   // condition
  for(i=0;i<5;i++){
      printQuestion = questionList[i].question;
      printAnswer = questionList[i].answer;
      checkInput(printQuestion,printAnswer)
  }