function Pizza(size, [toppings], price) {
  this.size = size;
  this.toppings = [toppings];
  this.price = price;
}

Pizza.prototype.price = function() {
  var mediumPrice = 12;
  var largePrice = 15;

  for (var i = 0; i)

}




$(document).ready(function() {
  var newPizza;
  $("form#build-your-own").submit(function(event) {
    event.preventDefault();
    $("#pizza-order").empty();

    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieToppings = $(this).val();
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = $(this).val();
      $('#pizza-order').append(veggieToppings + "<br>" + meatToppings + "<br>");
      $("#pizza-order").show();
     });
    });
  });
});
