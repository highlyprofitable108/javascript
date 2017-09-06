var today = new Date();
if(today.getDay() = 0 || today.getDay() = 6) {
    $("#matchdiv").show();
} else {
    $("#matchdiv").hide();
}
