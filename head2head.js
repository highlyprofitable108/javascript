var today = new Date();
if(today.getDay() == 3) {
    $("#matchdiv").show();
    $("#scorediv").hide();
    $("#lastdiv").show();
    $("#last2div").hide();
} else if(today.getDay() == 2) {
    $("#matchdiv").show();
    $("#scorediv").hide();
    $("#lastdiv").hide();
    $("#last2div").show();
} else if(today.getDay() == 4) {
    $("#matchdiv").show();
    $("#scorediv").show();
    $("#lastdiv").hide();
    $("#last2div").hide();
} else {
    $("#matchdiv").hide();
    $("#scorediv").show();
    $("#lastdiv").hide();
    $("#last2div").hide();
}
function removeElement(ele) {
    ele.parentNode.removeChild(ele);
}
