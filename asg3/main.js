var images  = document.images; 

// RANDOM IMAGE APP
window.onload = function() {
    var backimgs = ['images/bkg1.gif','images/bkg2.gif','images/bkg3.gif'];
    var rand_index = Math.floor(Math.random()* backimgs.length); 
    document.getElementById("navbar").style.backgroundImage =  "url(" +  backimgs[rand_index] + ")";
};

// SLIDE SHOW APP
var index = 0;  
var slides; 
var cap = document.getElementById ("caption");

function start (){        
    var boroughs = ['images/manhattan.jpeg','images/brooklyn.jpg','images/queens.jpg','images/bronx.jpg','images/statenisland.jpg'];
    var names = ["Manhattan", "Brooklyn", "Queens","Bronx", "Staten Island"];
    
    if (index > boroughs.length-1){
        index = 0; 
    }

    images[0].src = boroughs[index];
    cap.innerHTML = "<span class = 'borough'>" + names[index] + "</span>";
    
    index++; 

    slides = setTimeout(start,2500);
}

function stop() {
    clearTimeout(slides);
}

// CRAPS GAME APP 
var form = document.forms[0].elements;
var dice = ['images/d1.png','images/d2.png','images/d3.png','images/d4.png','images/d5.png','images/d6.png'];
var textfield = document.getElementById("show");

function craps(){
    
    var bet_in = form[0].value; // the bet input value
    if (bet_in >= 1){

        var index1 = Math.floor((Math.random()*dice.length));
        var index2 = Math.floor((Math.random()*dice.length));
        var sum = index1 + index2 + 2; // starts at index 0
        textfield.style.display = "block";
        
        images[1].src = dice[index1];
        images[2].src = dice[index2];
        
        if (sum == 7 || sum == 11){
            textfield.innerHTML = "<span class = 'bet-out'>You Won!	&#128176;</span>";
        }
        else if (sum == 2 || sum == 3 || sum == 12){
           textfield.innerHTML = "<span class = 'bet-out'>You Crapped Out &#128532;You lost $" + form[0].value + "</span>";
        }
        else { textfield.innerHTML = "<span class = 'bet-out'>Nothing so far...</span>";}
    }
}

function resetDie (){
    images[1].src = dice[0];
    images[2].src = dice[0];
    textfield.style.display = "none";
}

// CALENDAR APP
var cal_form = document.forms[1].elements;

function date (){
    var holidays = ['images/labor.jpg','images/fall.jpg','images/thanksgiving.png','images/winter.png','images/presidents.jpg','images/spring.png'];
    
    var holiday_name = ["Labor Day", "Fall Recess", "Thanksgiving Recess", "Winter Recess", "President's Day","Spring Recess"]; 
    var slot = document.getElementById("out");
    
    var months = ["January", "February", "March", "April","May", "June","July", "August", "September", "October","November","December"];
    
    
    var date_input = cal_form[0].value;
    
    if (date_input!=0){
        var d = parseDate(date_input);
        var month = d.getMonth() + 1; 
        var date = d.getDate(); 
        var year = d.getFullYear();

        // validate the date.. must be between 9/1/19-08/31/20
        if ( (year == 2019 && (month >= 9 && month <= 12)) || (year == 2020 && (month >= 1 && month <= 8)) ){

            if (month == 9 && date == 2){
                images[3].style.display = "inline";
                images[3].src = holidays[0];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[0] +". This is an NYU Holiday.</span>";
            }
            else if (month == 10 && date == 14){
                images[3].style.display = "inline";
                images[3].src = holidays[1];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[1] +". This is an NYU Holiday.</span>";
            }
            else if (month == 11 && (date >= 27 && date <= 29)){
                images[3].style.display = "inline";
                images[3].src = holidays[2];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[2] +". This is an NYU Holiday.</span>";
            }
            else if ((month == 12 && (date >= 21 && date <= 31)) || (month == 1 && (date >= 1 && date <= 5))){ 
                images[3].style.display = "inline";
                images[3].src = holidays[3];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[3] +". This is an NYU Holiday.</span>";
            }
            else if (month == 2 && date == 17){
                images[3].style.display = "inline";
                images[3].src = holidays[4];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[4] +". This is an NYU Holiday.</span>";
            }
            else if (month == 3 && (date >= 16 && date <= 22)){
                images[3].style.display = "inline";
                images[3].src = holidays[5];
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is " + holiday_name[5] +". This is an NYU Holiday.</span>";
            }
            else {
                images[3].style.display = "none";
//                images[3].src = "images/nyu.png";
                slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is not a school holiday at NYU.</span>";
            }
        }
        else {
            images[3].style.display = "none";
            slot.innerHTML = "<span class = 'holiday'>" + months[month-1]+ " " + date + ", " + year + " is an Invalid date! Try Again. </span>";
        }
    }
}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]); 
}
