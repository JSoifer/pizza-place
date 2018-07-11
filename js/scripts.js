function Pizza(size, [toppings], price) {
  this.size = size;
  this.toppings = [toppings];
  this.price = price;
}
var toppings = [];

Pizza.prototype.price = function() {
  var price = 0

  if (this.size === "large") {
    price = 15;
  } else if (this.size === "medium") {
    price = 12;
  }
  if (this.toppings.length === 0) {
    price *= 1;
  } else if ((this.size === "large") && (this.toppings.length > 0)) {
    price = this.toppings.length *= 3;
  } else if ((this.size === "medium") && (this.toppings.length >0)) {
    price = this.toppings.length *= 2;
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
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = $(this).val();
      toppings.push(meatToppings);
    var newPizza =
      $('#pizza-order').text(newPizza);
      $("#pizza-order").show();
     });
    });
  });
});
