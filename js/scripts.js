var basePrice = 12
function Pizza(size, [toppings]) {
  this.size = size;
  this.toppings = [];
}
var toppings = [];
var toppingsAdd = toppings.length;

Pizza.prototype.price = function() {

  if (this.size === "medium") {
    var pizzaPrice = basePrice;
  }
  if (this.size === "large") {
    var pizzaPrice = basePrice += 3;
  }
  if (toppingsAdd > 0) {
    var pizzaPrice = basePrice + (this.toppings.length + 2);
  }
  else {
    alert("please complete your order!")
  }
  return pizzaPrice;
};






$(document).ready(function() {
  $("form#build-your-own").submit(function(event) {
    event.preventDefault();
    $("#pizza-order").empty();

    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      var selectedToppings = $(this).val();
      toppings.push(selectedToppings);
    });
    var newPizza = new Pizza(size, [toppings]);
    var total = newPizza.price();
      $("#pizza-size").text(newPizza.size);
      $("#description").text(newPizza.toppings);
      $("#order-total").text(newPizza.price);
      $("#pizza-order").show();
  });
});
