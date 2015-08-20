var $ = require('./jquery');
require('./blink');
require('./marquee');

$(document).ready(function() {
    $('div').marquee().blink();
});
