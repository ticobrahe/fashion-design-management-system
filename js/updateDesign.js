$(document).ready(function() {
  const getParam = new URLSearchParams(window.location.search);
  const id = getParam.get("id");
  $.getJSON(`http://localhost:3000/designs?id=${id}`, function(response) {
    $.each(response, function(key, design) {
      $("#styleName").val(`${design.styleName}`);
      $("#description").val(`${design.description}`);
      $("#price").val(`${design.price}`);
      $("#image").val(`${design.imageUrl}`);
      $("#update").click(function(e) {
        e.preventDefault();
        const styleName = $("#styleName").val() || design.styleName;
        const description = $("#description").val() || design.description;
        const price = $("#price").val() || design.price;
        const imageUrl = $("#image").val() || design.imageUrl;
        $.ajax({
          method: "PUT",
          url: `http://localhost:3000/designs/${id}`,
          data: {
            styleName,
            description,
            price,
            imageUrl
          },
          success: function(response) {
            $(".update-message").html(
              "<p class='text-success'>Design Updated succesfully</p>"
            );
            window.location.assign(`design.html?id=${id}`);
          }
        });
      });
    });
  });
});
