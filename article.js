var today = new Date();
if(today.getDay() == 1) {
    $("#articlediv").hide();
    $("#standdiv").hide();
    $("#stand2div").hide();
    $("#briefdiv").show();
    $("#maindiv").show();
} else if(today.getDay() == 2) {
    $("#articlediv").show();
    $("#standdiv").show();
    $("#stand2div").show();
    $("#briefdiv").hide();
    $("#maindiv").hide();
} else {
    $("#articlediv").show();
    $("#standdiv").hide();
    $("#stand2div").hide();
    $("#briefdiv").show();
    $("#maindiv").show();
}
