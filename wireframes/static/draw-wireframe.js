$(document).ready(function(){
  var paper = Raphael('drawingboard', 900, 650);
  
  var c = paper.circle(50, 50, 50, 5);
  c.attr({"fill": "red"});
  
  var c1 = paper.rect(10, 10, 50, 50);
  var c2 = paper.rect(100, 100, 50, 50, 10);
  var c3 = paper.path("M 10 10 L 90 90");

  var c4 = paper.path("M 199 305 L 500 305");
  c4.attr({"stroke-width" : "3"});
  
  
  var t = paper.text(150, 250, "Raphaël\nkicks\nbutt!");
  var t = paper.text(300, 300, "not sure but this looks fairly interesting!!");
});
