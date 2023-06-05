let ballance = 1000; 

let screen = document.querySelector(".upperInBox");
let lowerScreen = document.querySelector(".lowerInBox");
const showBallance= () => {
  screen.innerHTML = "Your ballance is: " + ballance;
  lowerScreen.innerHTML = "";
}

const subtractFromBallance= (number) => {
  screen.innerHTML = "New Ballance = " + (ballance - parseInt(number));
  lowerScreen.innerHTML = "Please take you cash"; 
};

const showBalance = () => {
    screen = ballance; 
    lowerScreen.innerHTML = "";
}