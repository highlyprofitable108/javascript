if($("#waivediv").text().match([1])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
if (window.location.pathname.includes("add_drop")){
   $("#waivediv").hide();
}
