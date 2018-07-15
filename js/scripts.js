function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
var toppings = [];
var toppingsAdd = toppings.length;

Pizza.prototype.price = function() {
  var basePrice = 12
//debugger;
  if (this.size === "medium") {
    var pizzaPrice = basePrice;
  }
  else if (this.size === "large") {
    var pizzaPrice = basePrice += 3;
  }
  if (this.toppings.length > 0) {
    var pizzaPrice = basePrice + (this.toppings.length *= 2);
  }
  else if (this.toppings.length === 0) {
    var pizzaPrice = basePrice;
  }
  else {
    alert("please complete your order!")
  }
  return pizzaPrice;
};






$(document).ready(function() {
  $("form#build-your-own").submit(function(event) {
    event.preventDefault();
    //$("#pizza-order").empty();

    var newPizza = new Pizza(size, toppings);
    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      var selectedToppings = $(this).val();
      toppings.push(selectedToppings);
    });
    var total = newPizza.price();
    $("#pizza-order").show();
      $("#pizza-size").text(size);
      $("#description").text(newPizza.toppings);
      $("#order-total").text(total);
  });
});
