if($("#tradediv").text().match([1-9])){
    $("#tradediv").show();
    $("#tradediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#tradediv").hide();
}
