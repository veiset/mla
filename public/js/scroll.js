function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop() + 20;
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).scroll(function() {
  if (isScrolledIntoView('#anchor')) {
    $("#links").removeClass("anchor");
  } else {
    $("#links").addClass("anchor");
  }
});

function scrollToElement(elem, offset=0) {
  $('html, body').animate({scrollTop: $(elem).offset().top + offset}, 2000);
}
