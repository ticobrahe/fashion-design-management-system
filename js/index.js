$(document).ready(function() {
  $.getJSON("http://localhost:3000/design", function(response) {
    $.each(response, function(key, design) {
      const description = design.description.slice(0, 50);
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
              <p>₦${design.price}</p>
              </div>
            </div>
          </div>
        </div>
    `;
      $(".row").append(card);
    });
  });
});
