if($('div.tradediv').text().match([1-9])){
    $('div.tradediv').show();
    $('div.tradediv').effect( "pulsate", {times:5}, 5000 );
} else {
    $('div.tradediv').hide();
}
