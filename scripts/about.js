$(".coaches").click(function() {
	$(".selected").removeClass("selected");
	$(".coaches").addClass("selected");
	$("div[id*='container']").hide();
	$("#coaches-container").show();
});
$(".poollocs").click(function() {
	$(".selected").removeClass("selected");
	$(".poollocs").addClass("selected");
	$("div[id*='container']").hide();
	$("#poollocs-container").show();
});
$(".ach").click(function() {
	$(".selected").removeClass("selected");
	$(".ach").addClass("selected");
	$("div[id*='container']").hide();
	$("#ach-container").show();
});
$(".ach").click();