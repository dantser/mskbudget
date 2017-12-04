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
        const imgLayer = $(this).data('imagelayer');
        
        const img = $(this).data('image');
        const period = $(this).data('period');

        if ($(this).attr('data-locked')) {
          if (imgUrl)
          {
            if (imgLayer)
            {
              var svg = "<svg><use xlink:href='"+imgUrl+"#"+imgLayer+"'</use></svg>";
              const li = '<li class="locked" data-val="' + vval + '">' + svg + '<span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
              selBox.find('ul').append(li);
            }
            else
            {
              const li = '<li class="locked" data-val="' + vval + '"><img src="' + imgUrl + '"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
              selBox.find('ul').append(li);
            }
          }
          else
          {
            const li = '<li class="locked" data-val="' + vval + '"><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
        } else {
          if (imgUrl)
          {
            const li = '<li data-val="' + vval + '"><img src="' + imgUrl + '"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
          else
          {
            const li = '<li data-val="' + vval + '"><img src="assets/images/' + img + '.png"><span>' + ttext + '</span>' + (period ? '<i>' + period +'</i>' : '') + '</li>';
            selBox.find('ul').append(li);
          }
        }

      } else {

        if ($(this).attr('data-locked')) {
          
          if ($(this).attr('data-tooltip')) {
            const title = $(this).attr('title');
            const li = '<li class="locked js-tooltip" data-val="' + vval + '" title="'+title+'">' + ttext + '</li>';
            selBox.find('ul').append(li);
          } else if ($(this).attr('data-href')) {
            const href = $(this).attr('data-href');
            const li = '<li class="locked" data-val="' + vval + '"><a href="'+href+'">' + ttext + '</a></li>';
            selBox.find('ul').append(li);
          } else {
            const li = '<li class="locked" data-val="' + vval + '">' + ttext + '</li>';
            selBox.find('ul').append(li);
          }
          
        } else {
          if ($(this).attr('data-tooltip')) {
            const title = $(this).attr('title');
            const li = '<li class="js-tooltip" data-val="' + vval + '" title="'+title+'">' + ttext + '</li>';
            selBox.find('ul').append(li);
          }
          else if ($(this).attr('data-href')) {
            const href = $(this).attr('data-href');
            const li = '<li data-val="' + vval + '"><a href="'+href+'">' + ttext + '</a></li>';
            selBox.find('ul').append(li);
          } else {
            const li = '<li data-val="' + vval + '">' + ttext + '</li>';
            selBox.find('ul').append(li);
          }
        }

      }
    });
    
    if (!$(this).find('.selectbox__val').length) {
      var selectVal = $(this).find('option:selected').text();
      var valText = '<p class="selectbox__val">'+selectVal+'</p>';
      $(this).find('select').after(valText);
    }
  });
  
  
  
  /*$(document).on('click', '.selectbox li', function (e) {
    
    if ($(this).hasClass('locked')) {
      e.stopPropagation();
    } else {
      var newval = $(this).data('val');
      $(this).parents('.selectbox').find('select').val(newval).change();
      var inputval = $(this).parents('.selectbox').find('select option[value="'+newval+'"]').text();
      $(this).parents('.selectbox').find('select option').removeAttr('selected');
      $(this).parents('.selectbox').find('select option[value="'+newval+'"]').attr('selected', 'selected');
      $(this).parents('.selectbox').find('input').val(inputval);
      $(this).parents('.selectbox').find('.selectbox__val').text(inputval);
      
      //$(this).parent().removeClass('active');
      //setTimeout(function () {
      //  $('body').click();
      //},100)
    }
  });

  $(document).on('mousedown', '.selectbox select', function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.blur();
    window.focus();
    $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
    $(this).parents('.selectbox').toggleClass('active');
  });
  
  $(document).on('click', '.selectbox select', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '.selectbox', function (e) {
    if (!$(this).hasClass('selectbox_disabled')) {
      e.stopPropagation();
      $(document).find('.selectbox').not($(this)).removeClass('active');
      $(this).toggleClass('active');
    }
  })

  $(document).on('click', '.selectbox > *', function (e) {
    if (!$(this).parents('.selectbox_disabled').length && !$(this).is('select')) {
      e.preventDefault();
      e.stopPropagation();
      $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
      $(this).parents('.selectbox').toggleClass('active');
    }
  });

  //$(document).on('click', '.selectbox ul', function () {
  //  $(this).removeClass('active');
  //  
  //  setTimeout(function () {
  //    $('body').click();
  //  },100)
  //});

  //$('body, html').click(() => {
  //  $(document).find('.selectbox').removeClass('active');
  //});
  
  $(document).on('click', 'html, body', function(){
    $('.selectbox').removeClass('active');
  });*/
  
  
  
  $(document).on('click', '.selectbox li', function (e) {
    if (!$(this).hasClass('locked')) {
      $(this).parents('.selectbox').find('select').change();
    }
  });
  
}
