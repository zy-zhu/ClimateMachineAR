const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDrDMQy6NxFZZftS1Os5aKbeoZAq3SL4jU",
  authDomain: "climate-machine-23.firebaseapp.com",
  databaseURL: "https://climate-machine-23-default-rtdb.firebaseio.com",
  projectId: "climate-machine-23",
  storageBucket: "climate-machine-23.appspot.com",
  messagingSenderId: "332119737375",
  appId: "1:332119737375:web:e11f1340bad15cc2b3012a",
  measurementId: "G-KV7J8GZ7Q8"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("ClimateMachine");



document.getElementById("ClimateMachine").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var number = getElementVal("number");

  let ans1=document.querySelector("input[name='ans1']:checked").value;
  let ans2=document.querySelector("input[name='ans2']:checked").value;
  let ans3=document.querySelector("input[name='ans3']:checked").value;
  let ans4=document.querySelector("input[name='ans4']:checked").value;


  let anstest=document.getElementById('result01').innerHTML
  console.log(anstest)


  saveMessages(number,ans1,ans2,ans3,ans4,anstest);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("ClimateMachine").reset();
}


//Scene 01 Display
function selectScene01(){
  var choiceoption=document.getElementById('myselect').value;
  // document.getElementById('demo').innerHTML='you choiced'+choiceoption;
}


const saveMessages = (number,ans1,ans2,ans3,ans4,anstest) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    number: number,
    ans1:ans1,
    ans2:ans2,
    ans3:ans3,
    ans4:ans4,
    arstest:anstest,
  });
  
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


