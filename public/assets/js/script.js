$(function() {
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
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      
      devoured: true
    
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


