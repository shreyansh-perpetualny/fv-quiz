// Clear existing local storage
localStorage.clear();

//Initalize local storage variables
const localStorageVariables = ["q1", "q10.1", "q10.11", "q14.1", "q15.4", "q18.1", "q19.3", "q20", "q30.4", "q30.5", "q31", "q33", "q39.1", "q39.6", "q39.8", "q46.0", "q46.3", "q46.4", "q48.4", "q48.5", "q49.3", "q49.5", "q49.6", "q50.0", "q50.1", "q51_1", "q55_2", "q63.0.0", "q63.0.1", "q65.6", "q82.5", "q83.0", "q83.1", "q83.2", "q83.3", "q83.4", "q83.5", "q90.2"];
localStorageVariables.forEach(function (item, index) {
    localStorage.setItem(item, "0");
});

//When option with data-question attribute is clicked
$("[data-question]").on("click", function () {
    if ($(this).attr("data-type") == "checkbox") {
        if ($(this).find("input").prop("checked") == true) {
            localStorage.setItem($(this).attr("data-question"), "1"); // If checked set the local storage variable to 1
        }
        else {
            localStorage.setItem($(this).attr("data-question"), "0"); // If unchecked set the local storage variable to 0
        }
    }
    else if ($(this).attr("data-type") == "input") {
        // Do nothing. This is being handled separately
    }
    else {
        localStorage.setItem($(this).attr("data-question"), $(this).attr("data-answer")); // Set local storage variable to the value of data-answer
    }
});

// When input fields with data-type=input changes value
$("[data-type='input']").on("input", function () {
    if ($(this).val()) {
        localStorage.setItem($(this).attr("data-question"), $(this).val()); // Set local storage variable to the value of the field
    }
    else {
        localStorage.setItem($(this).attr("data-question"), "0"); // Set local storage variable to zero when empty
    }
});

//If option with data-clear (none option) attribute is clicked clear all opther options in the question group
$("[data-clear]").on("click", function () {
    $("[data-clear-target=" + $(this).attr("data-clear") +"]").each(function() {
        if ($(this).find("input").prop("checked") == true) {
            $(this).click();
        }
    });
});

//If option with data-target (question with none option) attribute is clicked clear the none option in the question group
$("[data-clear-target]").on("click", function () {
    $("[data-clear=" + $(this).attr("data-clear-target") +"]").each(function() {
        if ($(this).find("input").prop("checked") == true) {
            $(this).click();
        }
    });
});