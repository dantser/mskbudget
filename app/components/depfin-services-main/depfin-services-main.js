import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {

  $( ".sortable" ).sortable({
    items: ".tile__item:not(.tile__item_pinned)",
    cancel: ".tile__item_pinned"
  });
  // $( ".tile-item" ).draggable({
  //   connectToSortable: ".tile",
  //   containment: ".tile"
  //    });
   $( ".tile, .tile-item" ).disableSelection();

   $('.widget-card-gov-programs, .widget-card-cities').find('.widget-card__pin').click();
}
