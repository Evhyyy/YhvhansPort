function MainPortfolio() {
  let InputUsername = document.getElementById("InputUsername").value;
  let InputPassword = document.getElementById("InputPassword").value; // Corrected typo

  let User1 = "Evhy";
  let Pass = "12345";
    
  if (InputUsername === User1 && InputPassword === Pass) {
    window.location.href = "MainPortfolio.html";
    
  } else {
    alert("Invalid Username or Password. Please Enter a valid Username or Password");
  }
}

let seasonsAudio = new Audio("Songs/Seasons.mp3");
let LofiAudio = new Audio("Songs/Lofi.mp3");

function Seasons(){
  LofiAudio.pause();
  LofiAudio.currentTime = 0
  seasonsAudio.play();

 
}

function Lofi(){
  seasonsAudio.pause();
  seasonsAudio.currentTime = 0
  LofiAudio.play();


}

function Projects(){
  window.location.href = "Projects.html";
  
}

function BackToMain(){
  window.location.href = "MainPortfolio.html";
}