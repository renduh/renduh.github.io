// Slide content here
var slideinfo = {
                   "fancyslides":[
                      {
                         "headline":"Aberfan & other Shorthand stories",
                         "subhead":"Longform stories for Reach regionals",
                         "image":"projects/aberfan.jpg",
                         "image_mobile":"projects/aberfan-mobile.jpg",
                         "link":"projects/aberfan/index.html"
                      },
                      {
                         "headline":"Damned",
                         "subhead":"Longform website for The Mirror",
                         "image":"projects/damned.jpg",
                         "image_mobile":"projects/damned-mobile.jpg",
                         "link":"projects/damned/index.html"
                      },
                      {
                         "headline":"The Wigan Pier Project",
                         "subhead":"Special project website for The Mirror",
                         "image":"projects/wiganpier.jpg",
                         "image_mobile":"projects/wiganpier-mobile.jpg",
                         "link":"projects/wiganpier/index.html"
                      },
                      {
                         "headline":"Image maker tools",
                         "subhead":"Software developed for Reach regionals",
                         "image":"projects/stories-maker.jpg",
                         "image_mobile":"projects/stories-maker-mobile.jpg",
                         "link":"projects/imagetools/index.html"
                      }
                   ]
                }

// Push content into arrays
var headline_array = [];
for (var i = 0; i < slideinfo.fancyslides.length; i++) {
  headline_array.push(slideinfo.fancyslides[i].headline);
}
var subhead_array = [];
for (var i = 0; i < slideinfo.fancyslides.length; i++) {
  subhead_array.push(slideinfo.fancyslides[i].subhead);
}
var image_array = [];
for (var i = 0; i < slideinfo.fancyslides.length; i++) {
  image_array.push(slideinfo.fancyslides[i].image);
}
var image_array_mobile = [];
for (var i = 0; i < slideinfo.fancyslides.length; i++) {
  image_array_mobile.push(slideinfo.fancyslides[i].image_mobile);
}
var link_array = [];
for (var i = 0; i < slideinfo.fancyslides.length; i++) {
  link_array.push(slideinfo.fancyslides[i].link);
}

// var headline_array = ["Aberfan & other Shorthand stories", "Damned", "The Wigan Pier Project", "Image maker tools"];
// var subhead_array = ["Longform stories for Reach regionals made with Shorthand", "Longform website for The Mirror", "Special project website for The Mirror", "Software developed for Reach regionals"];
// var image_array = ["img/aberfan.jpg", "img/damned.jpg", "img/wiganpier.jpg", "img/stories-maker.jpg"];
// var image_array_mobile = ["img/aberfan-mobile.jpg", "img/damned-mobile.jpg", "img/wiganpier-mobile.jpg", "img/stories-maker-mobile.jpg"];
// var link_array = ['projects/aberfan.html', 'projects/damned.html', 'projects/wiganpier.html', 'projects/imagetools.html']













function removeLines(headline, div, measurediv) {
	// Remove current headline
	$(div + " .headline-lines .single-lines").animate({top: "-53px"}, 300, 'linear');
	// Add new string
	setTimeout(function(){ 
		splitLines(headline, div, measurediv);
	}, 300);
}

function splitLines(headline, div, measurediv) {
    // Get height of measuring div with one line in it then clear the div
    var originalHeight = $(measurediv).height();
    $(measurediv).text('');
    // Array to put our seperate lines into
    var allLines = [];
    // Split string into words. Put each word into measuring div and check if height has changes which tells us it is on a new line
    $.each( headline.split(" "), function(){
    	var textBeforeAdd = $(measurediv).text();
        $(measurediv).append(this + ' ');
	    var newHeight = $(measurediv).height();
	    if (originalHeight !== newHeight) {
	    	$(measurediv).text('');
	    	$(measurediv).append(this + ' ');
	    	allLines.push(textBeforeAdd);
	    } 
    });
    // Check for words on last line, if there are any add them to the array
    if ( $(measurediv).text() !== '' ) {
    	allLines.push( $(measurediv).text() );
    }
    // console.log(allLines);
    // Clear div that will hold our final text
    $(div).text('');
    // Add our lines array entries to the display div
    for(var i = 0; i< allLines.length; i++){
		$('<div/>', {
		    "class": 'headline-lines',
		    "html": '<div class="single-lines">' + allLines[i] + '</div>'
		}).appendTo(div);
    }	
    animateLines(div);
}

function animateLines(div) {
    // Animate final lines
    $(div + " .headline-lines .single-lines").animate({top: "0px"}, 300, 'linear');
}





function changeBackground(img,img_mobile) {

  var mq = window.matchMedia( "(min-width: 600px)" );
  if (mq.matches) {
      $('#overlay').css({opacity: "1"});
      setTimeout(function(){ 
        $('#slide-image').html('<img src="' + img + '">');
      $('#overlay').css({opacity: "0.5"});
      }, 300);
  }
  else {
      $('#overlay').css({opacity: "1"});
      setTimeout(function(){ 
        $('#slide-image').html('<img src="' + img_mobile + '">');
      $('#overlay').css({opacity: "0.5"});
      }, 300);
  }
}






var i;
var totalprojects;
var projectloop;
var looptime = 6000;

$( document ).ready(function() {
	i = 0;
  add_storylines();
  loop_headlines();
  $('#loading-logo').css({opacity: "100%"});
  setTimeout(function(){ 
    $('#loading-logo').css({opacity: "0%"});
    setTimeout(function(){ 
      $('#opener-top').css({height: "0%"});
      $('#opener-bottom').css({height: "0%"});      
    }, 400);
  }, 1000);
  load_projects_full();
});



function load_projects_full() {
  console.log('load projects full');

  for (x = 0; x < headline_array.length; x++) {
    $('<div/>', {
        class: 'projects-full-cards',
        html: '<img src="' + image_array[x] + '"><h1>' + headline_array[x] + '</h1><h2>' + subhead_array[x] + '</h2><div>' + link_array[x] + '</div>',
        css: {
          position:'relative'
        }
    }).appendTo('#projects-full-cards');
  }


}




function add_storylines() {
  var numofprojects = headline_array.length;
  var width = 100 / numofprojects;
  for (x = 0; x < numofprojects; x++) {
    $('<div/>', {
        class: '.story-line-single',
        html: '<div id="story-' + x + '" class="story-line-single-fill"></div>',
        css: {
          position:'relative',
          float:'left',
          width: 'calc( ' + width + '% - 4px )',
          height:'100%',
          background:'rgba(204, 204, 204, 0.48)',
          margin:'0 2px'
        }
    }).appendTo('#story-line');
  }
}



function animate_storylines(i) {
  var totalprojects = headline_array.length;
  for (var x = 0; x < totalprojects; x++) {
    // console.log(x);
    $( '#story-' + (x) ).finish();
    $( '#story-' + (x) ).css({width: "0%"});
  }
  for (var x = 0; x < i; x++) {
    $( '#story-' + (x) ).css({width: "100%"});
  }
  $( '#story-' + (i) ).animate({width: "100%"}, looptime);
}


function stopanimation() {
  clearTimeout(projectloop);
}

function startanimation() {
  loop_headlines();
}


function close_projects() {
  // $('#about-full').css('top', '100%');
  // $('#projects-full').css('top', '100%');
  $('#project-full').css('left', '100%');
  // $('#menu').css('background', 'transparent');
  $('#project-full .full-content').html('');
  setTimeout(function(){ 
    $('#panels').css('z-index', '500');
  }, 200);
  setTimeout(function(){ 
    startanimation();
  }, 400);
}

function open_project(link) {
  // console.log('open project');
  // console.log(link);
  // load file into project-full div
  // Move project-full panel up
  $('#panels').css('z-index', '2000');
  $('#project-full').css('left', '0%');
  $('#project-full .full-content').load(link);

  $('#projects-full').css('left', '100%');
  $('#about-full').css('left', '100%');
  // $('#menu').css('background', '#000');
  stopanimation();
}

$("#page-projects").click(function(){
  // close_projects();
  $('#panels').css('z-index', '2000');
  // console.log('projects page');
  $('#projects-full').css('left', '0%');
  // $('#menu').css('background', '#000');
});

$("#page-about").click(function(){
  // close_projects();
  $('#panels').css('z-index', '2000');
  // console.log('about page');
  $('#about-full').css('left', '0%');
  // $('#menu').css('background', '#000');
});


function exploreanimation() {
  // $('#exploreproject').animate({top: "-40px"}, 300, 'linear');
  // setTimeout(function(){ 
  //   $('#exploreproject').css('top', '30px');
  //   $('#exploreproject').animate({top: "0px"}, 300, 'linear');
  // }, 400);
  $('#exploreproject').css('top', '-44px');
  setTimeout(function(){ 
    $('#exploreproject').css('transition', 'none');
    $('#exploreproject').css('top', '44px');
  }, 200);
  setTimeout(function(){ 
    $('#exploreproject').css('transition', '0.2s');
    $('#exploreproject').css('top', '0px');
  }, 400);
}

$(".close-projects-full").click(function(){
  $('#projects-full').css('left', '100%');
  $('#about-full').css('left', '100%');
  setTimeout(function(){ 
    $('#panels').css('z-index', '500');
  }, 200);
});



function loop_headlines() {
    // console.log(i);
    $('#exploreproject').attr('onclick','open_project("' + link_array[i] + '")');
    animate_storylines(i);
    exploreanimation();
    totalprojects = headline_array.length;
    removeLines(headline_array[i], '#headline', '#headlinemeasure');
    removeLines(subhead_array[i], '#subhead', '#subheadmeasure');
    changeBackground(image_array[i],image_array_mobile[i]);
    if (++i < headline_array.length) {
        projectloop = setTimeout(loop_headlines, looptime);
    } else {
        i = 0;
        projectloop = setTimeout(loop_headlines, looptime);
    }
}





$("#project-next").click(function(){
  clearTimeout(projectloop);
  loop_headlines();
});




$("#project-previous").click(function(){
  clearTimeout(projectloop);
  i = i - 2; 
  // if it is on the first slide loop through to last slide
  if ( i == -1 ) {
      i = totalprojects - 1;
  } 
  // if it is on the last slide loop through to the penultimate slide
  if ( i == -2) {
      i = totalprojects - 2;
  }
  loop_headlines();
});



