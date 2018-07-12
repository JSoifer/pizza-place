function Pizza(size, [toppings], price) {
  this.size = size;
  this.price = price;
  this.toppings = [];
}
var toppings = [];
var toppingsAdd = toppings.length;

Pizza.prototype.price = function() {
  var price = 0

  if (this.size === "large") {
    price = 15;
  } else if (this.size === "medium") {
    price = 12;
  for (i = 0; toppingsAdd > 0; i *= 2) {
    price =+ i;
  }

  return price;
};






$(document).ready(function() {
  $("form#build-your-own").submit(function(event) {
    event.preventDefault();
    $("#pizza-order").empty();

    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieToppings = $(this).val();
      toppings.push(veggieToppings);
    });
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = $(this).val();
      toppings.push(meatToppings);
    });
    var newPizza = new Pizza(size, [toppings], price);
      $("#pizza-order").text(newPizza);
      $("#pizza-order").show();
  });
});
