$(document).ready(function() {
  $.getJSON("http://localhost:3000/designs", function(response) {
    $.each(response, function(key, design) {
      const description = design.description.slice(0, 50);
      const formatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2
      });
      const price = formatter.format(design.price);
      const card = `
        <div class="col">
          <div class="card card-position">
            <img src="${design.imageUrl}" class="card-img-top" alt="${design.title}" />
            <div class="card-body">
              <h5 class="card-title">${design.styleName}</h5>
              <p class="card-text">
              ${description}
              </p>
              <div class="price-position">
              <a href="/design.html?id=${design.id}" class="btn btn-primary">View</a> 
              <p>${price}</p>
              </div>
            </div>
          </div>
        </div>
    `;
      $(".row").append(card);
    });
  });
});
