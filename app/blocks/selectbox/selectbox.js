import $ from 'jquery';

export default function selectbox() {
  $('.selectbox').each(function () {
    const wrapper = '<ul></ul>';
    const selBox = $(this);
    selBox.find('select').after(wrapper);
    selBox.find('option').each(function () {
      const ttext = $(this).text();
      const vval = $(this).val();
      if ($(this).attr('data-locked')) {
        const li = `<li class="locked" data-val=${vval}>${ttext}</li>`;
        selBox.find('ul').append(li);
      } else {
        const li = `<li data-val=${vval}>${ttext}</li>`;
        selBox.find('ul').append(li);
      }
    });
    selBox.find('li').click(function () {
      const newval = $(this).data('val');
      selBox.find('select').val(newval);
      const inputval = $(this).parent().parent().find('select option[value="+newval+"]')
      .text();
      selBox.find('input').val(inputval);
    });
    $(this).find('select').on('mousedown click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.blur();
      window.focus();
      selBox.addClass('active');
    });
    selBox.find('ul').click(function () {
      $(this).removeClass('active');
    });
    $('html').click(() => {
      $('.selectbox').removeClass('active');
    });
  });
}
