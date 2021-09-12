if($("#waivediv").text().match([1])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
if($("container-wrap").text().match("Current Waiver Claims"){
   $("#waivediv").hide();
}
