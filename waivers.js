if($("#waivediv").text().match([1-9])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
