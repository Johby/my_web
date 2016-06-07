//console.log('hello') //printing
//alert('hello')//pop up

var dog_image= document.getElementById('dog');
var feed_button= document.getElementById('feed');
var feed_button1= document.getElementById('feed1');

function bark(yes){ 
	alert(yes);
}

function feed(size){
	dog_image.style.width = (dog_image.offsetWidth + size) +'px';
}

dog_image.addEventListener("click", function() {bark('stop shooting!!!!')});

feed_button.addEventListener("click", function() {feed(30.0);
});

feed_button1.addEventListener("click", function() {feed(-30.0);
});