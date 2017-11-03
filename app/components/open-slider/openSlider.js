//import $ from 'jquery';
import Swiper from 'swiper';
import fancybox from '@fancyapps/fancybox'

const $ = window.$;

export default () => {
  
  if ($('.open-slider_pdf').length) {
    var file = $('.open-slider_pdf').data('file');
    pdfViewer(file);
  } else {
    initOpenSlider();
    
    // fancybox
    $('.open-slider [data-fancybox]').fancybox({
      animationEffect: "fade",
      clickContent: false,
      buttons: ['close']
    });
  }
  
  function initOpenSlider() {
    
    const galleryTop = new Swiper('.gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 20,
      breakpoints: {
        992: {
          spaceBetween: 17,
        },
        640: {
          spaceBetween: 15,
        },
        500: {
          spaceBetween: 7
        }
      },
      onInit: function(swiper) {
        $('.gallery-top .swiper-slide').each(function(){
          var slideIndex = $(this).index() + 1;
          $(this).find('.open-slider__num-current').text(slideIndex);
        });
        var slidesLength = swiper.slides.length;
        $('.gallery-top').find('.open-slider__num-total').text(slidesLength);
      }
    });
    
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 35,
      slidesPerView: '4',
      touchRatio: 0.2,
      centeredSlides: true,
      slideToClickedSlide: true,
      breakpoints: {
        1024: {
          spaceBetween: 28
        }
      },
      roundLengths: true,
      onInit: function(swiper) {
        $('.gallery-thumbs .swiper-slide').each(function(){
          var slideIndex = $(this).index() + 1;
          $(this).find('.open-slider__num-current').text(slideIndex);
        });
        var slidesLength = swiper.slides.length;
        $('.gallery-thumbs').find('.open-slider__num-total').text(slidesLength);
      }
    });
    
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    
  }
  
  
  
  
  
  // PDF  
  function pdfViewer(fileurl) {
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.
    var url = fileurl;
    
    // The workerSrc property shall be specified.
    PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    
    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null;
    
    /**
    * Get page info from document, resize canvas accordingly, and render page.
    * @param num Page number.
    */
    function renderPage(num, canvas, ctx) {
      pageRendering = true;
      // Using promise to fetch the page
      pdfDoc.getPage(num).then(function(page) {
        
        var viewport = page.getViewport(1),
            vpWidth = viewport.width,
            vpHeight = viewport.height;
        
        if ($(canvas).parents('.open-slider__content').length) {
          var slideWidth = $(canvas).parents('.open-slider__content').width(),
              slideHeight = $(canvas).parents('.open-slider__content').height();
        } else {
          var slideWidth = $(window).width() - 40,
              slideHeight = $(window).height() - 40;
        }
            
        var slideWHcoef = slideWidth / slideHeight,
            vpWHcoef = vpWidth / vpHeight;
        
        if (vpWidth >= vpHeight) {
          if (vpWHcoef >= slideWHcoef) {
            var newVpHeight = slideHeight,
                scaleCoef = newVpHeight / vpHeight,
                newVpWidth = vpWidth * scaleCoef;
          } else {
            var newVpWidth = slideWidth,
                scaleCoef = newVpWidth / vpWidth,
                newVpHeight = vpHeight * scaleCoef;
          }
        } else {
          if (vpWHcoef >= slideWHcoef) {
            var newVpWidth = slideWidth,
                scaleCoef = newVpWidth / vpWidth,
                newVpHeight = vpHeight * scaleCoef;
          } else {
            var newVpHeight = slideHeight,
                scaleCoef = newVpHeight / vpHeight,
                newVpWidth = vpWidth * scaleCoef;
          }
        }
        
        var newViewport = page.getViewport(scaleCoef);
        
        canvas.width = newVpWidth;
        canvas.height = newVpHeight;
        
        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: newViewport
        };
        var renderTask = page.render(renderContext);
        
        // Wait for rendering to finish
        renderTask.promise.then(function() {
          pageRendering = false;
          if (pageNumPending !== null) {
            // New page rendering is pending
            renderPage(pageNumPending);
            pageNumPending = null;
          }
        });
      });
    }
    
    /**
    * If another page rendering in progress, waits until the rendering is
    * finised. Otherwise, executes rendering immediately.
    */
    function queueRenderPage(num) {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num);
      }
    }
    
    /**
    * Asynchronously downloads PDF.
    */
    PDFJS.getDocument(url).then(function(pdfDoc_) {
      pdfDoc = pdfDoc_;
      
      var numberOfPages = pdfDoc.numPages,
          firstGallerySlide = $('.open-slider_pdf .gallery-top .swiper-slide').eq(0),
          firstThumbsSlide = $('.open-slider_pdf .gallery-thumbs .swiper-slide').eq(0);
      
      for (var i = 1; i < numberOfPages; i++) {
        firstGallerySlide.clone(true).appendTo($('.gallery-top .swiper-wrapper'));
        firstThumbsSlide.clone(true).appendTo($('.gallery-thumbs .swiper-wrapper'));
      }
      
      var gallerySlide = $('.open-slider_pdf .gallery-top .swiper-slide'),
          thumbsSlide = $('.open-slider_pdf .gallery-thumbs .swiper-slide');
      
      for (var i = 1; i < numberOfPages; i++) {
        gallerySlide.eq(i).find('.open-slider__content-canvas').attr('id', 'pdf-slide-'+i);
        gallerySlide.eq(i).find('.open-slider__hidden').attr('id', 'pdf-hidden-'+i);
        gallerySlide.eq(i).find('.open-slider__hidden-canvas').attr('id', 'pdf-hidden-slide-'+i);
        gallerySlide.eq(i).find('.open-slider__image-link').attr('href', '#pdf-hidden-'+i);
        thumbsSlide.eq(i).find('.open-slider__content-canvas').attr('id', 'pdf-thumbs-'+i);
      }
      
      for (var i = 0; i < numberOfPages; i++) {  
        var galleryCanvas = document.getElementById('pdf-slide-'+i),
            galleryCtx = galleryCanvas.getContext('2d'),
            thumbsCanvas = document.getElementById('pdf-thumbs-'+i),
            thumbsCtx = thumbsCanvas.getContext('2d'),
            hiddenCanvas = document.getElementById('pdf-hidden-slide-'+i),
            hiddenCtx = hiddenCanvas.getContext('2d');
        
        renderPage(i+1, galleryCanvas, galleryCtx);
        renderPage(i+1, thumbsCanvas, thumbsCtx);
        renderPage(i+1, hiddenCanvas, hiddenCtx);
      }
      
      initOpenSlider();
      
      // fancybox
      $('.open-slider_pdf [data-fancybox]').fancybox({
        animationEffect: "fade",
        clickContent: false,
        buttons: ['close'],
        smallBtn: false
      });
      
    });
  }
}
