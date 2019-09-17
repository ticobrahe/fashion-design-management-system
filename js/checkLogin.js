$(document).ready(function() {
  const user = localStorage.getItem("email");
  if (!user) {
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
