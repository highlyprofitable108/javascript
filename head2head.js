var today = new Date();
if(today.getDay() == 3 || today.getDay() == 4) {
    $("#matchdiv").show();
    $("#scorediv").hide();
    $("#lastdiv").show();
    $("#last2div").hide();
} else if(today.getDay() == 2) {
    $("#matchdiv").show();
    $("#scorediv").hide();
    $("#lastdiv").hide();
    $("#last2div").show();
} else {
    $("#matchdiv").hide();
    $("#scorediv").show();
    $("#lastdiv").hide();
    $("#last2div").hide();
}
function removeElement(ele) {
    ele.parentNode.removeChild(ele);
}
$('img[src="//www.nitrografixx.com/MFL-Popups/alert-icon-orange.png"]').remove();
