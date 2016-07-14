alert("hi");

$(document).ready(function(){
	alert("the document is ready")
	$('body').click(function(){
	$('p').fadeOut(1000);
	$('p').fadeIn(1000);

	$('h1').css({color:"green"}, 1000);
	$('h2').css({color:"red"}, 1000);
	$('h3').css({color:"blue"}, 1000);
	$('h4').css({color:"yellow"}, 1000);
	$('h1').slideUp(5000);
	$('h1').slideDown(5000);
	$('h5').css({color:"maroon"}, 1000);
	$('h6').css({color:"pink"}, 1000);
	$('img').fadeOut(2000);
	$('img').fadeIn(2000);

})


});