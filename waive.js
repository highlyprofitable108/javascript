if(window.location.href.indexOf("add_drop") > -1) {
     $("#waivediv").hide();
} else if($("#waive2div").text().match([1])){
    $("#waivediv").show();
} else {
    $("#waivediv").hide();
}
$("#waivediv").click(function(){ 
    event.preventDefault();
    window.location.href = "http://www68.myfantasyleague.com/2021/add_drop?L=48963";
});
