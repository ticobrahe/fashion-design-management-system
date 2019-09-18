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
      $(".design-message").html("Kindly fill in all fields");
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
        $(".design-message").html("Design created succesfully");
      }
    });
  });
});
