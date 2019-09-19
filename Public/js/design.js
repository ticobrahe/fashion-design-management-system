$(document).ready(function() {
  const getParam = new URLSearchParams(window.location.search);
  const id = getParam.get("id");
  const stylist = localStorage.getItem("email");
  $.getJSON(`http://localhost:3000/designs?id=${id}`, function(response) {
    $.each(response, function(key, design) {
      const formatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2
      });
      const price = formatter.format(design.price);
      const designData = `
        <div class="single-design-pane text-center">
        <img class="design-image" src="${design.imageUrl}" alt="${design.styleName}" />
        <div class="single-design-info">
          <h5 class="h5">${design.styleName}</h5>
          <h5 class="single-design-price h5">${price}</h5>
          <p>${design.description}</p>
            
        </div>
      </div>
        `;
      $(".contain").append(designData);
      if (stylist === design.stylistEmail) {
        const btn = `
        <a href="/update-design.html?id=${design.id}" class="btn btn-success m-">Modify</a>
        <button class="btn btn-danger m-1" id="del">Delete</button>
        `;
        $(".single-design-info").append(btn);
      }

      $("#del").click(function(e) {
        e.preventDefault();
        $.ajax({
          method: "DELETE",
          url: `http://localhost:3000/designs/${id}`,
          success: function() {
            $(".designMessage").html(
              "<p class='text-success'>Deleted Successful</p>"
            );
            window.location.assign("index.html");
          }
        });
      });
      $("#pay").click(function() {
        if (!stylist) {
          window.location.assign("login.html");
        }
        const price = parseInt(Math.ceil(design.price) + "00");
        const handler = PaystackPop.setup({
          key: "pk_test_92a57c77252fa68f9231a3ba006716a5ed9335bb",
          email: design.stylistEmail,
          amount: price,
          ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          metadata: {
            custom_fields: [
              {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
              }
            ]
          },
          callback: function(response) {
            alert("success. transaction ref is " + response.reference);
          },
          onClose: function() {
            alert("window closed");
          }
        });
        handler.openIframe();
      });
    });
  });
});
