$(document).ready(function() {
  $("#signin").click(function(e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    if (!email || !password) {
      $(".loginMessage").html("Kindly fill in all fields");
      return;
    }
    $.ajax({
      method: "GET",
      url: `http://localhost:3000/users?email=${email}&password=${password}`,
      data: {
        email,
        password
      },
      success: function(response) {
        if (response.length) {
          $(".loginMessage").html("Login Success");
          localStorage.setItem("email", email),
            window.location.assign("index.html");
        } else {
          $(".loginMessage").html("email or password is incorrect");
        }
      }
    });
  });
});
