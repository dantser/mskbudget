import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
    $('.page-header .favor').on('click', function(){
      $(this).toggleClass('active');
    });
  });
  
}