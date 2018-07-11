$(document).ready(function(){
  $("form#build-your-own").submit(function(event){
    event.preventDefault();
    $("#pizza-order").empty();
    $("#pizza-order").show();
    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieToppings = $(this).val();
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatToppings = $(this).val();
      $('#pizza-order').append(veggieToppings + meatToppings + "<br>");
     });
    });
  });
});
