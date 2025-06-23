document.addEventListener("DOMContentLoaded", function() {
    setCurrentPageActive(window.location.href);
});

function toggleSidebarMenu() {
    var sidebar = document.getElementById("sidebar-menu");
    var toggleButton = document.getElementById("toggle-button");

    var width = window.getComputedStyle(sidebar).width;

    if (width === "0px") {
        sidebar.style.width = "100%";
    }
    else {
        sidebar.style.width = "0px";
    }
    
    toggleButton.classList.toggle("active");
}

function setCurrentPageActive(currentPage) {
    var topbarMenu = document.getElementById("menu-list");
    var sidebarMenu = document.getElementById("sidebar-menu");

    var topbarElements = topbarMenu.getElementsByTagName("a");
    var sidebarElements = sidebarMenu.getElementsByTagName("a");

    Array.from(topbarElements).forEach(element => {
        if (element.href == currentPage) {
            element.querySelector("li").classList.add("active");
        }
    });

    Array.from(sidebarElements).forEach(element => {
        if (element.href == currentPage) {
            element.querySelector("li").classList.add("active");
        }
    });
}