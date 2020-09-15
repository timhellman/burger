$(".create-form").on("submit", function(event){
    event.preventDefault();
    const burger_name = $("#burgerInput").val()
     $.ajax({
       url: "/api/burgers", 
       method: "POST",
       data: {burger_name}
     }).then(res=> location.reload())
  })

$(".devour-button").on("click", function(event){
    event.preventDefault();
})