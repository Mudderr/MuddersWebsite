document.addEventListener("DOMContentLoaded", function() {
    var collapsibles = document.getElementsByClassName("collapsible");
    var panels = document.getElementsByClassName("panel");

    // Ensure all panels are closed initially
    for (var j = 0; j < panels.length; j++) {
        panels[j].style.display = "none";
    }

    for (var i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
