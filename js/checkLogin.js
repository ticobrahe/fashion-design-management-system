$(document).ready(function() {
  const stylist = localStorage.getItem("email");
  if (!stylist) {
    $("#logout").css("display", "none");
  } else {
    $("#login").css("display", "none");
    $("#register").css("display", "none");
  }
  $("#signout").click(function(e) {
    e.preventDefault();
    localStorage.removeItem("email");
    window.location.assign("login.html");
  });
});
