import $ from 'jquery';

export default () => {
  
  //$('.select-element1').selectmenu().selectmenu( "menuWidget" ).addClass( "ui-openreit" );
  //$('.select-element2').selectmenu().selectmenu( "menuWidget" ).addClass( "ui-openreit" );
  $('.analityc-select_transparentyellow.analityc-select_year').selectmenu({
  	change: function( event, ui ) {
  		$('.analityc-select_transparentyellow.analityc-select_year').trigger("change");
	},
    open: function( event, ui ) {
        $('.ui-openfed .ui-menu-item-wrapper').each(function(){
          $(this).attr('title', $(this).text());
        });
    }
  }).selectmenu( "menuWidget" ).addClass( "ui-openfed ui-openfed-year" );
  
  $('.analityc-select_transparentyellow.analityc-select_law').selectmenu({
  	change: function( event, ui ) {
  		$('.analityc-select_transparentyellow.analityc-select_law').trigger("change");
	},
    open: function( event, ui ) {
        $('.ui-openfed .ui-menu-item-wrapper').each(function(){
          $(this).attr('title', $(this).text());
        });
    }
  }).selectmenu( "menuWidget" ).addClass( "ui-openfed ui-openfed-law" );
  
  if ($(window).width() <= 580) {
    $('.analityc-select_transparentyellow.analityc-select_year').selectmenu( "menuWidget" ).css('max-width', ($(window).width() - 40)+'px');
    $('.analityc-select_transparentyellow.analityc-select_law').selectmenu( "menuWidget" ).css('max-width', ($(window).width() - 40)+'px');
  } else if ($(window).width() <= 640) {
    $('.analityc-select_transparentyellow.analityc-select_year').selectmenu( "menuWidget" ).css('max-width', ($(window).width() - 80)+'px');
    $('.analityc-select_transparentyellow.analityc-select_law').selectmenu( "menuWidget" ).css('max-width', ($(window).width() - 80)+'px');
  }
  
}
