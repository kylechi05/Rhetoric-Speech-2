const scrollButton = document.getElementsByClassName("material-symbols-outlined");
const slides = document.getElementsByClassName("slides");


scrollButton[0].addEventListener("click", up);
scrollButton[1].addEventListener("click", down);


let clicks = 0;

function down() {
    if (clicks < slides.length - 1) {
        clicks++;
        console.log("Scrolled to " + clicks);
        slides[clicks].scrollIntoView();
    }
}

function up() {
    if (clicks > 0) {
        clicks--;
        console.log("Scrolled to " + clicks);
        slides[clicks].scrollIntoView();
    }
}