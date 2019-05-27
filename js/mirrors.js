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
		$("#fs_headline").text(fancyslides.fancyslides[0].headline);
		$("#fs_subhead").text(fancyslides.fancyslides[0].subhead);
		$("#fs_bg").css('background', fancyslides.fancyslides[0].background);
		//$("#fs_content").html(fancyslides.fancyslides[0].content);
		$('#fs_content').load(fancyslides.fancyslides[0].content);
		// console.log(fancyslides);
		// console.log(fancyslides.fancyslides[0].headline);
		// console.log(fancyslides.fancyslides[1].headline);
		// console.log(fancyslides.fancyslides[2].headline);
	  }
	});


	var fs_num = 0;
	var fs_total = 2;


	$("#fs_nav_left").click(function(){
		console.log('fancyslide left');
		fs_num = fs_num - 1;
		if (fs_num <= -1) {
			fs_num = fs_total;
		}
		console.log(fs_num);
		change_fs(fs_num);
		// console.log(fancyslides.fancyslides[0].headline);
		// console.log(fancyslides.fancyslides[1].headline);
		// console.log(fancyslides.fancyslides[2].headline);
	});
	$("#fs_nav_right").click(function(){
		console.log('fancyslide right');
		fs_num = fs_num + 1;
		if (fs_num == fs_total + 1) {
			fs_num = 0;
		}
		console.log(fs_num);
		change_fs(fs_num);
		// console.log(fancyslides.fancyslides[0].headline);
		// console.log(fancyslides.fancyslides[1].headline);
		// console.log(fancyslides.fancyslides[2].headline);
	});


	function change_fs(num) {
		console.log(fancyslides.fancyslides[num].headline);
		console.log(fancyslides.fancyslides[num].subhead);
		$("#fs_headline").text(fancyslides.fancyslides[num].headline);
		$("#fs_subhead").text(fancyslides.fancyslides[num].subhead);
		$("#fs_bg").css('background', fancyslides.fancyslides[num].background);
		//$("#fs_content").html(fancyslides.fancyslides[num].content);
		$('#fs_content').load(fancyslides.fancyslides[num].content);
	}





});