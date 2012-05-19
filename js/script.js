var plan_click = "plan-clicked";

$("#plan-one").click(function(event) {
	$(this).addClass(plan_click);
	$('#plan-two').removeClass(plan_click);
});

$("#plan-two").click(function(event) {
	$(this).addClass(plan_click);
	$('#plan-one').removeClass(plan_click);
});

// $("#register").click(function(event) {
// 	event.preventDefault();
// 	var amount = 20;
// 	if ($("#plan-one").hasClass(plan_click)) {
// 		amount = 10;
// 	}
	
// 	if(confirm("Registering will charge your card for $" + amount + ". Continue?")) {
// 		window.location.href = "library.html";
// 	}
// });

$('#advanced-search').on('shown', function () {
	$("#advanced-search-icon").removeClass("icon-chevron-down");
	$("#advanced-search-icon").addClass("icon-chevron-up");
});

$('#advanced-search').on('hidden', function () {
	$("#advanced-search-icon").removeClass("icon-chevron-up");
	$("#advanced-search-icon").addClass("icon-chevron-down");
});

$(".btn-request").hover(function(inEvent) {
	$(this).popover('toggle');
}, function(outEvent) {
	$(this).popover('toggle');
});

$("#accept-tandc").click(function(event) {
	window.location="library.html";
});