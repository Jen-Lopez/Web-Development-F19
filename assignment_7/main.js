// pop up modal
setTimeout(function() {
    $('#exampleModal').modal('show')
}, 2500);

// clear modal data when closed

// FORM VALIDATION

// Register button 
$("#reg-form").on("submit",function(evt){
    $("#reg-form input").each(function(){
        if ($(this).val() == "" || $(this).val() == null){
            $(this).css("border","solid red 1px");
            evt.preventDefault();
            return false;
        }
        else if ( ($(this).attr('name') == "user") && $(this).val().length < 3){
            $(this).css("border","solid red 1px");
            alert("Username must be greater than 3 characters");
            evt.preventDefault();
            return false;
        }
        else if ( ($(this).attr('name') == "pass") && $(this).val().length < 8){
            $(this).css("border","solid red 1px");
            alert("Password must be greater than 8 characters");
            evt.preventDefault();
            return false;
        }
        else {
            $(this).css("border","solid #ced4da 1px");
        }

    });
});

// Login button listener 
$("#login-form").on("submit",function(evt){
    $("#login-form input").each(function(){
        if ($(this).val() == "" || $(this).val() == null){
            $(this).css("border","solid red 1px");
            evt.preventDefault();
            return false;
        } 
        else {
            $(this).css("border","solid #ced4da 1px");
        }
    });
});

var prices = [14.99,9.99,12.99,5.99];
var products = ['blue','red','pj','hat'];
var quantity = [0,0,0,0];

// blue sweater
$("#blue-cart").on('click',function(){
    if ($("input[name=blue]:checked").val() != null) {
        var sum = parseInt($("input[name=total]").val()) + prices[0];
        sum = sum.toFixed(2);
        $("input[name=total]").val(sum);
        quantity[0] +=1;
    }
});


// red sweater
$("#red-cart").on('click',function(){
    if ($("input[name=adidog]:checked").val() != null) {
        var sum = parseInt($("input[name=total]").val()) + prices[1];
        sum = sum.toFixed(2);
        $("input[name=total]").val(sum);
        quantity[1] +=1;
    }
});

// pjs
$("#pj-cart").on('click',function(){
    if ($("input[name=pj]:checked").val() != null) {
        var sum = parseInt($("input[name=total]").val()) + prices[2];
        sum = sum.toFixed(2);
        $("input[name=total]").val(sum);
        quantity[2] +=1;
    }
});

//hat
$("#hat-cart").on('click',function(){
    if ($("input[name=hat]:checked").val() != null) {
        var sum = parseInt($("input[name=total]").val()) + prices[3];
        sum = sum.toFixed(2);
        $("input[name=total]").val(sum);
        quantity[3] +=1;
    }
});

$("#check-out").on('click',function(){
    if ( $("input[name=total]").val() != 0){
        var tval = $("input[name=total]").val(); 
        $("#total-out").text(tval);
        $('#checkout-modal').modal('show');
    }
});

// validate search form 
$("#search-form").on("submit",function(evt){
    if ($("#search-form input").val() == ""){
        $("#search-form input").css("border","solid #17a2b8 1px");
        evt.preventDefault();
        return false;
    }
});

// validate checkout form 
$("#checkout-form").on("submit",function(evt){
     $("#checkout-form input").each(function(){
        if ($(this).val() == "" || $(this).val() == null){
            $(this).css("border","solid red 1px");
            evt.preventDefault();
            return false;
        }
        else if ( ($(this).attr('name') == "zip") && $(this).val().length < 5){
            $(this).css("border","solid red 1px");
            alert("Zipcode must be 5 numbers");
            evt.preventDefault();
            return false;
        }
        else if ( ($(this).attr('name') == "credit") && $(this).val().length < 16){
            $(this).css("border","solid red 1px");
            alert("Credit Card must be 16 numbers");
            evt.preventDefault();
            return false;
        }
        else {
            $(this).css("border","solid #ced4da 1px");
        }
     });
});






