$(document).ready(function() {
  const stylist = localStorage.getItem("email");
  if (!stylist) {
    window.location.assign("login.html");
  }
  $("#create").click(function(e) {
    e.preventDefault();
    const styleName = $("#styleName").val();
    const description = $("#description").val();
    const price = $("#price").val();
    const imageUrl = $("#image").val();
    if (!styleName || !description || !price || !imageUrl) {
      $(".design-message").html(
        "<p class='text-danger'>Kindly fill in all fields</p>"
      );
      setTimeout(() => {
        $(".design-message").html("");
      }, 2000);
      return;
    }
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/designs",
      data: {
        styleName,
        description,
        price,
        imageUrl,
        stylistEmail: stylist
      },
      success: function() {
        $(".design-message").html(
          "<p class='text-success'>Design created succesfully</p>"
        );
        setTimeout(() => {
          $(".design-message").html("");
        }, 2000);
        $("#styleName").val("");
        $("#description").val("");
        $("#price").val("");
        $("#image").val("");
      }
    });
  });
});
