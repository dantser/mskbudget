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
      }
    });

    elementToScroll.mousedown(function(c) {
      clicked = true;
      curXPos = c.pageX - (elementToScroll.offset().left);
      curYPos = c.pageY - (elementToScroll.offset().top);
    });

    elementToScroll.mouseup(function() {
      clicked = false;
    });
  }

  // implementation
  var elementToScroll = $(".js-drag-scroll-element");
  clickAndDragScroll(elementToScroll);
}
