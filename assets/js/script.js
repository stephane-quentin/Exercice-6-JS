function ex6(){
  var first = document.getElementById("firstNumber").value; // récupération de la première variable que l'on a tapé dans la page html
  var second = document.getElementById("secondNumber").value;
  alert("Reste : " + (first % second)); //Affcihage du reste de la division entre la première variable et la seconde
}
