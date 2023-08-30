$(document).ready(function() {
    // Set the initial active theme selector based on the body's class
    var activeThemeClass = $("body").attr("class").split(" ").find(className => className.startsWith("body--"));
    if (activeThemeClass) {
        var activeTheme = activeThemeClass.replace("body--", "");
        $(".theme-selector-box__circle[data-theme='" + activeTheme + "']").addClass("active-theme-selector");
        toggleTitleClass(activeTheme);
    }

    // Add click event listener to theme selector buttons
    $(".theme-selector-box__circle").click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var selectedTheme = $(this).data("theme"); // Get the theme from data attribute

        // Remove any existing theme classes from the body
        $("body").removeClass("body--wavy-theme body--purple-theme body--static-theme");

        // Add the selected theme class to the body
        $("body").addClass("body--" + selectedTheme);

        // Update the active theme selector buttons
        $(".theme-selector-box__circle").removeClass("active-theme-selector");
        $(this).addClass("active-theme-selector");

        toggleTitleClass(selectedTheme);
    });

    // Add click event listener to Open-Ferment button
    $(".open-ferment-button").click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        $(".project-open-ferment").toggleClass('out-of-view-bottom'); // Show the dialog
        $(".bio").toggleClass("out-of-view-right"); // Add class to .bio
    });

    function toggleTitleClass(theme) {
        if (theme === "wavy-theme") {
            $(".title").addClass("wavy-theme-transparent");
        } else {
            $(".title").removeClass("wavy-theme-transparent");
        }
    }
});
