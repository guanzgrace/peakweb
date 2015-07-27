$(".groups").click(function() {
	$(".selected").removeClass("selected");
	$(".groups").addClass("selected");
	$("div[id*='container']").hide();
	$("#groups-container").show();
});
$(".join").click(function() {
	$(".selected").removeClass("selected");
	$(".join").addClass("selected");
	$("div[id*='container']").hide();
	$("#join-container").show();
});
$(".comm").click(function() {
	$(".selected").removeClass("selected");
	$(".comm").addClass("selected");
	$("div[id*='container']").hide();
	$("#comm-container").show();
});

$(".comm").click();

$(".el").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".el").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#el-groupgr").show();
});
$(".jrel").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".jrel").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#jrel-groupgr").show();
});
$(".plat").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".plat").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#plat-groupgr").show();
});
$(".gold").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".gold").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#gold-groupgr").show();
});
$(".silv").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".silv").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#silv-groupgr").show();
});
$(".bron").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".bron").addClass("selectdbar");
	$("div[id*='groupgr']").hide();
	$("#bron-groupgr").show();
});

$(".news").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".news").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#news-commce").show();
});
$(".ms").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".ms").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#ms-commce").show();
});
$(".ps").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".ps").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#ps-commce").show();
});
$(".usl").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".usl").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#usl-commce").show();
});
$(".tnl").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".tnl").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#tnl-commce").show();
});
$(".rv").click(function() {
	$(".selectdbar").removeClass("selectdbar");
	$(".rv").addClass("selectdbar");
	$("div[id*='commce']").hide();
	$("#rv-commce").show();
});

$(".news").click();