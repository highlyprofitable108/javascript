if($("#tradediv").text().match(1) || $("#tradediv").text().match(2) || $("#tradediv").text().match(3) || $("#tradediv").text().match(4) || $("#tradediv").text().match(5)) {
    $("#tradediv").show();
    $("#tradediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#tradediv").hide();
}
if($("#waivediv").text().match([1])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
if(window.location.href.indexOf("add_drop") > -1) {
    alert("Alert: Desktop!");
    $("#waivediv").hide();
} else {
    alert("Alert: NOPE!");
}

