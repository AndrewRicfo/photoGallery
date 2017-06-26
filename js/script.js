// uploading images

var imgJSON = [
{
	"srcThumb": "../fproject/images/thumbnails/th-1.jpg",
	"srcFull": "../fproject/images/full/1.jpg",
	"alt": "1 photo description",
	"author": "Author 1",
	"likes": 1,
	"width": 1024,
	"height": 1280 
},
{
	"srcThumb": "../fproject/images/thumbnails/th-2.jpg",
	"srcFull": "../fproject/images/full/2.jpg",
	"alt": "2 photo description",
	"author": "Author 1",
	"likes": 2,
	"width": 1280,
	"height": 1170
},
{
	"srcThumb": "../fproject/images/thumbnails/th-3.jpg",
	"srcFull": "../fproject/images/full/3.jpg",
	"alt": "3 photo description",
	"author": "Author 2",
	"likes": 3,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-4.jpg",
	"srcFull": "../fproject/images/full/4.jpg",
	"alt": "4 photo description",
	"author": "Author 4",
	"likes": 4,
	"width": 1280,
	"height": 788
},
{
	"srcThumb": "../fproject/images/thumbnails/th-5.jpg",
	"srcFull": "../fproject/images/full/5.jpg",
	"alt": "5 photo description",
	"author": "Author 5",
	"likes": 5,
	"width": 1280,
	"height": 720
},
{
	"srcThumb": "../fproject/images/thumbnails/th-6.jpg",
	"srcFull": "../fproject/images/full/6.jpg",
	"alt": "6 photo description",
	"author": "Author 6",
	"likes": 6,
	"width": 1280,
	"height": 899
},
{
	"srcThumb": "../fproject/images/thumbnails/th-7.jpg",
	"srcFull": "../fproject/images/full/7.jpg",
	"alt": "7 photo description",
	"author": "Author 7",
	"likes": 7,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-8.jpg",
	"srcFull": "../fproject/images/full/8.jpg",
	"alt": "8 photo description",
	"author": "Author 8",
	"likes": 8,
	"width": 854,
	"height": 1280
},
{
	"srcThumb": "../fproject/images/thumbnails/th-9.jpg",
	"srcFull": "../fproject/images/full/9.jpg",
	"alt": "9 photo description",
	"author": "Author 9",
	"likes": 9,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-10.jpg",
	"srcFull": "../fproject/images/full/10.jpg",
	"alt": "10 photo description",
	"author": "Author 10",
	"likes": 10,
	"width": 864,
	"height": 1280
},
{
	"srcThumb": "../fproject/images/thumbnails/th-11.jpg",
	"srcFull": "../fproject/images/full/11.jpg",
	"alt": "1 photo description",
	"author": "Author 11",
	"likes": 11,
	"width": 1280,
	"height": 853 
},
{
	"srcThumb": "../fproject/images/thumbnails/th-12.jpg",
	"srcFull": "../fproject/images/full/12.jpg",
	"alt": "12 photo description",
	"author": "Author 12",
	"likes": 12,
	"width": 1280,
	"height": 854
},
{
	"srcThumb": "../fproject/images/thumbnails/th-13.jpg",
	"srcFull": "../fproject/images/full/13.jpg",
	"alt": "13 photo description",
	"author": "Author 13",
	"likes": 13,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-14.jpg",
	"srcFull": "../fproject/images/full/14.jpg",
	"alt": "14 photo description",
	"author": "Author 14",
	"likes": 14,
	"width": 1280,
	"height": 854
},
{
	"srcThumb": "../fproject/images/thumbnails/th-15.jpg",
	"srcFull": "../fproject/images/full/15.jpg",
	"alt": "15 photo description",
	"author": "Author 15",
	"likes": 15,
	"width": 853,
	"height": 1280
},
{
	"srcThumb": "../fproject/images/thumbnails/th-16.jpg",
	"srcFull": "../fproject/images/full/16.jpg",
	"alt": "16 photo description",
	"author": "Author 16",
	"likes": 16,
	"width": 853,
	"height": 1280
},
{
	"srcThumb": "../fproject/images/thumbnails/th-17.jpg",
	"srcFull": "../fproject/images/full/17.jpg",
	"alt": "17 photo description",
	"author": "Author 17",
	"likes": 17,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-18.jpg",
	"srcFull": "../fproject/images/full/18.jpg",
	"alt": "18 photo description",
	"author": "Author 18",
	"likes": 18,
	"width": 1280,
	"height": 853
},
{
	"srcThumb": "../fproject/images/thumbnails/th-19.jpg",
	"srcFull": "../fproject/images/full/19.jpg",
	"alt": "19 photo description",
	"author": "Author 19",
	"likes": 19,
	"width": 854,
	"height": 1280
},
{
	"srcThumb": "../fproject/images/thumbnails/th-20.jpg",
	"srcFull": "../fproject/images/full/20.jpg",
	"alt": "20 photo description",
	"author": "Author 20",
	"likes": 20,
	"width": 900,
	"height": 980
},
{
	"srcThumb": "../fproject/images/thumbnails/th-21.jpg",
	"srcFull": "../fproject/images/full/21.jpg",
	"alt": "21 photo description",
	"author": "Author 21",
	"likes": 21,
	"width": 1280,
	"height": 1024
},
{
	"srcThumb": "../fproject/images/thumbnails/th-22.jpg",
	"srcFull": "../fproject/images/full/22.jpg",
	"alt": "22 photo description",
	"author": "Author 22",
	"likes": 22,
	"width": 750,
	"height": 1110
} 
]


//collect all info from json
var allImages = ""
var sourcesTh = []
var sourcesFull = []
var alts = []
var authors = []
var likes = []
var widths = []
var heights = []
var len = imgJSON.length;

for(var i=0; i<len; i++){
	sourcesTh.push(imgJSON[i].srcThumb)
	sourcesFull.push(imgJSON[i].srcFull)
	alts.push(imgJSON[i].alt)
	authors.push(imgJSON[i].author)
	likes.push(imgJSON[i].likes)
	widths.push(imgJSON[i].width)
	heights.push(imgJSON[i].height)
}



// nav
var w = window,
x = w.innerWidth,
y = w.innerHeight;

$(document).scroll(function() {

	if($(window).scrollTop() > y-50){

		$('.nav').css({"background-color": "rgba(0,0,0,0.6", "padding-top" : "2px", "height":"40px"})
		$('.nav-divide').css("margin-top", "10px")


	} else{
		$('.nav').css({"background-color":"transparent", "padding-top":"20px"})

	}
});

$(document).on('click', 'a', function(event){
	if(!($(this).hasClass('pagi-butt'))){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top -50
		}, 500);
	}	
});

$(window).scroll(function() {


	if ($(this).scrollTop() >= $('#home').offset().top - 50) {
		$('.nav a').removeClass('active');
		$('.dropdown').removeClass('active');
		$('.nav a:eq(0)').addClass('active');
	}
	if ($(this).scrollTop() >= $('#gallery').offset().top - 100) {
		$('.nav a').removeClass('active');
		$('.dropdown').removeClass('active');
		$('.nav a:eq(1)').addClass('active');
	}
	if ($(this).scrollTop() >= $('#contacts').offset().top - 50) {
		$('.nav a').removeClass('active');
		$('.dropdown').addClass('active');
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


// pagination

var current_page = 1;
var records_per_page = 10;

function prevPage()
{
	if (current_page > 1) {
		current_page--;
		changePage(current_page);
	}
}

function nextPage()
{
	if (current_page < numPages()) {
		current_page++;
		changePage(current_page);
	}
}

function changePage(page)
{
	var btn_next = document.getElementById("btn_next");
	var btn_prev = document.getElementById("btn_prev");
	var gallery = document.getElementById("gallery");
	var page_span = document.getElementById("page");
	var num = numPages()

    // Validate page
    if (page < 1) page = 1;
    if (page > num) page = num;

    gallery.innerHTML = "";

    //create gallery
    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < len; i++) {
    	gallery.innerHTML += '<div class="container"> \
    	<img src="' + sourcesTh[i] + '" alt="' + alts[i] + '" class="image"> \
    	<div class="overlay"> \
    	<div class="overlay-rate"><i class="fa fa-heart-o" aria-hidden="true">' + likes[i] + 
    	'</i></div> \
    	<div class="overlay-description">Author: ' + authors[i] + ' </div> </div> </div>';
    }


//add modal zoomed img on click
var n = document.getElementsByClassName('container').length
var modalImg = document.getElementsByClassName("modal-content")[0];
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName('modal')[0];

for(var i=0; i<n; i++){

	var img = document.getElementsByClassName('image')[i];
	let modalW, modalH
	let ratio = heights[(page-1)*records_per_page+i]/widths[(page-1)*records_per_page+i]

	//calculating aspect ratio and w/h for modal image
	if(ratio<=1){
		if(x>1200)
			modalW = x*0.6
		if(x>=800 && x<=1200)
			modalW =  x*0.7
		if(x<800)
			modalW = x*0.8
		modalH = modalW*ratio
	}else{
		modalH = y
		modalW = modalH/ratio
		if(modalW > x){
			modalW = x*0.85
			modalH = modalW*ratio
		}
	}

	img.onclick = function(){
		if(ratio>1){
			if(modalW==x*0.85)
				modalImg.style.margin = "10% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else
			modalImg.style.margin="50% auto"
		modal.style.display = "block";
		modalImg.style.width = modalW+"px"
		modalImg.style.height = modalH+"px"
		var src = this.src.split("/")
		var imageNumber = parseInt(src[10].split(".")[0].split("-")[1])
		src[9] = "full"
		src[10] = imageNumber + ".jpg"
		var newSrc = src.join("/")	
		modalImg.src = newSrc

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

//change modal on right/left button clicks
(function changeModal(){
	var i;

	var l = document.getElementsByClassName("modal-left")[0];
	var r = document.getElementsByClassName("modal-right")[0];

	l.onclick = function(){
		var src = modalImg.src.split("/")
		var imageNumber = parseInt(src[10].split(".")[0])
		imageNumber-=1
		//loop images only inside of one page
		if(imageNumber==(page-1)*records_per_page && n==records_per_page)
			imageNumber = page*records_per_page
		if(imageNumber==(page-1)*records_per_page && n!=records_per_page)
			imageNumber = (page-1)*records_per_page + n
		src[10] = imageNumber + ".jpg"
		var newSrc = src.join("/")	

		let modalW, modalH
		let ratio = heights[imageNumber-1]/widths[imageNumber-1]

		if(ratio<=1){
			if(x>1200)
				modalW = x*0.6
			if(x>=800 && x<=1200)
				modalW =  x*0.7
			if(x<800)
				modalW = x*0.8
			modalH = modalW*ratio
		}else{
			modalH = y
			modalW = modalH/ratio
			if(modalW > x){
				modalW = x*0.85
				modalH = modalW*ratio
			}
		}
		modalImg.style.width = modalW + "px"
		modalImg.style.height = modalH + "px"
		if(ratio>1){
			if(modalW==x*0.85)
				modalImg.style.margin = "10% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else
			modalImg.style.margin="50% auto 2%"
		modalImg.src = newSrc

	}

	r.onclick = function(){
		var src = modalImg.src.split("/")
		var imageNumber = parseInt(src[10].split(".")[0])
		imageNumber+=1
		//loop images only inside of one page
		if(imageNumber==page*records_per_page+1 && n==records_per_page)
			imageNumber = (page-1)*records_per_page+1
		if(imageNumber==(page-1)*records_per_page+n+1 && n!=records_per_page)
			imageNumber = (page-1)*records_per_page+1
		src[10] = imageNumber + ".jpg"
		var newSrc = src.join("/")	

		let modalW, modalH
		let ratio = heights[imageNumber-1]/widths[imageNumber-1]
		
		if(ratio<=1){
			if(x>1200)
				modalW = x*0.55
			if(x>=800 && x<=1200)
				modalW =  x*0.7
			if(x<800)
				modalW = x*0.8
			modalH = modalW*ratio
		}else{
			modalH = y
			modalW = modalH/ratio
			if(modalW > x){
				modalW = x*0.85
				modalH = modalW*ratio
			}
		}
		modalImg.style.width = modalW + "px"
		modalImg.style.height = modalH + "px"
		if(ratio>1){
			if(modalW==x*0.85)
				modalImg.style.margin = "10% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else
			modalImg.style.margin="50% auto 2%"
		modalImg.src = newSrc	
		
	}	
})();


page_span.innerHTML = page + "/" + num;

if (page == 1) {
	btn_prev.style.visibility = "hidden";
} else {
	btn_prev.style.visibility = "visible";
}

if (page == num) {
	btn_next.style.visibility = "hidden";
} else {
	btn_next.style.visibility = "visible";
}
}

function numPages()
{
	return Math.ceil(len / records_per_page);
}

window.onload = function() {
	changePage(1);
};




//pri klike stal propadat' overlay 

$(document).on('click', '.fa-heart-o', function(event){
	event.preventDefault();

	$(this).toggleClass('fa-heart-o');
	$(this).toggleClass('fa-heart');
	$(this).html(parseInt($(this).text()) + 1)
});

$(document).on('click', '.fa-heart', function(event){
	event.preventDefault();

	$(this).toggleClass('fa-heart-o');
	$(this).toggleClass('fa-heart');
	$(this).html(parseInt($(this).text()) - 1)
});




//ajax call for .json file at github
/*
var imgJSON = $.ajax({
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

imgJSON = $.parseJSON(imgJSON)
console.log(imgJSON[0])
*/


function loadMap() {

	var latlng = new google.maps.LatLng(50.449631, 30.449989);

	var myOptions = {
		zoom: 15,
		center: latlng,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), myOptions);

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "gallery place"
	});

}