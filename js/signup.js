$(document).ready(function() {
  $("#signup").click(function(e) {
    e.preventDefault();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const password = $("#password").val();
    const email = $("#email").val();
    console.log(password);
    if (!firstname || !lastname || !email) {
      $(".message").html("Kindly fill in all fields");
      return;
    }

    $.ajax({
      method: "GET",
      url: `http://localhost:3000/users?email=${email}`,
      data: {
        email
      },
      success: function(response) {
        if (response.length) {
          $(".message").html("User already exist");
        } else {
          $.ajax({
            method: "POST",
            url: "http://localhost:3000/users",
            data: {
              firstname,
              lastname,
              password,
              email
            },
            success: function() {
              $(".message").html("User created Succesfully");
            }
          });
        }
      }
    });
  });
});
