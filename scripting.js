var today = new Date();
if(today.getDay() == 0 || today.getDay() == 1) {
    $("#articlediv").hide();
} else {
    $("#articlediv").show();
}
if(today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 5) {
    $("#matchdiv").show();
    $("#scorediv").hide();
} else {
    $("#scorediv").show();
    $("#matchdiv").hide();
}
if($("#tradediv").text().match([1-9])) {
    $("#tradediv").show();
    $("#tradediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#tradediv").hide();
}
if($("#waivediv").text().match([1])){
    $("#waivediv").show();    
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} 
else {    
    $("#waivediv").hide();
}
