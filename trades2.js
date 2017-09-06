if($("#trade2div").text().match(1) || $("#trade2div").text().match(2) || $("#trade2div").text().match(3) || $("#trade2div").text().match(4) || $("#trade2div").text().match(5)) {
    $("#trade2div").show();
    $("#trade2div").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#trade2div").hide();
}
