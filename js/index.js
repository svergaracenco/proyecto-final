//GALERÍA DE IMÁGENES

$(document).ready(function() {
  
  var data = { gallery: [
{
	title: "Shanghai city skyline 01",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/58115cd6414fb5b9a081f19b/1499387566109/IMG_2642-2.jpg?format=750w",
	href: "#img1",
}, {
	title: "New York skyline 02",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/595ecf0f4c8b03591b74ba03/1527748767117/KOST6511.jpg?format=750w",
	href: "#img2",
}, {
	title: "Shanghai city skyline 03",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/5b0f8ae3352f5392c8a75f5f/1527745270278/KOST9790.jpg?format=750w",
	href: "#img3",
}, {
	title: "Shanghai city skyline 04",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/5b0f9017f950b73249ef3b7b/1527746596376/KOST2754.jpg?format=750w",
	href: "#img4",
}, {
	title: "San Francisco city skyline 05",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/58115e09f7e0ab28d4f03f55/1499387566095/06241619467.jpg?format=750w",
	href: "#img5",
}, {
	title: "New York city skyline 06",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/58116107e3df282037aaa1a1/1527748767007/DSC00167.jpg?format=750w",
	href: "#img6",
}, {
	title: "New York city skyline 07",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/58114e49e58c6224b887ce5c/1499387566091/201605144133.jpg?format=750w",
	href: "#img7",
}, {
	title: "Shanghai city skyline 08",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/595ece9e1b10e38b7a5ddcf1/1499387591034/KOST3993.jpg?format=750w",
	href: "#img8",
}, {
	title: "Shanghai city skyline 09",
	img: "https://static1.squarespace.com/static/5567ede4e4b0e2f8eac07860/58114d37bebafb2c8ab302e8/58126cc429687fe6e8768e02/1527748767220/IMG_0500-2.jpg?format=750w",
	href: "#img9",
}
	  
	
	  


  ]};
  
  var source   = $('#template').html();
  var template = Handlebars.compile(source);
  $('#content').html(template(data));
  
});

$(window).load(function(){
  var $items = $('.item');
  $items.on({
    mousemove: function(e) {
      var $that = $(this);
      $that.find('.overflow > img').velocity({
        translateZ: 0,
        translateX: Math.floor((e.pageX - $that.offset().left) - ($that.width() / 2)),
        translateY: Math.floor((e.pageY - $that.offset().top) - ($that.height() / 2)),
        scale: '2'
      }, {
        duration: 9000,
        easing: 'linear',
        queue: false
      });
    },
    mouseleave: function() {
      $(this).find('.overflow > img').velocity({
        translateZ: 0,
        translateX: 0,
        translateY: 0,
        scale: '1'
      }, {
        duration: 9000,
        easing: 'easeOutSine',
        queue: false
      });
    }
  });
});

//MENÚ

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });