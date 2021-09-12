if(window.location.href.indexOf("home/48963") > -1) {
     $("#commishdiv").show();
} else {
    $("#commishdiv").hide();
}
$("#commishdiv").click(function(){ 
    event.preventDefault();
    window.location.href = "http://www68.myfantasyleague.com/2021/add_drop?L=48963";
});
