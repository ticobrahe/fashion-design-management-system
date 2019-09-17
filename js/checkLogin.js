$(document).ready(function() {
  const user = localStorage.getItem("email");
  if (user) {
    $("#login").css("display", "none");
    $("#register").css("display", "none");
  }
});
