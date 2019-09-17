$(document).ready(function() {
  const user = localStorage.getItem("email");
  if (!user) {
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
      url: "http://localhost:3000/design",
      data: {
        styleName,
        description,
        price,
        imageUrl,
        userEmail: user
      },
      success: function() {
        $(".design-message").html("Style created Succesfully");
      }
    });
  });
});
