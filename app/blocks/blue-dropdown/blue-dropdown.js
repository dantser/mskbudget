export default function bluedropdown() {
  var blueDropdown = '.blue-dropdown',
      blueDropdownArrow = '.blue-dropdown__arrow',
      blueDropdownList = '.blue-dropdown__list',
      blueDropdownActiveClass = 'active',
      blueDropdownTiming = '321';

  $(document).on('click', blueDropdownArrow, function (e) {
    e.preventDefault();

    var ul = $(this).closest(blueDropdown).find(blueDropdownList);

    if ( ul.parents(blueDropdown).hasClass(blueDropdownActiveClass) ) {
      ul.slideUp(blueDropdownTiming).parents(blueDropdown).removeClass(blueDropdownActiveClass);
    } else {
      $(document).find(blueDropdown).removeClass(blueDropdownActiveClass).find(blueDropdownList).slideUp(blueDropdownTiming);
      ul.slideDown(blueDropdownTiming).parents(blueDropdown).addClass(blueDropdownActiveClass);
    }

  });

}
