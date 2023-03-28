$(document).ready(function () {
  $(".testimonial-content").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    margin: 50,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
