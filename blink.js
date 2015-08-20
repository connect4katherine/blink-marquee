$.fn.blink = function() {
    var elements = $(this);
    setInterval(function() {
        elements.each(function() {
            var element = $(this);
            if (element.css('visibility') == 'hidden') {
                element.css('visibility', 'visible');
            }
            else {
                element.css('visibility','hidden');
            }
        });
    }, 500);

    return elements;
};
