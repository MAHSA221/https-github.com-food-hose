// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("about-link");
    var aboutSection = document.getElementById("about-section");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); // 

        if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
            aboutSection.style.display = "block";  
        } else {
            aboutSection.style.display = "none"; 
        }
    });
});
