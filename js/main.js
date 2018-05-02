// Mobile Navigation
$("i.fa-navicon").on("click", function () {
  $(".landing header").css("visibility", "visible").animate({
    opacity: 1
  }, 1000);
});

$("i.fa-times").on("click", function () {
  $(".landing header").animate({
    opacity: 0
  }, 1000, function () {
    $(".landing header").css("visibility", "hidden");
  });
});

// Modal
$(".post").on("click", function() {
  var background = $(this).css("background-image");
  background = background.replace('url(', '').replace(')', '').replace(/\"/gi, "");

  var header_text = $(this).find("h3").text();

  var paragraph_text = $(this).find("p").text();

  $("#modal-image").attr("src", background);
  $("#modal-header").text(header_text);
  $("#modal-text").text(paragraph_text);

  $(".modal, .overlay").css({
    visibility: "visible"
  }).animate({opacity: 1}, 800);

  $(".modal").unbind().on("click", function() {
    $(".modal, .overlay").animate({ opacity: 0 }, 800, function() {
      $(this).css({
        visibility: "hidden"
      });
    });
  });
});