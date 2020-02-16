
$(document).ready(function(){
	// STYLE APP
	$("#change-button").on("click",function(){	
		$("#special").css("color","#0080009e");
		$(".highlight").css("background-color","#ffff0038");
		
		//use a loop to iterate through p elements and change at least 3 styles
		$("#paragraph-change p").each(function(){
			$(this).css("color","#ff8888");
			$(this).css("background-color","white");
			$(this).css("font-family",'Calistoga');
			alert($(this).html());
		})
	})
	
	// IMAGE APP
	$("#hide").on("click",function(){
		$("#picture").css("display","none");
	})
	
	$("#show").on("click",function(){
		$("#picture").fadeIn(1500);
	})
	
	$("#fade").on("click",function(){
		$("#picture").fadeOut(1500);
	})
	
	//ANIMATION APP
	
	$("#animate").on("click",function(){
		$("#animation").animate({
			opacity: '0.6',
			left: '300px',
			width:'+=20px',
			height:'+=10px'
		})
	})
	
	// USERNAME AND PASSWORD APP
	var filled = false;
	$("#demo").hide();

	$("input").change(function(){
		$("input").each(function(){
			if ($(this).val() != ''){
				filled = true;
			}
			else {
				$(this).css("background-color","#ffff0091");
				alert("Please enter information!");
				filled = false;
				return false;
			}
		})
		
		if (filled){
			$("#demo").show();
			$("#demo").append("<h2>Your Input is</h2>")
			var $username = $("input").eq(0).val();
			var $password = $("input").eq(1).val();
			$("#demo").append("<p> Username: "  + $username + "</p>")
			$("#demo").append("<p> Password: "  + $password + "</p>")
		}
	}) 
	
	$("input").on('focus', function(){
        $(this).css("background-color", "#dbf5f9");
    });
	
});
