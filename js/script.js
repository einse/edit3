$(document).keypress(function (e) {
	if (e.keyCode === 13) {
		$('.p:last-child').after('<div class="p" contentEditable="true"></div>');
		$('.p:last-child').focus();
		e.preventDefault();
	}
});
