// STYLE APPLICATION
function change(){
    
    var nav = document.getElementById("nav-bar");
    nav.style.backgroundColor = "d5baf9";
    
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundImage = "linear-gradient(#edeaf9,#efd0d5, #edeaf9)";
    
    var navText = document.getElementsByClassName("top-page");
    navText[0].style.textShadow = "2px 2px #c298f9";
    
    var sectionText = document.getElementsByClassName("heading");
    for (var i =0; i < sectionText.length; i++) {
        sectionText[i].style.color = "#aa84dc";
        sectionText[i].style.boxShadow = "5px 5px #f2d0f5";
    }
    
    var subHeading = document.getElementsByClassName("sub-text");
    for (var i = 0; i < subHeading.length; i++) {
        subHeading[i].style.color = "#b56e90";
    }
    
    var form = document.getElementById("form-body"); 
    form.style.backgroundColor = "#ead3ea"; 
    
    var formLegend = document.getElementById("form-legend");
    formLegend.style.backgroundColor = "#ad93ce";
    
    var formButtons = document.getElementsByClassName("form-button");
    for (var i = 0; i < formButtons.length; i++) {
        formButtons[i].style.color = "#b998b9";
    }
    
    var schemeButton = document.getElementById("scheme");
    var prizeButton = document.getElementById("win");
    schemeButton.style.backgroundColor = "#c7aee8";
    schemeButton.style.borderColor = "lavender";
    schemeButton.style.color = "white";
    prizeButton.style.backgroundColor = "#c7aee8";
    prizeButton.style.borderColor = "lavender";
    prizeButton.style.color = "white";
    
    document.getElementById("picture-box").style.borderColor = "c59fcc";
    
    var prizeItems = document.getElementById("items");
    prizeItems.style.backgroundColor = "#d6bdd3";
    prizeItems.style.textShadow = "2px 2px #d2aacd";
}

//PRIZE APPLICATION

var prize_images = ["images/amazon.png","images/beans.png","images/switch.png","images/godiva.png","images/funny_glasses.png"]; 

var prize_name = ["$15 Amazon Gift Card","Beanboozled Set","Nintendo Switch","Godiva Chocolate Gift Set","Pair of Funny Glasses"];

function loadPrize() {
    var prizeList = document.getElementById("items");
    
    for (var i = 0; i < prize_name.length; i++){
        var item = i+1 + ". " + prize_name[i]; 
        prizeList.innerHTML += "<p class = 'fade-in'>" + item + "</p>";
    }
}

function randArray() {
    var random = Math.floor((Math.random() * 5));

    var picture = document.getElementById("prize-pic");
    var newText = document.getElementById("congrats");
    var winButton = document.getElementById("win");
    
    winButton.disabled = "true";    
    picture.classList.add("fade-in");
    picture.src= prize_images[random];
    
    newText.innerHTML = "<div id = 'pop-up'><p class = 'fade-in'> <span>Congrats!</span></p> <p class = 'fade-in'><span>You just won a " + prize_name[random] + "!</span></p></div>";

    setTimeout(function() {
        newText.classList.remove("fade-in");
        newText.classList.add("fade-out");
        picture.classList.remove("fade-in");
        picture.classList.add("fade-out");

        setTimeout(function() {
            newText.innerHTML = "";
            picture.src= "images/question.gif";
            newText.classList.remove("fade-out");
            picture.classList.remove("fade-out");

            winButton.disabled = false;
        }, 3000);
    }, 5000);
}

//SWAP TEXT APPLICATION
function swapT() {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    
    var p1Text = p1.textContent;
    var p2Text = p2.textContent;
    
    if (p1Text == p2Text){
        p1.textContent =  p1Text;
        p2.textContent = p2Text;
    }
    else {
        p1.textContent =  p2Text;
        p2.textContent = p1Text;
    }
}

// SWAP IMAGE APPLICATION

function swapI(){
    var image1 = document.getElementById("img1");
    var image2 = document.getElementById("img2");
    
    var image1Src = image1.src; 
    var image2Src = image2.src; 
    
    
    if (image1.src == image2Src){
        image1.src = image1Src;
        image2.src = image2Src;
    }
    
    else{
        image1.src = image2Src;
        image2.src = image1Src;    
    }
}

// NEW DOCUMENT APPLICATION

function newDoc() {
    document.open();
    document.write("<link rel = 'stylesheet' href = 'style.css'>");
    
    // DISPLAY current day, date, month, and year
    var d = new Date();
    
    var day_of_week = d.getDay();    
    var month = d.getMonth()+1;
    var day = d.getDate();
    var year =d.getFullYear();
    
    var week_day;
    
    switch(day_of_week) {
        case 0:week_day = "Sunday"; break;
        case 1:week_day = "Monday"; break; 
        case 2:week_day = "Tuesday"; break; 
        case 3:week_day = "Wednesday"; break;
        case 4:week_day = "Thursday"; break;
        case 5:week_day = "Friday"; break;
        case 6:week_day = "Saturday"; break;
    }

    document.write("<p class = 'center' id = 'time'>" + week_day +" " + month +'/' + day +'/' + year +"</p>");
    
    //HEADING 
    document.write("<h1 class = 'center dali-heading'><span> Salvador Dal&iacute;	</span></h1>");
    document.write("<h2 class = 'center dali-heading'><span><i>The Persistence of Memory</i> (1931)</span></h2>");
    
    //IMAGE
    document.write("<div class = 'center'><img id = 'memory' src = 'images/persistence.jpg'  alt = 'Persistence of Memory, Salvador Dali'></div>");
    
    //IMAGE ATTRIBUTES
    var width = document.getElementById("memory").width;
    var height = document.getElementById("memory").height;
    document.write("<p class = 'center dimensions'><b>Width:</b> <span class = 'pixel'>" + width + "px </span><b>Height:</b> <span class = 'pixel'>" + height + "px</span></p>");
    
    // INFORMATION ABOUT IMAGE
    
    document.write("<p id ='dali-info'> Salvador Dal&iacute;	 is the father of Surrealism-an art movement that depicts the inner workings of the unconscious mind. Surrealist artworks go beyond reality and illustrates one's intense subconscious desires. Above is one of Dal&iacute;'s notable pieces; The melting clocks being an outstanding feature of the painting. To most people, the melting clocks represents the passing of time in the dream world. Then again, it could also signify how time runs out and becomes irreplaceable. This work of art can be viewed at the <a href = 'https://www.moma.org/collection/works/79018' target = '_blank'>MOMA</a>, where you can draw your own interpretation.</p>");
    
    document.write("<div class = 'center'> <a href ='index.html'><button  id = 'home'> Home</button></a></div>");
    document.close();
}

// SIMPLE CONVERTER APPLICATION

function BMI() {
    var inputs = document.getElementById("form").elements;
    var name = inputs["firstname"].value; 
    var weight = inputs["wnum"].value; 
    var height = inputs["hnum"].value;
    
    var weight_button = inputs["weight"].value;
    var height_button = inputs["height"].value;
    
    var text_output = document.getElementById("out"); 
    
    var convert_weight;
    var convert_height;
    
    if (name != "" && (weight != "" && weight != 0) && (height != "" && height != 0) && weight_button != "" && height_button != ""){
        if (weight_button == "Lbs"){
            // convert lbs to kg
            convert_weight = weight * 0.453592;
        }
        else {
            convert_weight = weight;
        }
        
        if (height_button == "cm"){
            // convert cm to meters
            convert_height = height * 0.01;
        }
        else {
            // convert inches to meters
            convert_height = height * 0.0254;
        }
        
        var output = calculateBMI(convert_weight,convert_height);
        var category; 
        
        if (output < 18.5){
            category = "UNDERWEIGHT";
        }
        else if ( output >= 18.5 && output < 25) {
            category = "NORMAL";       
        }
        else if (output >= 25 && output < 30) {
            category = "OVERWEIGHT";
        }
        else {
            category = "OBESE"; 
        }
        
        text_output.value = "Hi " + name + ", your BMI is " + output + ". This indicates that you're in the " + category + " range.";
    }
}

    
function calculateBMI(weight, height){
    return (weight/(height*height)).toFixed(2);
}

// MAIN PROGRAM
window.addEventListener('load', loadPrize());