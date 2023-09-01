$(document).ready(function() {
    const $themeSelectors = $(".theme-selector-box__circle");
    const $projectButtons = $(".projects-list__project-button");
    const $projectCards = $(".project-card");
    const $bio = $(".bio");
    const $homeButton = $(".home-button");
    const $contactCard = $(".contact-card");
    const $footerHereBtn = $(".footer__here-btn");

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

    $projectButtons.click(function(event) {
        event.preventDefault();
        const targetCardClass = $(this).data("target-card");
    
        // Remove "visible" class from all cards
        $projectCards.removeClass("visible");
    
        // Remove "visible" class from all other elements
        $contactCard.removeClass("visible");
        $bio.removeClass("visible");
    
        // Add "visible" class to corresponding card after a 500ms delay
        setTimeout(function() {
            $("." + targetCardClass).addClass("visible");
        }, 500);
    });

    // Add click event listener to home button
    $homeButton.click(function(event) {
        event.preventDefault();
        $projectCards.removeClass("visible"); // Remove visible class from all cards
        $contactCard.removeClass("visible");
        $bio.addClass("visible");
    });

    // Add click event listener to footer here button
    $footerHereBtn.click(function(event) {
        event.preventDefault();
        $contactCard.addClass("visible"); // Add visible class to contact card
        $projectCards.removeClass("visible"); // Remove visible class from all cards
        $bio.removeClass("visible");
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

const contactSend = document.querySelector(".btn-send");
contactSend.addEventListener("click", (event) => {
  event.preventDefault();

  const $formToReset = $(".contact-form");
  const firstName = $(".first-name").val();
  const lastName = $(".last-name").val();
  const email = $(".email-input").val();
  var message = $(".message").val();
  

// composed email message functionality 

const body =
"Name: " +
firstName +
" " +
lastName +
"\n Email:" +
email +
"\n Message: " +
message;

const submitAlertMessage = `Thank you ${firstName}. Your Message has been sent.`;

Email.send({
Host: "smtp.elasticemail.com",
Username: "huntercheveldave@gmail.com",
Password: "F122EDB288F88258553A7845BCBE8EF87242",
To: "huntercheveldave@gmail.com",
From: email,
Subject: "New message from your website",
Body: body,
}).then((message) => alert(submitAlertMessage));
formToReset.reset();
});