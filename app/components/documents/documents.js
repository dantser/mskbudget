export default function () {
  $('.js-enterform').each(function() {
      $(this).find('input').keypress(function(e) {
          // Enter pressed?
          e.preventDefault();
          if(e.which == 10 || e.which == 13) {
              this.form.submit();
          }
      });
  });
}
