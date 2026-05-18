// WELCOME MESSAGE
window.onload = function () {

    alert("Welcome to Bright Future Tech University!");

};

// BUTTON CLICK EFFECT
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        button.innerHTML = "Opening Courses...";

    });

});

// COURSE CARD ANIMATION
const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("mouseover", function () {

        card.style.boxShadow =
        "0 10px 20px rgba(0,0,0,0.3)";

    });

    card.addEventListener("mouseout", function () {

        card.style.boxShadow =
        "0 4px 10px rgba(0,0,0,0.1)";

    });

});

// SCROLL ANIMATION
window.addEventListener("scroll", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){

            card.classList.add("show");

        }

    });

});