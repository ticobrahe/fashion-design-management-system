$(document).ready(function() {
  $("#signin").click(function(e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    if (!email || !password) {
      $(".loginMessage").html(
        "<p class='text-danger'>Kindly fill in all fields</p>"
      );
      setTimeout(() => {
        $(".loginMessage").html("");
      }, 2000);
      return;
    }
    $.ajax({
      method: "GET",
      url: `http://localhost:3000/stylists?email=${email}&password=${password}`,
      data: {
        email,
        password
      },
      success: function(response) {
        if (response.length) {
          $(".loginMessage").html("<p class='text-success'>Login Success</p>");
          localStorage.setItem("email", email);
          window.location.assign("index.html");
        } else {
          $(".loginMessage").html(
            "<p class='text-danger'>email or password is incorrect</p>"
          );
          setTimeout(() => {
            $(".loginMessage").html("");
          }, 2000);
        }
      }
    });
  });
});
