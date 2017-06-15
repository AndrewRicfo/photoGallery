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





for(var i=0; i<17; i++){

	var modal = document.getElementsByClassName('modal')[i];
	var img = document.getElementsByClassName('image')[i];
	var modalImg = document.getElementsByClassName("modal-content")[i];
	var captionText = document.getElementsByClassName("caption")[i];
	var pic_real_width, pic_real_height;


	// $('<img/>') .attr("src", $(img).attr("src"))
	// .load(function() {
 //        pic_real_width = this.width;   // Note: $(this).width() will not
 //        pic_real_height = this.height; // work for in memory images.
 //    });


 img.onclick = function(){
 	modal.style.display = "block";
 	captionText.innerHTML = this.alt;
		modalImg.src = this.src;
		// modalImg.style.width = pic_real_width
		// modalImg.style.height = pic_real_height
	}

	var span = document.getElementsByClassName("close")[i];

	modal.onclick = function(){
		modal.style.display = "none";
	}
	span.onclick = function() { 
		modal.style.display = "none";
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
