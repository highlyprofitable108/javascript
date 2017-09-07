var today = new Date();
if(today.getDay() == 0 || today.getDay() == 1) {
    $("#articlediv").hide();
    $("#standdiv").hide();
    $("#stand2div").hide();
} else if(today.getDay() == 2) {
    $("#articlediv").show();
    $("#standdiv").show();
    $("#stand2div").show();
} else {
    $("#articlediv").show();
    $("#standdiv").hide();
    $("#stand2div").hide();
}
