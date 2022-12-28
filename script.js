localStorage.clear();
const localStorageVariables = ["q1", "q10.1", "q10.11", "q14.1", "q15.4", "q18.1", "q19.3", "q20", "q30.4", "q30.5", "q31", "q33", "q39.1", "q39.6", "q39.8", "q46.0", "q46.3", "q46.4", "q48.4", "q48.5", "q49.3", "q49.5", "q49.6", "q50.0", "q50.1", "q51_1", "q55_2", "q63.0.0", "q63.0.1", "q65.6", "q82.5", "q83.0", "q83.1", "q83.2", "q83.3", "q83.4", "q83.5", "q90.2"];
localStorageVariables.forEach(function (item, index) {
    localStorage.setItem(item, "0");
});
$("[data-question]").on("click", function () {
    if ($(this).attr("data-type") == "checkbox") {
        if ($(this).find("input").prop("checked") == true) {
            localStorage.setItem($(this).attr("data-question"), "1");
        }
        else {
            localStorage.setItem($(this).attr("data-question"), "0");
        }
    }
    else if ($(this).attr("data-type") == "input") {
        $(this).on("input", function(){
            if ($(this).val()) {
                localStorage.setItem($(this).attr("data-question"), $(this).val());
            }
            else {
                localStorage.setItem($(this).attr("data-question"), "0");
            }
        });
    }
    else {
        localStorage.setItem($(this).attr("data-question"), $(this).attr("data-answer"));
    }
});
$("[data-clear]").on("click", function () {
    $("[data-clear-target=" + $(this).attr("data-clear") +"]").each(function() {
        if ($(this).find("input").prop("checked") == true) {
            $(this).click();
        }
    });
});
$("[data-clear-target]").on("click", function () {
    $("[data-clear=" + $(this).attr("data-clear-target") +"]").each(function() {
        if ($(this).find("input").prop("checked") == true) {
            $(this).click();
        }
    });
});