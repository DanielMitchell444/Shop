var colors = ["blue", "white", "green"]
var currentColor = 3;
var lis = document.querySelectorAll(".container h1");


function changeColors(){
	if(currentColor < 0) currentColor = color.length - 1;
	for(var i = 0; i < lis.length; i++){
		lis[i].style.color = colors[(currentColor + i) % colors.length]
	}
}

setInterval(changeColors, 1000);


// Get the modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
var modal2 = document.getElementById("myModal2");

var img2 = document.getElementById("myImg2");
var modelImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");

img2.onclick = function(){
	modal2.style.display = "block";
	modelImg2.src = this.src;
	captionText2.innerHTML = this.alt;


}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function(){
	modal2.style.display = "none";
}


//Third picture modal image
var model3 = document.getElementById("myModal3");

var img3 = document.getElementById("myImg3");
var modelImg3 = document.getElementById("img03")
var captionText3 = document.getElementById("caption3");

img3.onclick = function(){

   model3.style.display = "block";
   modelImg3.src = this.src;
   captionText3.innerHTML = this.alt;

 }

 var span3 = document.getElementsByClassName("close3")[0];

 span3.onclick = function(){
 	model3.style.display = "none";
 }

var input = document.getElementById("")
 

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });