if($("#tradediv").text().match(1) || $("#tradediv").text().match(2) || $("#tradediv").text().match(3) || $("#tradediv").text().match(4) || $("#tradediv").text().match(5)) {
    $("#tradediv").show();
    $("#tradediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#tradediv").hide();
}
