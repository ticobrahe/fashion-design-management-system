$(document).ready(function() {
  $("#signup").click(function(e) {
    e.preventDefault();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const password = $("#password").val();
    const email = $("#email").val();
    const brandName = $("#brandName").val();
    const phone = $("#phone").val();
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !brandName ||
      !phone
    ) {
      $(".regMessage").html(
        "<p class='text-danger'>Kindly fill in all fields</p>"
      );
      setTimeout(() => {
        $(".regMessage").html("");
      }, 2000);
      return;
    }

    $.ajax({
      method: "GET",
      url: `http://localhost:3000/stylists?email=${email}`,
      data: {
        email
      },
      success: function(response) {
        if (response.length) {
          $(".regMessage").html(
            "<p class='text-danger'>Stylist already exist</p>"
          );
        } else {
          $.ajax({
            method: "POST",
            url: "http://localhost:3000/stylists",
            data: {
              firstname,
              lastname,
              password,
              email,
              brandName,
              phoneNumber: phone
            },
            success: function() {
              $(".regMessage").html(
                "<p class='text-success'>Stylist created Succesfully</p>"
              );
            }
          });
        }
      }
    });
  });
});
