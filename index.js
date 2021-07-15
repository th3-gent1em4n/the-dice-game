 document.querySelector(".button1").addEventListener("click", function () {

    var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
    var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
   
    document.querySelector(".img1").setAttribute("src", randomNumber1);
    document.querySelector(".img2").setAttribute("src", randomNumber2);
   
    changeTitle(randomNumber1, randomNumber2);
   
  function changeTitle(num1, num2) {
    if (num1 === num2) {
      document.querySelector(".result").innerHTML = "Uh! Oh! It's a Draw!";
    } else if (num1 > num2) {
      document.querySelector(".result").innerHTML = "Yay! Player 1 Won. 🚩";
    } else {
      document.querySelector(".result").innerHTML = "Yay! Player 2 Won. 🚩";
    }
    document.querySelector(".result1").innerHTML = "Click the button above to play again";
  }
});
   
  