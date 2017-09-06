var today = new Date();
if(today.getDay() > 2 || today.getDay() < 4)
    $("#matchdiv").show();
    $("#scorediv").hide();
} else {
    $("#scorediv").show();
    $("#matchdiv").hide();
}
