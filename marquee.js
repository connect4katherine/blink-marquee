var $ = require('./jquery');

$.fn.marquee = function() {
    var elements = $(this);
    elements.wrap(function() {
        return $('<div>').css({
            'overflow': 'hidden',
            'position': 'relative',
            'width': $(this).width(),
            'height': $(this).height()
        });
    });

    elements.each(function() {
        var element = $(this);
        element.css('position', 'absolute');

        var dummy = $('<span>').hide().appendTo(document.body);
        dummy.css('font', element.css('font'));
        dummy.text(element.text());
        var textWidth = dummy.width();

        var animate = function() {
            element.css({
                'left': element.width()
            })
            .animate({
                'left': -textWidth,
            }, 5000, animate);
        };

        animate();
    });

    return elements;
};
