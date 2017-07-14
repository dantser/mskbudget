import $ from 'jquery';

export default function searchNavbar() {
  const $searchNavbar = $('#search-navbar');
  const $searchNavbarLink = $('#search-navbar-link');
  const $searchNavbarInput = $('#search-navbar-input');

  const closeSearch = function() {
    $searchNavbar.removeClass('is-active');
    $('.js-icon-navSearchLupa').removeClass('is-hidden');
    $('.js-icon-navSearchClose').addClass('is-hidden');
    return false;
  }

  const showSearch = function() {
    $searchNavbar.addClass('is-active');
    $('.js-icon-navSearchLupa').addClass('is-hidden');
    $('.js-icon-navSearchClose').removeClass('is-hidden');

    setTimeout(function() {
      $searchNavbarInput.focus();
    }, 50, function() {
      return false;
    });
  }

  if ($searchNavbar && $searchNavbarLink && $searchNavbarInput) {
    $(document).mouseup(function(event) {
      if (!$searchNavbarLink.is(event.target) && !$searchNavbarInput.is(event.target) && $searchNavbarLink.has(event.target).length === 0) {
        closeSearch();
      } else {
        event.preventDefault();

        if (!$searchNavbar.hasClass('is-active')) {
          showSearch();
        } else if (!$searchNavbarInput.is(event.target) && $searchNavbar.hasClass('is-active')) {
          closeSearch();
        }
      }
    });


    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $searchNavbar.hasClass('is-active')) { // escape key maps to keycode `27`
          closeSearch();
        }
    });
  }
}
