import $ from 'jquery';

export default () => {
  
  //$('.select-element1').selectmenu().selectmenu( "menuWidget" ).addClass( "ui-openreit" );
  //$('.select-element2').selectmenu().selectmenu( "menuWidget" ).addClass( "ui-openreit" );
  $('.analityc-select_transparentyellow').selectmenu({
  	change: function( event, ui ) {
  		$('.analityc-select_transparentyellow').trigger("change");
	}
  }).selectmenu( "menuWidget" ).addClass( "ui-openfed" );
  
}
