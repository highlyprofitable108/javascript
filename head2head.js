var today = new Date();
if(today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 5) {
    $("#matchdiv").show();
    $("#scorediv").hide();
} else {
    $("#scorediv").show();
    $("#matchdiv").hide();
}
