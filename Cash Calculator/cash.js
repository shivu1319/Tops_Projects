function counting() {
  var counts = document.getElementById("notes").value;
  var result = 2000 * counts;
  document.getElementById("f2").innerHTML = result;

  var count500 = document.getElementById("notes1").value;
  var result500 = 500 * count500;
  document.getElementById("f1").innerHTML = result500;

  var count200 = document.getElementById("notes2").value;
  var result200 = 200 * count200;
  document.getElementById("f3").innerHTML = result200;

  var count100 = document.getElementById("notes3").value;
  var result100 = 100 * count100;
  document.getElementById("f4").innerHTML = result100;

  var count50 = document.getElementById("notes4").value;
  var result50 = 50 * count50;
  document.getElementById("f5").innerHTML = result50;

  var total = (document.getElementById("totala").innerHTML =
    result + result500 + result200 + result100 + result50);

  // var total1 = document.getElementById("totala1").innerHTML = (notes + notes1 + notes2 + notes3 + notes4);

  // function clicker() {
  //   var number = 123;
  //   var word = "";
  //   for (var i = 0; i < number.length; i++) {
  //     word += Math.floor(number.charAt(i) + "0");
  //   }
  // }
}
  