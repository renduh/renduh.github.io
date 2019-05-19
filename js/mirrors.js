$(function() {

	var fs = 1;

	$("#fs_button").click(function(){
		if ( fs == 1 ) {
			$("#content").animate({"max-height": "2000px"}, 'fast');
			$("#fs_container").animate({"height": "50%"}, 'fast');
			$("#fs_button").text('Back to slideshow');
			$(".fs_nav").css('display','none');
			fs = 0;
		} else if ( fs == 0 ) {
			$("#content").animate({"max-height": "0px"}, 'fast');
			$("#fs_container").animate({"height": "100%"}, 'fast');
			$("#fs_button").text('Explore the project');
			$(".fs_nav").css('display','block');
			fs = 1;
		}
	});





// JSON TEST FROM HERE



var fancyslides;
$.ajax({
  type: 'GET',
  url: 'data.json',
  data: {get_param: 'value'},
  dataType: 'json',
  success: function (data) {
    fancyslides = data
    console.log(fancyslides);
	console.log(fancyslides.fancyslides[0].headline);
	console.log(fancyslides.fancyslides[1].headline);
	console.log(fancyslides.fancyslides[2].headline);
  }
});








// JSON TEST END HERE





	$("#fs_nav_left").click(function(){
		console.log('fancyslide left');
		console.log(fancyslides.fancyslides[0].headline);
		console.log(fancyslides.fancyslides[1].headline);
		console.log(fancyslides.fancyslides[2].headline);
	});
	$("#fs_nav_right").click(function(){
		console.log('fancyslide right');
		console.log(fancyslides.fancyslides[0].headline);
		console.log(fancyslides.fancyslides[1].headline);
		console.log(fancyslides.fancyslides[2].headline);
	});








});