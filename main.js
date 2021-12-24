$(document).ready (
	$(".forward-button-1").click(function () {
		var value = $(this).html();
		if (value == "Next") {
			$(".aboutme-content-1").css("display", "none");
			$(".aboutme-content-2").css("display", "flex");
		}
	}),

	$(".backward-button-1").click(function () {
		var value = $(this).html();
		if (value == "Back") {
			$(".aboutme-content-2").css("display", "none");
			$(".aboutme-content-1").css("display", "flex");
		}
	}),

	$(".forward-button-2").click(function () {
		var value = $(this).html();
		if (value == "Next") {
			$(".aboutme-content-2").css("display", "none");
			$(".aboutme-content-3").css("display", "flex");
		}
	}),

	$(".backward-button-2").click(function() {
		var value = $(this).html();
		if (value == "Back") {
			$(".aboutme-content-3").css("display", "none");
			$(".aboutme-content-2").css("display", "flex");
		}
	}),

	$(".forward-button-3").click(function() {
		var value = $(this).html();
		if (value == "Next") {
			$(".aboutme-content-3").css("display", "none");
			$(".aboutme-content-4").css("display", "flex");
		}
	}),

	$(".backward-button-3").click(function() {
		var value = $(this).html();
		if (value == "Back") {
			$(".aboutme-content-4").css("display", "none");
			$(".aboutme-content-3").css("display", "flex");
		}
	})
)
