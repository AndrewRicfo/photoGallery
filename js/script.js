"use strict";
// preloader till content is loaded
$(window).on('load', function() {
		// Animate loader off screen
		$(".preloader").fadeOut("slow");;
	});


$('.dropdown-content').on('mouseenter', function(){
	$('.dropdown').toggleClass('active')
})

$('.dropdown-content').on('mouseleave', function(){
	$('.dropdown').toggleClass('active')
})

// uploading images
//ajax call for .json file at github
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
var keywords = []

for(var i=0; i<len; i++){
	sourcesTh.push(imgJSON[i].srcThumb)
	sourcesFull.push(imgJSON[i].srcFull)
	alts.push(imgJSON[i].alt)
	authors.push(imgJSON[i].author)
	likes.push(imgJSON[i].likes)
	widths.push(imgJSON[i].width)
	heights.push(imgJSON[i].height)
	keywords.push(imgJSON[i].keywords)
}



// nav
var w = window,
x = w.innerWidth,
y = w.innerHeight;

window.addEventListener('resize', setWindowSize);
function setWindowSize() {
	x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

$(document).scroll(function() {

	if($(window).scrollTop() > y-50){
		if(x>1200)
			$('.nav').css({"background-color": "rgba(0,0,0,0.6", "padding-top" : "2px", "height":"55px"})
		else
			$('.nav').css({"background-color": "rgba(0,0,0,0.6", "padding-top" : "2px", "height":"40px"})
		$('.nav-divide').css("margin-top", "10px")


	} else{
		$('.nav').css({"background-color":"transparent", "padding-top":"20px"})

	}
});

$(document).on('click', 'a', function(event){
	if(!($(this).hasClass('btn'))){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 30
		}, 500);
	}	
});

$(window).scroll(function() {


	if ($(this).scrollTop() >= $('#home').offset().top - 50) {
		$('.nav a').removeClass('active');
		$('.dropdown').removeClass('active');
		$('.nav a:eq(0)').addClass('active');
	}
	if ($(this).scrollTop() >= $('#gallery-wrapper').offset().top - 100) {
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
		changePage(current_page, 1, 0);
	}
}

function nextPage()
{
	if (current_page < numPages()) {
		current_page++;
		changePage(current_page, 1, 0);
	}
}


function changePage(page, flag, ma)
{
	var btn_next = document.getElementById("btn_next");
	var btn_prev = document.getElementById("btn_prev");
	var gallery = document.getElementById("gallery");
	var page_span = document.getElementById("page");
	var num = numPages()

    // Validate page
    if (page < 1) page = 1;
    if (page > num) page = num;

    if(!$('#search-field').val()){
    	$("#pagination").css('display', 'block')
    	$('.modal-left').css('display', 'block')
    	$('.modal-right').css('display', 'block')
    }
    if(flag==2){
    	$('#pagination').css('display', 'none')
    	$('.modal-left').css('display', 'none')
    	$('.modal-right').css('display', 'none')
    }


    //create gallery
    gallery.innerHTML = "";
    if(flag == 1){
    	for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < len; i++) {
    		var keyString = " "
    		for(var j=0;j<keywords[i].length; j++){
    			keyString += keywords[i][j] + " "
    		}
    		keyString = keyString.slice(0, keyString.length-1)

    		gallery.innerHTML += '<div class="container"> \
    		<img src="' + sourcesTh[i] + '" alt="' + alts[i] + '" class="image' + keyString +'"> \
    		<div class="overlay"> \
    		<div class="overlay-rate"><i class="fa fa-heart-o" aria-hidden="true">' + likes[i] + 
    		'</i></div> \
    		<div class="overlay-description">Author: ' + authors[i] + ' </div> </div> </div>';
    	}
    }
    if(flag == 2){
    	for (var i = 0;  i < ma.length; i++) {
    		gallery.innerHTML += '<div class="container"> \
    		<img src="' + sourcesTh[ma[i]] + '" alt="' + alts[ma[i]] + '" class="image"> \
    		<div class="overlay"> \
    		<div class="overlay-rate"><i class="fa fa-heart-o" aria-hidden="true">' + likes[ma[i]] + 
    		'</i></div> \
    		<div class="overlay-description">Author: ' + authors[ma[i]] + ' </div> </div> </div>';
    	}
    }


    

	//add modal zoomed img on click
	var n = document.getElementsByClassName('container').length
	var modalImg = document.getElementsByClassName("modal-content")[0];
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementsByClassName('modal')[0];

	for(var i=0; i<n; i++){

		var img = document.getElementsByClassName('image')[i];
		let modalW, modalH
		let ratio
		if(flag == 1)
			ratio = heights[(page-1)*records_per_page+i]/widths[(page-1)*records_per_page+i]
		if(flag==2)
			ratio = heights[ma[i]]/widths[ma[i]]

	// calculating aspect ratio and w/h for modal image
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
			if(modalW == x*0.85)
				modalImg.style.margin="25% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else{
			if(x < 1000)
				modalImg.style.margin="50% auto"
			else
				modalImg.style.margin="7% auto 0"
		}
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
			if(modalW == x*0.85)
				modalImg.style.margin="25% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else{
			if(x < 1000)
				modalImg.style.margin="50% auto"
			else
				modalImg.style.margin="7% auto 0"
		}
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
			if(modalW == x*0.85)
				modalImg.style.margin="25% auto"
			else
				modalImg.style.margin="0 auto"
		}
		else{
			if(x < 1000)
				modalImg.style.margin="50% auto"
			else
				modalImg.style.margin="7% auto 0"
		}
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
} //end of func


//search
$('#search-field').on('input', function(){
	var matchesArray = []
	for(var i=0; i<len;i++){
		if(new RegExp($('#search-field').val()).test(authors[i]))
			matchesArray.push(i)
	}
	changePage(1, 2, matchesArray)
	if(!$('#search-field').val()){
		$("#pagination").css('display', 'block')
		$('.modal-left').css('display', 'block')
		$('.modal-right').css('display', 'block')
		changePage(1,1,0)
	}

})

//sort
$('.btn-sort').on('click', function(){
	 $("#gallery").fadeTo(100, 0.2);
	var value = $(this).html().toLowerCase()
	var matchesArray = []
	if($(this).html().toLowerCase() == 'all'){
		changePage(1,1,0)
	}
	else{
		for(var i=0; i<len;i++){
			if(keywords[i].some(function(x){
				return(x==value)
			}))
				matchesArray.push(i)
			}
			changePage(1, 2, matchesArray)
		}
		 $("#gallery").fadeTo(1000, 1);
	})




function numPages()
{
	return Math.ceil(len / records_per_page);
}

window.onload = function() {
	changePage(1, 1, 0);
};


//likes
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


//map
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


//social sharing

var Share = {
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	}, 


	gplus: function (purl) {
		url  = 'https://plus.google.com/share?';
		url += 'url='      + encodeURIComponent(purl);
		Share.popup(url);
	},

	li: function(purl, ptitle, ptext){
		url = 'http://www.linkedin.com/shareArticle?mini=true'
		url += '&url='       + encodeURIComponent(purl)
		url += '&title='     + encodeURIComponent(ptitle)
		url += '&summary='   + encodeURIComponent(ptext);
	},

	me: function(el){
		console.log(el.href);                
		Share.popup(el.href);
		return false;                
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};

