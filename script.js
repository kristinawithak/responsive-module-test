$("#btn1").on("click", function() {
  $(".square-red, .square-green, .square-blue").css({
    backgroundColor: "red"
  });
});

$("#btn2").on("click", function() {
  $(".square-red, .square-green, .square-blue").css({
    backgroundColor: "green"
  });
});

$("#btn3").on("click", function() {
  $(".square-red, .square-green, .square-blue").css({
    backgroundColor: "blue"
  });
});

$("#btn4").on("click", function() {
  $(".square-red").css({
    backgroundColor: "red"
  });
  $(".square-green").css({
    backgroundColor: "green"
  });
  $(".square-blue").css({
    backgroundColor: "blue"
  });
});
