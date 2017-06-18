// function getRandomSize(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// var allImages = "";

// for (var i = 0; i < 10; i++) {
//   var width = getRandomSize(200, 400);
//   var height =  getRandomSize(200, 400);
//   allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
// }

// $('#firstScreen').append(allImages);


// for-loop with cotainer-img-overlay content




// nav
var w = window,
x = w.innerWidth,
y = w.innerHeight;

$(document).scroll(function() {

	if($(window).scrollTop() > y-50){

		$('.nav').css("background-color", "rgba(0,0,0,0.6")
		$('.nav').css("padding-top", "0")


	} else{
		$('.nav').css("background-color", "transparent")
		$('.nav').css("padding-top", "20px")

	}
});

$(document).on('click', 'a', function(event){
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
});

$(window).scroll(function() {


	if ($(this).scrollTop() >= $('#home').offset().top - 50) {
		$('.nav a').removeClass('active');
		$('.nav a:eq(0)').addClass('active');
	}
	if ($(this).scrollTop() >= $('#gallery').offset().top - 100) {
		$('.nav a').removeClass('active');
		$('.nav a:eq(1)').addClass('active');
	}
	if ($(this).scrollTop() >= $('#contacts').offset().top - 50) {
		$('.nav a').removeClass('active');
		$('.nav a:eq(2)').addClass('active');
	}
});




// slider
var slideIndex = 0;
var time1
showSlide(slideIndex);
carousel();

// arrow-button for slider
function plusSlide(n) {
	showSlide(slideIndex += n);
	clearTimeout(time1)
	time1 = setTimeout(carousel, 4000); 
}


function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
		x[slideIndex-1].style.opacity = "0";
	x[slideIndex-1].style.display = "block";
	x[slideIndex-1].style.opacity = "1";
	time1 = setTimeout(carousel, 4000); 

}


function showSlide(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	if (n > x.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = x.length} ;
	x[slideIndex-1].style.opacity = "0";
	x[slideIndex-1].style.display = "block";
	x[slideIndex-1].style.opacity = "1";

}

// hide down-arrow when scrolling 
$(document).scroll(function() {
	if($(window).scrollTop() > 1){

		$('.display-down').css("display", "none")

	}else if($(window).scrollTop() < 1){

		$('.display-down').css("display", "block")
	}
});


// end of slider



// gallery 

var n = document.getElementsByClassName('container').length
var modalImg = document.getElementsByClassName("modal-content")[0];
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName('modal')[0];

for(var i=0; i<n; i++){

	var img = document.getElementsByClassName('image')[i];


	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		$('body').css("overflow", "hidden")
		$('.nav').css("display", "none")
	}

	modalImg.onclick = function() { 
		modal.style.display = "none";
		$('body').css("overflow", "auto")
		$('.nav').css("display", "block")
	}

	span.onclick = function() { 
		modal.style.display = "none";
		$('body').css("overflow", "auto")
		$('.nav').css("display", "block")

	}
}

$('.fa').click(function(e){
	$(this).toggleClass('fa-heart-o');
	$(this).toggleClass('fa-heart');
   // console.log($('.overlay-rate').text().split(' ')[0])
   if($(this).hasClass('fa-heart-o'))
   	$(this).html(parseInt($(this).text()) - 1)
   if($(this).hasClass('fa-heart'))
   	$(this).html(parseInt($(this).text()) + 1)

});


(function changeModal(){
	var i;

		var l = document.getElementsByClassName("modal-left")[0];
		var r = document.getElementsByClassName("modal-right")[0];

		l.onclick = function(){
			var src = modalImg.src.split("/")
			var imageNumber = parseInt(src[9].split(".")[0])
			imageNumber-=1
			if(imageNumber==0)
				imageNumber = n
			src[9] = imageNumber + ".jpg"
			var newSrc = src.join("/")	
			modalImg.src = newSrc	
		}

		r.onclick = function(){
			var src = modalImg.src.split("/")
			console.log(src)
			var imageNumber = parseInt(src[9].split(".")[0])
			imageNumber+=1
			if(imageNumber==n+1)
				imageNumber = 1
			src[9] = imageNumber + ".jpg"
			var newSrc = src.join("/")	
			modalImg.src = newSrc	
		}

	
})();

// end of gallery


//ajax call for .json file at github

var obji = $.ajax({
	url: 'https://rawgit.com/AndrewRicfo/photoGallery/master/js/jason.json',
	data: {},
	type: 'GET',
	crossDomain: true,
	dataType: 'json',
	context: document.body,
	global: false,
	async:false,
	success: function(result) {
		return result;
	},
	error: function() { alert('Failed to get .json content!'); },
}).responseText;

obji = $.parseJSON(obji)
console.log(obji[0])
