var diagram;

(function() {

    function Diagram(element, settings, reset) {

        var _ = this;

        _.defaults = {
            viewBox: '270',
            box: $(element),
            data: [],
            kind: null,
            stroke: 21,
            animate: false,
            color: null,
            gradient: [],
            valClass: [],
            maxValue: null,
            padding: 0
        }

        _.options = $.extend({}, _.defaults, settings);

        _.reset = reset || false;

        if (_.reset) {
            _.options.animate = false;
            _.resetDiagram();
        }

        _.rad = Math.PI / 180;

        _.degree = _.options.maxValue / 360;

        _.element = element.split('#')[1];

        _.buildDiagrams();

        _.browser = {};
        _.browser.edge = /edge/.test(navigator.userAgent.toLowerCase());
        _.browser.ie = /msie/.test(navigator.userAgent.toLowerCase());
        _.browser.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase());
        _.browser.ff = /firefox/.test(navigator.userAgent.toLowerCase());
        _.browser.s517 = /version\/5\.1\.7/.test(navigator.userAgent.toLowerCase());
        //console.log(navigator.userAgent.toLowerCase());

        if ( _.options.animate && !_.browser.edge && !_.browser.ie11 && !_.browser.ie && !_.browser.s517){
            _.animate = _.Animate();
        }




    };


    Diagram.prototype.resetDiagram = function() {
        var _ = this;
        _.options.box.find('.svg-wrap, div[class*="__value"]').remove();
    };


    Diagram.prototype.buildDiagrams = function() {

        var _ = this, path = [];

        if(_.options.kind == 'triple'){

           path = _.tripleDiagram();

        }

        if( _.options.kind == 'ifinite' ){

            path = _.ifiniteDiagram();

        }

         if( _.options.kind == 'segment' ){

            path = _.segmentDiagram();

        }

        if( _.options.kind == 'dashed' ){

            path = _.dashedDiagram();

        }

        _.createSvg(path);

    };



    Diagram.prototype.tripleDiagram = function() {

        var _ = this, radius, degrees, val, path = [], radiusArr = [], valArr = [];

        _.startAngle = 180;
        _.direction = 0;


        for (var i = 0; i < 4; i++) {

            switch (i) {

                case 0:
                radius = (_.options.viewBox / 2) - (_.options.stroke / 2);
                degrees =  _.options.data[1] / _.degree ;
                val = _.options.data[0] - _.options.data[1];
                break;

                case 1:
                radius = radius - _.options.stroke;
                degrees =  _.options.data[1] / _.degree;
                val = _.options.data[1];
                break;

                case 2:
                radius = (_.options.viewBox / 2) - (_.options.stroke / 2);
                degrees =  _.options.data[0] / _.degree ;
                val = _.options.data[0];
                break;

                case 3:
                radius = radius - (_.options.stroke/1.5);
                degrees =  _.options.data[1] / _.degree ;
                break;

            }

            path[i] = _.calculatePath(degrees, radius);
            radiusArr[i] = radius;
            valArr[i] = val.toFixed(1).replace('.', ',');
        }

        return {path: path, radius: radiusArr, val: valArr, preV: _.options.data[1].toFixed(0) };
    };


    Diagram.prototype.ifiniteDiagram = function() {

        var _ = this, radius, degrees, val, path = {Dots:[], Gradient:[], percValue:null, faktVal:null};

        _.startAngle = -90;
        _.direction = 1;

        path.radius = radius = (_.options.viewBox / 2) - (_.options.stroke / 2);

        degrees =  _.options.data[0] / _.degree ;

        if( degrees > 360 ){
            degrees = degrees - 360;
            _.infinite = true;

        }else{
            _.infinite = false;
        }

        path.Dots[0] = _.calculatePath(degrees, radius);

        _.startAngle = -88;
        path.Dots[1] = _.calculatePath(degrees, radius);

        if (_.infinite) {
            _.startAngle = -90;
             path.Dots[2] = _.calculatePath(359, radius);

            _.startAngle = -88;
            path.Dots[3] = _.calculatePath(359, radius);
        }

        _.startAngle = 0;
        degrees = 180;
        _.calculatePath(degrees, radius);
        path.Gradient[0] = _.drawGradient( _.options.gradient, 0);

         _.startAngle = 90;
        degrees = 180;
        _.calculatePath(degrees, radius);
        path.Gradient[1] = _.drawGradient( _.options.gradient, 1);

        val = (_.options.maxValue > 0) ? (_.options.data[0]/_.options.maxValue)*100 : 0;
        path.percVal = val.toFixed(1).replace('.', ',');

        val = _.options.data[0]+'';
        path.faktVal = val.replace('.', ',');

        return path;
    };


    Diagram.prototype.segmentDiagram = function() {

        var _ = this, radius, degrees, path = {Dots:[], Gradient:[]};

        _.direction = 1;

        radius = (_.options.viewBox / 2) - (_.options.stroke / 2);


        for (var i = 0; i < _.options.data.length; i++) {

            if( i > 0 ){

                degrees =  _.options.data[i] / _.degree ;
                _.startAngle = _.startAngle + _.options.data[i-1] / _.degree;

            }else{
                degrees =  _.options.data[0] / _.degree ;
                _.startAngle = -90;
            }

            path.Dots[i] = _.calculatePath(degrees, radius-_.options.padding);

            path.Gradient[i] = _.drawGradient( _.options.gradient[i], i);

        }


        return path;
    };

    Diagram.prototype.dashedDiagram = function() {

        var _ = this, radius, degrees, path = {Dots:[], Gradient:[]};

        _.direction = 1;
        _.startAngle = -90;

        radius = (_.options.viewBox / 2) - (_.options.stroke / 2);


        for (var i = 0; i < 2; i++) {

            if (i == 0) {
                degrees =  (_.options.data[i] - 1) / _.degree;
            } else {
                degrees =  _.options.data[i] / _.degree;
            }

            path.Dots[i] = _.calculatePath(degrees, radius);

            path.Gradient[i] = _.drawGradient( _.options.gradient[i], i);

        }

        return path;

    }

    Diagram.prototype.calculatePath = function( degrees, radius ) {

        var _ = this, longPath, endAngle;


        _.x0 = Math.cos( _.startAngle * _.rad ) * radius + (_.options.viewBox / 2);
        _.y0 = Math.sin( _.startAngle * _.rad ) * radius + (_.options.viewBox / 2);

        endAngle = ( _.direction == 1 ) ? (_.startAngle + degrees) : (_.startAngle - degrees);

        _.x1 = Math.cos( endAngle * _.rad ) * radius + (_.options.viewBox / 2);
        _.y1 = Math.sin( endAngle * _.rad ) * radius + (_.options.viewBox / 2);

        longPath = (degrees > 180) ? 1 : 0;



        return ['M', _.x0, _.y0, 'A', radius, radius, 0, longPath, _.direction, _.x1, _.y1].join(' ');

    };


    Diagram.prototype.drawGradient = function(gradient, i) {

        var _ = this;

        return '<defs><linearGradient xmlns="http://www.w3.org/2000/svg" id="svg-gradient_'+ _.element +'-'+ i +'" gradientUnits="userSpaceOnUse" x1="'+ _.x0 +'" y1="'+ _.y0 +'" x2="'+ _.x1 +'" y2="'+ _.y1 +'"><stop offset="0" style="stop-color:'+ gradient[0] +'"/><stop offset="1" style="stop-color:'+ gradient[1] +'"/></linearGradient></defs>';

    };



    Diagram.prototype.createSvg = function(path){

        var _ = this, svgHead, svgBody = '', svgFoot, values = '';

        svgHead = '<div class="svg-wrap"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="'+ _.options.viewBox +'px" height="'+ _.options.viewBox +'px" viewBox="0 0 '+ _.options.viewBox +' '+ _.options.viewBox +'" xml:space="preserve" class="svg">';

        svgFoot = '</svg></div>';

        if( _.options.kind == 'triple' ){

            values = '<div class="comp-diagram__values"><div id="value-path-'+ _.element +'-2" class="comp-diagram__num comp-diagram__num_blue diagram-value" data-value="'+ path.val[2] +'">'+ path.val[2] + ' +100.0' +'</div><div id="value-path-'+ _.element +'-1" class="comp-diagram__num comp-diagram__num_pink diagram-value" data-value="'+ path.val[1] +'">'+ path.val[1] +'</div><div id="value-path-'+ _.element +'-0" class="comp-diagram__num comp-diagram__num_yellow diagram-value" data-pre-val="'+ path.preV +'" data-value="'+ path.val[0] +'">'+ path.val[0] +'</div></div>';

            svgBody += '<g><path id="path-'+ _.element +'-0" fill="none" stroke="url(#svg-gradient_'+ _.element +'-0)" stroke-width="'+ _.options.stroke +'" stroke-linecap="round" stroke-miterlimit="10" d="'+ path.path[0] +'" class="anim-diagram last" data-radius="'+ path.radius[0] +'"/><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

            svgBody += '<g><path id="path-'+ _.element +'-2" fill="none" stroke="url(#svg-gradient_'+ _.element +'-2)" stroke-width="'+ _.options.stroke +'" stroke-linecap="round" stroke-miterlimit="10" d="'+ path.path[2] +'" class="anim-diagram" data-radius="'+ path.radius[2] +'"/><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

            svgBody += '<g filter="url(#f1)"><path fill="none" stroke="#000" stroke-opacity="0.5" stroke-width="'+ (_.options.stroke-10) +'" stroke-linecap="round" stroke-miterlimit="10" d="'+ path.path[3] +'" class="anim-diagram" data-radius="'+ path.radius[3] +'" /><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

            svgBody += '<g><path id="path-'+ _.element +'-1" fill="none" stroke="url(#svg-gradient_'+ _.element +'-1)" stroke-width="'+ _.options.stroke +'" stroke-linecap="round" stroke-miterlimit="10" d="'+ path.path[1] +'" class="anim-diagram" data-radius="'+ path.radius[1] +'"/><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

            svgBody += '<filter id="f1"><feGaussianBlur stdDeviation="5"/></filter><defs><linearGradient xmlns="http://www.w3.org/2000/svg" id="svg-gradient_'+ _.element +'-0" gradientUnits="userSpaceOnUse" x1="0" y1="134" x2="268" y2="154"><stop offset="0.4586" style="stop-color:#FEE300"/><stop offset="0.7107" style="stop-color:#30B069"/></defs><defs></linearGradient><linearGradient xmlns="http://www.w3.org/2000/svg" id="svg-gradient_'+ _.element +'-1" gradientUnits="userSpaceOnUse" x1="224.0493" y1="185.9902" x2="54.2576" y2="87.9609"><stop offset="0.1748" style="stop-color:#9D308A"/><stop offset="1" style="stop-color:#FF695B"/></linearGradient></defs><defs><linearGradient id="svg-gradient_'+ _.element +'-2" gradientUnits="userSpaceOnUse" x1="51.5933" y1="241.0088" x2="241.0492" y2="51.5528"><stop offset="0" style="stop-color:#00FFFF"></stop><stop offset="1" style="stop-color:#004CCF"></stop></linearGradient></defs>';


            _.options.box.append( [values, svgHead, svgBody, svgFoot].join('') );
        }


    if( _.options.kind == 'ifinite' ){

        values = '<div class="large-diagram__values"><div class="large-diagram__percent"><span id="value-perc-path-'+ _.element +'-0" class="diagram-value" data-value="'+ path.percVal +'">'+ path.percVal +'</span>%</div><div class="large-diagram__value large-diagram__value_top">план<p class="'+ _.options.valClass[0] +'">'+ (_.options.maxValue+'').replace('.', ',') +'</p></div><div class="large-diagram__value large-diagram__value_bottom"><p id="value-path-'+ _.element +'-0" class="'+ _.options.valClass[1] +' diagram-value" data-value="'+ path.faktVal +'">'+ path.faktVal +'</p>факт</div></div>';

        svgBody += '<circle fill="none" cx="'+ _.options.viewBox/2 +'" cy="'+ _.options.viewBox/2 +'" r="'+ path.radius +'" stroke="url(#svg-gradient_'+ _.element +'-1)" stroke-width="'+ _.options.stroke +'" stroke-opacity="0.3"/>';

        if (_.infinite) {
            svgBody += '<g filter="url(#filter-'+ _.element +'-0)"><path fill="none" stroke="#000" stroke-opacity="0.5" stroke-width="'+ (_.options.stroke - 2) +'" stroke-linecap="round" d="'+ path.Dots[3] +' " class="anim-diagram anim-diagram_first" data-radius="'+ path.radius +'"/><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

            svgBody += '<path fill="none" stroke="url(#svg-gradient_'+ _.element +'-1)" stroke-width="'+ _.options.stroke +'" stroke-linecap="round" d="'+ path.Dots[2] +' " class="anim-diagram anim-diagram_first" data-radius="'+ path.radius +'" />';
        }

        svgBody += '<g filter="url(#filter-'+ _.element +'-0)"><path fill="none" stroke="#000" stroke-opacity="0.5" stroke-width="'+ (_.options.stroke - 2) +'" stroke-linecap="round" d="'+ path.Dots[1] +' " class="anim-diagram anim-diagram_second" data-radius="'+ path.radius +'"/><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

        svgBody += '<g><path id="path-'+ _.element +'-0" fill="none" stroke="url(#svg-gradient_'+ _.element +'-0)" stroke-width="'+ _.options.stroke +'" stroke-linecap="round" d="'+ path.Dots[0] +' " class="anim-diagram anim-diagram_second anim-diagram_id" data-radius="'+ path.radius +'" /><rect x="0" y="0" width="100%" height="100%" fill="none" /></g>';

         svgBody += '<filter id="filter-'+ _.element +'-0"><feGaussianBlur stdDeviation="2"/></filter>';

        _.options.box.append( [values, svgHead, svgBody, path.Gradient[0], path.Gradient[1], svgFoot].join('') );

    }


    if( _.options.kind == 'segment' ){


        for (var i = 0; i < path.Dots.length; i++) {
            svgBody += '<path id="'+ _.element +'-'+ i +'" fill="none" stroke="url(#svg-gradient_'+ _.element +'-'+ i +')" stroke-width="'+ _.options.stroke +'" d="'+ path.Dots[i] +' " class="segment-diagram__sector anim-diagram" />'+ path.Gradient[i];
        }


        _.options.box.append( [svgHead, svgBody, svgFoot].join('') );

    }

     if( _.options.kind == 'dashed' ){

        for (var i = 0; i < path.Dots.length; i++) {
            svgBody += '<path id="'+ _.element +'-'+ i +'" fill="none" stroke="url(#svg-gradient_'+ _.element +'-'+ i +')" stroke-width="'+ _.options.stroke +'" d="'+ path.Dots[i] +' " stroke-dasharray="2,5"/>'+ path.Gradient[i];
        }

        _.options.box.append( [svgHead, svgBody, svgFoot].join('') );
    }

};




Diagram.prototype.Animate = function() {

    var _ = __ = this, tLength;

     _.options.box.find('.anim-diagram').each(function() {

        tLength = Math.ceil($(this).get(0).getTotalLength());
        $(this).attr( {'stroke-dasharray': tLength +','+ tLength , 'stroke-dashoffset': tLength } );

    });

    _.options.box.find('.comp-diagram__values .diagram-value').html('');
    _.options.box.find('.large-diagram__values .diagram-value').html(0);

function animation(el) {

    if (!_.infinite) {
        var $anim_obj;

        if (el === undefined) {
            $anim_obj = $('#'+ _.element +' .anim-diagram');
        } else {
            $anim_obj = $('.slider_diagrams '+ el +' #'+ _.element +' .anim-diagram');
        }
        $anim_obj.each(function() {

            var _ = $(this),
            doffset = null,
            last = false,
            delta = null,
            curValue = [],
            val = [],
            v = [],
            stP = [],
            valueItem = [],
            dataValue = [],
            value = [],
            valDelta = [],
            PreValue = [],
            curPreValue = [],
            delay = 500;

            delta = (Math.PI * _.attr('data-radius')/180);
            if (__.browser.ff) {
					delta = delta*15;
            } else {
            	delta = delta*3;
            }


            doffset = +_.attr('stroke-dashoffset');
            doffset = doffset.toFixed(0);

            val[0] = $('#value-'+ _.attr('id'));
            val[1] = $('#value-perc-'+ _.attr('id'));

            for (var i = 0; i < val.length; i++) {

                curValue[i] = curPreValue[i] = 0;
                v[i] = false;

                if(val[i].length > 0){

                     valueItem[i] = val[i];
                     dataValue[i] = valueItem[i].attr('data-value');
                     value[i] = +dataValue[i].split(',')[0];
                     v[i] = true;

                     valDelta[i] = value[i]/(doffset/delta);
                     valDelta[i] = Math.round(valDelta[i]);

                     if( _.hasClass('last') ){
                        delay = 1500;
                        PreValue[i] = +valueItem[i].attr('data-pre-val');
                        valDelta[i] = PreValue[i]/(doffset/delta);
                        valDelta[i] = Math.round(valDelta[i]);
                        stP[i] = PreValue[i] + value[i];
                        last = true;
                    }

                } else {
                    v[i] = false;
                }

            }



            setTimeout(function anim() {

                if( doffset > 0 ){

                    setTimeout(anim, 1);

                    _.attr('stroke-dashoffset', doffset);
                    doffset = doffset - delta;

                    for (var i = 0; i < v.length; i++) {

                        if (v[i]) {
                            if (!last) {
                                valueItem[i].html(curValue[i]);
                            } else {

                                if ( curValue[i] > stP[i] ) {
                                    valueItem[i].html(curPreValue[i]);
                                    curPreValue[i] = curPreValue[i] - valDelta[i];
                                }

                            }
                            curValue[i] = curValue[i] + valDelta[i];
                        }

                    }

                }else{
                    _.attr('stroke-dashoffset', 0);
                    for (var i = 0; i < v.length; i++) {
                        if (v[i]) {
                            valueItem[i].html(dataValue[i]);
                        }
                    }
                }

            }, delay);

        });

    } else {
        //infinite diagram

        var delta, doffsetFrst, doffsetSec, doffset,
        val = [],
        curValue = [],
        v = [],
        valueItem = [],
        dataValue = [],
        value = [],
        valDelta = [],
        frstDgOb,
        secDgOb,
        idDg;

        if (el === undefined) {
            frstDgOb = $('#'+ _.element +' .anim-diagram_first');
            secDgOb = $('#'+ _.element +' .anim-diagram_second');
            idDg = $('#'+ _.element +' .anim-diagram_id').attr('id');
        } else {
            frstDgOb = $('.slider_diagrams '+ el +' #'+ _.element +' .anim-diagram_first');
            secDgOb = $('.slider_diagrams '+ el +' #'+ _.element +' .anim-diagram_second');
            idDg = $('.slider_diagrams '+ el +' #'+ _.element +' .anim-diagram_id').attr('id');
        }


        delta = (Math.PI * secDgOb.attr('data-radius')/180);
        if (__.browser.ff) {
        	delta = delta*15;
        } else {
        	delta = delta*3;
        }

        doffsetFrst = +frstDgOb.attr('stroke-dashoffset');
        doffsetFrst = +doffsetFrst.toFixed(0);

        doffsetSec = +secDgOb.attr('stroke-dashoffset');
        doffsetSec = +doffsetSec.toFixed(0);

        doffset = doffsetFrst + doffsetSec;

        val[0] = $('#value-'+ idDg);
        val[1] = $('#value-perc-'+ idDg);

        for (var i = 0; i < val.length; i++) {

            curValue[i] = 0;
            v[i] = false;

            if(val[i].length > 0){

               valueItem[i] = val[i];
               dataValue[i] = valueItem[i].attr('data-value');
               value[i] = +dataValue[i].split(',')[0];
               v[i] = true;

               valDelta[i] = value[i]/(doffset/delta);
               valDelta[i] = Math.round(valDelta[i]);

            } else {
                v[i] = false;
            }

        }

        setTimeout(function animInf() {

            if (doffset > 0) {

                setTimeout(animInf, 1);
                doffset = doffset - delta;

                if (doffsetFrst > 0) {

                    frstDgOb.attr('stroke-dashoffset', doffsetFrst);
                    doffsetFrst = doffsetFrst - delta;

                } else {

                    frstDgOb.attr('stroke-dashoffset', 0);

                    secDgOb.attr('stroke-dashoffset', doffsetSec);
                    doffsetSec = doffsetSec - delta;

                }

                for (var i = 0; i < v.length; i++) {

                    if (v[i]) {
                        valueItem[i].html(curValue[i]);
                        curValue[i] = curValue[i] + valDelta[i];
                    }

                }

            } else {

                secDgOb.attr('stroke-dashoffset', 0);

                for (var i = 0; i < v.length; i++) {
                    if (v[i]) {
                        valueItem[i].html(dataValue[i]);
                    }
                }

            }


        }, 500);


    }

}


$('.sections').on('afterChange', function(event, slick) {
    if( slick.options.sliderId == 'sections'){
        animation('div[data-slick-index="0"]');
    }
});

$('.slider_diagrams').on('afterChange', function() {
    animation('.slick-current');
});

return animation;

};

var diagramObject = [];
diagram = function(element, settings) {

    if (diagramObject[element] instanceof Diagram) {
        diagramObject[element] = new Diagram(element, settings, true);
        console.log(diagramObject[element]);
        //diagramObject[element](element, settings);
    } else {
        diagramObject[element] = new Diagram(element, settings);
    }

    return diagramObject[element];
};


}());


$(document).ready(function() {

    $(document).on('mouseover', '.segment-diagram__sector', function(e) {

        var ofsT = $(this).parent().parent().offset().top,
            ofsL = $(this).parent().parent().offset().left,
            X = e.pageX,
            Y = e.pageY;

       $('.diagram-tabs__span-js').fadeOut(321);
       $('#button_'+ $(this).attr('id')).find('.diagram-tabs__span-js').fadeIn(321);

       $('#floating_'+ $(this).attr('id')).css({top: Y-ofsT+25, left: X-ofsL+7}).fadeIn(321);

   });

    $(document).on('mousemove', '.segment-diagram__sector', function(e) {
        var ofsT = $(this).parent().parent().offset().top,
        ofsL = $(this).parent().parent().offset().left,
        X = e.pageX,
        Y = e.pageY;
        $('#floating_'+ $(this).attr('id')).css({top: Y-ofsT+25, left: X-ofsL+7});
    });

    $(document).on('mouseleave', '.segment-diagram__sector', function() {

       $('.diagram-tabs__span-js, .segment-diagram__floating').fadeOut(321);

    });


    $('.diagram-tabs__btn').hover(function() {

        var id = $(this).attr('id').split('_')[1];
        $('#'+id).addClass('segment-diagram__sector_hover');

    }, function() {

        $('.segment-diagram__sector').removeClass('segment-diagram__sector_hover');

    });

    $('.diagram-tabs__btn').click(function() { return false; });


});
