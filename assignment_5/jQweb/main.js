$(document).ready(function() {
	$("#heading a").on("click",function(){
		$('#content').empty();
		$('#css-grid').fadeIn(1500);
	})

	$('#nav').hide().delay(500).fadeIn(1000);
	$('#css-grid').hide().delay(1200).fadeIn(1500);

	$(".link").eq(0).on("click",function(){
		$('#css-grid').hide();
		$('#content').empty();
		var $video = '<iframe width="420" height="315" src="https://www.youtube.com/embed/-pAOuR8s03Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('#content').html($video);
	})
	
	$('.link').eq(1).on('click', function() {
		$('#css-grid').hide();
		$('#content').empty();
		var $dessert = '<img id = "pic" src="images/claire.jpg" border=2 width = 400px>';
		$('#content').html($dessert);
	})
	
	
	$('.link').eq(2).on('click', function() {
		$('#css-grid').hide();
		$('#content').empty();
		var $episodes = ' <div id = "episodes"><h1><u>Pastry Chef Attempts</u> </h1><ul><li><a href = "https://video.bonappetit.com/watch/pastry-chef-attempts-to-make-gourmet-kit-kats?c=series">Skittles</a></li>	<li><a href = "https://video.bonappetit.com/watch/pastry-chef-attempts-to-make-gourmet-cheetos-bon-appetit?c=series"> Cheetos</a></li>	<li><a href = "https://video.bonappetit.com/watch/gourmet-makes-pastry-chef-attempts-to-make-gourmet-twix?c=series"> Twix Bars</a></li> <li><a href = "https://video.bonappetit.com/watch/pastry-chef-attempts-to-make-gourmet-kit-kats-bon-appetit?c=series"> Kit Kats</a></li></ul></div>';
		$('#content').html($episodes);
	})

});

