import $ from 'jquery';

export default function selectbox() {
  $('.selectbox').each(function () {
    const wrapper = '<ul></ul>';
    const selBox = $(this);

    if (selBox.hasClass('selectbox-for-widgets')) {
      const imgUrl = selBox.find('option:eq(0)').data('imageurl');
      const img = selBox.find('option:eq(0)').data('image');
      const period = selBox.find('option:eq(0)').data('period');
      if (imgUrl)
        selBox.prepend('<img src="' + imgUrl + '">');
      else
        selBox.prepend('<img src="assets/images/' + img + '.png">');
      if (period)
        selBox.append('<i>' + period + '</i>')
    }

    selBox.find('select').after(wrapper);

    selBox.find('option').each(function () {
      const ttext = $(this).text();
      const vval = $(this).val();

      if (selBox.hasClass('selectbox-for-widgets')) {

        const imgUrl = $(this).data('imageurl');
        const img = $(this).data('image');
        const period = $(this).data('period');

        if ($(this).attr('data-locked')) {
          if (imgUrl)
          {
            const li = '<li class="locked" data-val=' + vval + '><img src="' + imgUrl + '"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
          else
          {
            const li = '<li class="locked" data-val=' + vval + '><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
        } else {
          if (imgUrl)
          {
            const li = '<li data-val=' + vval + '><img src="' + imgUrl + '"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
          else
          {
            const li = '<li data-val=' + vval + '><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
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
  });






  $(document).on('click', '.selectbox li', function () {
    var newval = $(this).data('val');
    $(this).parents('.selectbox').find('select').val(newval);
    var inputval = $(this).parents('.selectbox').find('select option[value='+newval+']').text();
    $(this).parents('.selectbox').find('input').val(inputval);
  });

  $(document).on('mousedown click', '.selectbox select', function (e) {
    e.preventDefault();
    $(document).find('.selectbox').removeClass('active');
    e.stopPropagation();
    this.blur();
    window.focus();
    $(this).parents('.selectbox').addClass('active');
  });

  $(document).on('click', '.selectbox', function (e) {
    $(this).find('select').click();
    e.stopPropagation();
  })

  $(document).on('mousedown click', '.selectbox__arrow', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(document).find('.selectbox').removeClass('active');
    $(this).parents('.selectbox').addClass('active');
  });

  $(document).on('click', '.selectbox ul', function () {
    $(this).removeClass('active');

    setTimeout(function () {
      $('body').click();
    },100)
  });

  $('body, html').click(() => {
    $(document).find('.selectbox').removeClass('active');
  });
}
