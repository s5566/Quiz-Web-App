
let questions = [
  {
    id: 1,
    question: "What color is the sky",
    answer: "Blue",
    options: [
      "White",
      "Blue",
      "Violet",
      "Purple"
    ]
  },

  {
    id: 2,
    question: "Which land mammal has the largest eyes?",
    answer: "Horse",
    options: [
      "Whale",
      "Horse",
      "Human",
      "Bats"
    ]
  },
  {
    id: 3,
    question: "How many planets in our solar system have exactly one moon?",
    answer: "Earth",
    options: [
      "Uranus",
      "Earth",
      "Saturn",
      "Jupiter"
    ]
  },
  {
    id: 4,
    question: "Bruce Banner is the real name of which superhero?",
    answer: "Hulk",
    options: [
      "Vision",
      "Captain America",
      "Iron man",
      "Hulk"
    ]
  },
  {
    id: 5,
    question: "Which former planet was demoted to dwarf-planet status in 2006?",
    answer: "Pluto",
    options: [
      "Pluto",
      "Uranus",
      "Earth",
      "Saturn"
    ]
  },
  {
    id: 6,
    question: "What is the square root of 225?",
    answer: "15",
    options: [
      "25",
      "15",
      "52",
      "22"
    ]
  },
  {
    id: 7,
    question: "1/3 of 1/3 of 450 equals",
    answer: "50",
    options: [
      "55",
      "40",
      "45",
      "50"
    ]
  },
  {
    id: 8,
    question: "What is three-fifths of 50?",
    answer: "30",
    options: [
      "25",
      "30",
      "15",
      "10"
    ]
  },
  {
    id: 9,
    question: "Where is Liberia?",
    answer: "Africa",
    options: [
      "Asia",
      "Africa",
      "USA",
      "Antartica"
    ]
  },
  {
    id: 10,
    question: "Tree is to ground as chimney is to",
    answer: "House",
    options: [
      "Smoke",
      "House",
      "Fire",
      "Brick"
    ]
  },
  {
    id: 11,
    question: "What is the square root of 10,000?",
    answer: "100",
    options: [
      "10",
      "100",
      "110",
      "1000"
    ]
  },
  {
    id: 12,
    question: "Which state has the largest area?",
    answer: "Rajasthan",
    options: [
      "Maharashtra",
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Rajasthan"
    ]
  },

  {
    id: 13,
    question: "Which of the following is the capital of Arunachal Pradesh?",
    answer: "Itanagar",
    options: [
      "Itanagar",
      "Dispur",
      "Imphal",
      "None of these"
    ]
  },
  {
    id: 14,
    question: "Which of the following states is not located in the North?",
    answer: "Jharkhand",
    options: [
      "Jharkhand",
      "Jammu and Kashmir",
      "Himachal Pradesh",
      "Haryana"
    ]
  },
  {
    id: 15,
    question: "What is the state flower of Haryana?",
    answer: "Lotus",
    options: [
      "Lotus",
      "Rhododendron",
      "Golden Shower",
      "Not declared"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};
let answers =[]
function next() {

   
  // if the question is last then redirect to final page
  
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // sessionStorage.setItem('points',0);
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
 
 
  console.log(points);

 let i = question_count;
  answers[i]=user_answer;

  
  if(question_count==14)
  
    //for(var j=0;j<=question_count;j++)
{
  sessionStorage.setItem("Answers",answers);
}
if (question_count == questions.length - 1) {
   
  location.href = "end.html";
}
question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");

  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
function getit()
{
    sessionStorage.setItem("points",0);
    document.location.href="start.html";
}
firebase.auth().onAuthStateChanged(user =>{
  if(user) {
      // console.log(user);
  } else {
    
      console.log('not logged in');
  }
});
