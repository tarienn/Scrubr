
$('.scrubr-container').mousemove(function (event) {
	var parentOffset = $(this).parent().offset();

	var containerWidth = $(".scrubr-container").width();
	var menuWidth = $(".scrubr-menu").width();

	var mouseX = event.pageX - parentOffset.left;

	var percentage = mouseX/containerWidth;

	var scroll = (menuWidth - containerWidth) * percentage;

	$(".scrubr-container").scrollLeft(scroll);

	// Display debug
	$('#mouseX').text(mouseX);
	$('#percentage').text(percentage);
	$('#scroll').text(scroll);
});

$('#scrubr-menu-width').text($(".scrubr-container").width());