if($("#waivediv").text().match([1])){
    $("#waivediv").show();
    $("#waivediv").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waivediv").hide();
}
$("#waivediv").click(function(){ 
    event.preventDefault();
    window.location.href = "http://www68.myfantasyleague.com/2017/add_drop?L=48963";
});
