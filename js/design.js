$(document).ready(function() {
  const getParam = new URLSearchParams(window.location.search);
  const id = getParam.get("id");
  $.getJSON(`http://localhost:3000/designs?id=${id}`, function(response) {
    $.each(response, function(key, design) {
      const designData = `
        <div class="single-design-pane text-center">
        <img class="design-image" src="${design.imageUrl}" alt="${design.styleName}" />
        <div class="single-design-info">
          <h5 class="h5">${design.styleName}</h5>
          <h5 class="single-design-price h5">₦ ${design.price}</h5>
          <p>${design.description}</p>
            <a href="/update-design.html?id=${design.id}" class="btn btn-success m-">Modify</a>
            <a href="?id=${design.id}" class="btn btn-danger m-1">Delete</a>
          </p>
        </div>
      </div>
        `;
      $(".contain").append(designData);
    });
  });
});
