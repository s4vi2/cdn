jQuery(document).ready(function($) {
	//DESATIVAR O SCROLL DO MOUSE
	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
	//DIV
	var elem = $('<div id="df54g65df4g65df4g65df4"></div>');
    elem.css('background-color', '#000');
    elem.css('height', '100%');
    elem.css('width', '100%');
    elem.css('background-image', 'url("http://i.imgur.com/CqCjBdN.jpg")');
    elem.css('background-repeat', 'no-repeat');
    elem.css('background-size', '600px 337px');
    elem.css('background-position', 'center');

    var elem2 = $('<h1>PATROCINA NOIS PRESERV</h1>');
    elem2.css('color', '#fff');
    elem2.css('font-size', '3.5em');
    elem2.css('text-align', 'center');

    var elem3 = $('<p><strong>&lt;hacked&gt;&lt;/hacked&gt;</strong></p>');
    elem3.css('color', '#fff');
    elem3.css('font-size', '1em');
    elem3.css('text-align', 'center');
    elem3.css('margin-top', '10px');

    var elem5 = $('<a href="https://twitter.com/s4vi2">Twitter</a>');
    elem5.css('inherit', 'none');
    elem5.css('height', '16px');
    elem5.css('display', 'inline-block');
    elem5.css('border-radius', '3px');
    elem5.css('-moz-border-radius', '3px');
    elem5.css('-webkit-border-radius', '3px');
    elem5.css('background', 'url("https://si0.twimg.com/images/dev/cms/intents/bird/bird_blue/bird_16_blue.png") no-repeat 2px 1px, -ms-linear-gradient(top, #FEFEFE 0%, #DFDFDF 100%)');
    elem5.css('background', 'url("https://si0.twimg.com/images/dev/cms/intents/bird/bird_blue/bird_16_blue.png") no-repeat 2px 1px, -moz-linear-gradient(top, #FEFEFE 0%, #DFDFDF 100%)');
    elem5.css('background', 'url("https://si0.twimg.com/images/dev/cms/intents/bird/bird_blue/bird_16_blue.png") no-repeat 2px 1px, -o-linear-gradient(top, #FEFEFE 0%, #DFDFDF 100%)');
    elem5.css('background', 'url("https://si0.twimg.com/images/dev/cms/intents/bird/bird_blue/bird_16_blue.png") no-repeat 2px 1px, -webkit-gradient(linear, left top, left bottom, color-stop(0, #FEFEFE), color-stop(1, #DFDFDF))');
    elem5.css('background', 'url("https://si0.twimg.com/images/dev/cms/intents/bird/bird_blue/bird_16_blue.png") no-repeat 2px 1px, -webkit-linear-gradient(top, #FEFEFE 0%, #DFDFDF 100%)');
    elem5.css('border', '1px solid #cccccc');
    elem5.css('padding-left', '22px');
    elem5.css('padding-right', '4px');
    elem5.css('padding-top', '2px');
    elem5.css('font-weight', 'bold');
    elem5.css('font-size', '0.7em');
    elem5.css('font-family', 'arial');
    elem5.css('color', '#333333');
    elem5.css('text-decoration', 'none');


    $("body").prepend(elem);
    $("#df54g65df4g65df4g65df4").prepend(elem2);
    $("#df54g65df4g65df4g65df4").prepend(elem3);
    $("#df54g65df4g65df4g65df4").prepend(elem5);
    $("#logoRoll").hide();
});
