$(function() {
  console.log('hello')

  $('.events').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinit: true,
    arrows: true,
    nextArrow: '<button class="next">→</button>',
    prevArrow: '<button class="prev">←</button>',

  })

})