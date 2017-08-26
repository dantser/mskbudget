import $ from 'jquery';

export default function selectbox() {
  $('.selectbox').each(function () {
    const wrapper = '<ul></ul>';
    const selBox = $(this);

    if (selBox.hasClass('selectbox-for-widgets')) {
      const img = selBox.find('option:eq(0)').data('image');
      const period = selBox.find('option:eq(0)').data('period');
      selBox.prepend('<img src="assets/images/' + img + '.png">');
      if (period)
        selBox.append('<i>' + period + '</i>')
    }

    selBox.find('select').after(wrapper);
    selBox.find('option').each(function () {
      const ttext = $(this).text();
      const vval = $(this).val();

      if (selBox.hasClass('selectbox-for-widgets')) {

        const img = $(this).data('image');
        const period = $(this).data('period');

        if ($(this).attr('data-locked')) {
          const li = '<li class="locked" data-val=' + vval + '><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
          selBox.find('ul').append(li);
        } else {
          const li = '<li data-val=' + vval + '><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
          selBox.find('ul').append(li);
        }

      } else {

        if ($(this).attr('data-locked')) {
          const li = '<li class="locked" data-val=' + vval + '>' + ttext + '</li>';
          selBox.find('ul').append(li);
        } else {
          const li = '<li data-val=' + vval + '>' + ttext + '</li>';
          selBox.find('ul').append(li);
        }

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
      $(document).find('.selectbox').removeClass('active');
      e.stopPropagation();
      this.blur();
      window.focus();
      selBox.addClass('active');
    });

    $(this).on('click', function (e) {
      $(this).find('select').click();
      e.stopPropagation();
    })

    $('.selectbox__arrow').on('mousedown click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(document).find('.selectbox').removeClass('active');
      $(this).parents('.selectbox').addClass('active');
    });
    selBox.find('ul').click(function () {
      $(this).removeClass('active');

      setTimeout(function () {
        $('body').click();
      },100)
    });
    $('body, html').click(() => {
      $('.selectbox').removeClass('active');
    });
  });
}
