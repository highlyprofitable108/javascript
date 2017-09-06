var today = new Date();
if(today.getDay() == 0 || today.getDay() == 1) {
    $("#articlediv").hide();
} else {
    $("#articlediv").show();
}
