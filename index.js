$(document).ready(function() {
    const $themeSelectors = $(".theme-selector-box__circle");
    const $projectButtons = $(".projects-list__project-button");
    const $projectCards = $(".project-card");
    const $bio = $(".bio");
    const $homeButton = $(".home-button"); // Add the class to your home button element

    // Set the initial active theme selector based on the body's class
    var activeThemeClass = $("body").attr("class").split(" ").find(className => className.startsWith("body--"));
    if (activeThemeClass) {
        const activeTheme = activeThemeClass.replace("body--", "");
        $themeSelectors.filter("[data-theme='" + activeTheme + "']").addClass("active-theme-selector");
        toggleTitleClass(activeTheme);
    }

    // Add click event listener to theme selector buttons
    $themeSelectors.click(function(event) {
        event.preventDefault();
        const selectedTheme = $(this).data("theme");
        $("body").removeClass("body--wavy-theme body--purple-theme body--static-theme");
        $("body").addClass("body--" + selectedTheme);
        $themeSelectors.removeClass("active-theme-selector");
        $(this).addClass("active-theme-selector");
        toggleTitleClass(selectedTheme);
    });

    // Add click event listener to project buttons
    $projectButtons.click(function(event) {
        event.preventDefault();
        $projectButtons.removeClass("project-button--active");
        $(this).addClass("project-button--active");
        const targetCardClass = $(this).data("target-card");
        $projectCards.not("." + targetCardClass).addClass("out-of-view-bottom");
        $("." + targetCardClass).removeClass("out-of-view-bottom");
        $bio.addClass("out-of-view-right");
    });

    // Add click event listener to hide project cards and reset bio
    $projectCards.click(function() {
        $projectCards.addClass("out-of-view-bottom");
        $projectButtons.removeClass("project-button--active");
        $bio.removeClass("out-of-view-right");
    });

    // Add click event listener to home button
    $homeButton.click(function(event) {
        event.preventDefault();
        $projectCards.addClass("out-of-view-bottom");
        $bio.removeClass("out-of-view-right");
    });

    function toggleTitleClass(theme) {
        const $title = $(".title");
        if (theme === "wavy-theme") {
            $title.addClass("wavy-theme-transparent");
        } else {
            $title.removeClass("wavy-theme-transparent");
        }
    }
});
