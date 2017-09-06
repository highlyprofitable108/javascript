var today = new Date();
if(today.getDay() == 0 || today.getDay() == 1) {
    $("#articlediv").hide();
} else {
    $("#articlediv").show();
}
if($("#waivediv").text().match([1])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
