if($("#waive2div").text().match([1])){
    alert(window.location.href.indexOf("add_drop"));
    $("#waive2div").show();
} else {
    $("#waive2div").hide();
}
$("#waive2div").click(function(){ 
    event.preventDefault();
    window.location.href = "http://www68.myfantasyleague.com/2021/add_drop?L=48963";
});
