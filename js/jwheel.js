/* From http://bizikov.ru/blog/gorizontalnyj-skroll-sajta/ */

$(function () {
	$("#middle").mousewheel(function (event, delta) {
		this.scrollLeft -= (delta * 100);
		event.preventDefault();
	});
});
