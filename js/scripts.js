$(document).ready(function(){
  $("form#build-your-own").submit(function(event){
    event.preventDefault();
    $("#pizza-order").show();
    $("input:checkbox[name=veggie]:checked").each(function(){
      var toppings = $(this).val();
      $('#pizza-order').append(toppings + "<br>");
    });
});
