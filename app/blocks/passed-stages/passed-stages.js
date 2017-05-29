import $ from 'jquery';

export default function passedStages() {

  $(window).on('resize', function() {
    if ($('.passed-stages__sectored-round').length) {
      self.correctSectoredRounds();
    }
  });
  
  if ($('.passed-stages__sectored-round').length) {
    self.correctSectoredRounds();
  }
  
  function correctSectoredRounds() {
  
    var self = this;
        
    $('.passed-stages__sectored-round').each(function() {
            
      var count = parseInt($(this).attr('sector-count'));
            
      var datalist = [];
            
      for (var i = 0; i < count; i++) {
        datalist[i] = 1;
      }
            
      var fill_sectors = $(this).attr('fill-sectors');
            
      var fill = [];
      if (fill_sectors.length) {
        fill = fill_sectors.split(',');
      }
            
      $(this).attr('width', parseInt($(this).css('width')));
      $(this).attr('height', parseInt($(this).css('height')));
        
      var canvas = $(this).get(0);
      var ctx = canvas.getContext('2d');
        
      var stroke_width = parseInt($(this).attr('stroke-width'));
            
      self.setSectoredCircle(ctx, canvas.width, canvas.height, datalist, fill, stroke_width); 
            
    })
  }
  
  function setSectoredCircle(ctx, w, h, datalist, fill_sectors, stroke_width) {
        
    var default_fill = $(ctx.canvas).attr('default-fill') || '#e4e4e4';
        
    var radius = h / 2 - stroke_width/2;
    var centerx = w / 2;
    var centery = h / 2;
    var total = 0;
        
    for(x=0; x < datalist.length; x++) { total += datalist[x]; }; 
        
    var between = stroke_width / 400;
        
    if (between < 0.05) between = 0.07;
        
    console.log(between)
        
    var lastend = between / 2;
    var offset = Math.PI / 2;
        
    for (x=0; x < datalist.length; x++) {

      var thispart = datalist[x]; 
      ctx.beginPath();

      var grd=ctx.createLinearGradient(0,0,0,250);
      grd.addColorStop(0,"#80c440");
      grd.addColorStop(1,"#c2d41f");

      var arcsector = Math.PI * (2 * thispart / total) - between;
      ctx.arc(centerx, centery, radius, lastend - offset, lastend + arcsector - offset, false);
      ctx.lineWidth = stroke_width;

      var fill = false;
            
      for (var j = 0; j < fill_sectors.length; j++) {
        if (fill_sectors[j] == x) {
                
          fill = true;
          break;
                    
        }
      }
            
      if (fill) {
        ctx.strokeStyle = grd;
      } else {
        ctx.strokeStyle = default_fill;
      }
      ctx.stroke();
      ctx.closePath();
      lastend += arcsector + between;
    }
  }
}
