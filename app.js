


const questions = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperloop Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hypertext Markup Language"
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  },
  {
    id: 5,
    question: "Which of these is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  }
];

function loadtable() {

  for (let i = 0; i < questions.length; i++) {
    document.getElementById("tableforQA").innerHTML += ` <tr>
                    <td>${questions[i].id} </td>
                     <td>${questions[i].question} </td> 
                        <td>${questions[i].options} </td> 
                             
                    
                    </tr>`}







}
let marks=0;
let count = 0;
let y = 0;
document.getElementById("btn1").onclick = function () {

  document.getElementById("MSQ").innerHTML = `
          
          <h1> ${questions[count].question}</h1>
          <label id="label1">
    <input type="radio" id="${questions[count].id}" name="${questions[count].options[y]}" onchange="radioclick(this)">
    
    ${questions[count].options[y]}
   
     
  </label><br>
 <label id="label2">
  <input type="radio" id="${questions[count].id}" name="${questions[count].options[y + 1]}" onchange="radioclick(this)">
    ${questions[count].options[y + 1]}
     
  </label><br>
 <label id="label3">
  <input type="radio" id="${questions[count].id}" name="${questions[count].options[y + 2]}" onchange="radioclick(this)" >
    ${questions[count].options[y + 2]}
     
  </label><br>
 <label id="label4">
  <input type="radio" id="${questions[count].id}" name="${questions[count].options[y + 3]}" onchange="radioclick(this)">
    ${questions[count].options[y + 3]}
     
  </label><br>

          `

  count = count + 1;
}

function radioclick(obj) {
  console.log(obj.name);
  console.log(obj.id);  
  console.log(questions[parseInt(obj.id)-1].answer);
  console.log(questions[parseInt(obj.id)-1]);
  
  if (obj.name == questions[parseInt(obj.id)-1].answer){
    alert("Correct answer");
    marks+=10;
    document.getElementById("Marks").innerHTML=`Current Marks : ${marks}`
    

   
  }
  else {
    alert("Wrong answer")
  }
  console.log(obj.id);

}



loadtable();


