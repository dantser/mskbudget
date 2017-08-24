export default function dragscroll() {
  // function
  function clickAndDragScroll(elementToScroll) {
    var clicked = false,
        curXPos = 0,
        curYPos = 0;

    elementToScroll.mousemove(function(c) {
      if (clicked === true) {
        var NcurXPos = c.pageX - (elementToScroll.offset().left),
            NcurYPos = c.pageY - (elementToScroll.offset().top);
        elementToScroll.scrollLeft(elementToScroll.scrollLeft() + (curXPos - NcurXPos));
        elementToScroll.scrollTop(elementToScroll.scrollTop() + (curYPos - NcurYPos));
        curXPos = NcurXPos;
        curYPos = NcurYPos;
        $(this).css('cursor', 'move');
      }
    });

    elementToScroll.mousedown(function(c) {
      clicked = true;
      curXPos = c.pageX - (elementToScroll.offset().left);
      curYPos = c.pageY - (elementToScroll.offset().top);
    });

    elementToScroll.mouseup(function() {
      clicked = false;
      $(this).css('cursor', 'inherit');
    });
  }

  // implementation
  var elementToScroll = $(".js-drag-scroll-element");
  clickAndDragScroll(elementToScroll);
  var elementToScroll2 = $(".js-drag-scroll-element2");
  clickAndDragScroll(elementToScroll2);
  var elementToScroll3 = $(".js-drag-scroll-element3");
  clickAndDragScroll(elementToScroll3);
  var elementToScroll4 = $(".js-drag-scroll-element4");
  clickAndDragScroll(elementToScroll4);
}
