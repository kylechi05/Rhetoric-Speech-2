// Slide Movement
const scrollButton = document.getElementsByClassName("material-symbols-outlined");
const slides = document.getElementsByClassName("slides");
scrollButton[0].addEventListener("click", up);
scrollButton[1].addEventListener("click", down);

let clicks = 0;
slides[clicks].scrollIntoView();

function up() {
    if (clicks > 0) {
        clicks--;
        console.log("Scrolled to " + clicks);
        slides[clicks].scrollIntoView();
    }
}

function down() {
    if (clicks < slides.length - 1) {
        clicks++;
        console.log("Scrolled to " + clicks);
        slides[clicks].scrollIntoView();
    }
}



// Image Iterator for each slide
var i = 0;

// Shows Image on Click
function advanceOne(imageArray) {
    console.log('hei');
    if (i < imageArray.length){
        imageArray[i].style.display = 'block';
        i++;
    }
}

// Intro Slide Images
const intro = document.getElementById("intro");
const introImages = document.getElementsByClassName("introImages");
intro.addEventListener("click", () => advanceOne(introImages));