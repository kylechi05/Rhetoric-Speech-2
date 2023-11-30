// Slide Movement
const scrollButton = document.getElementsByClassName("material-symbols-outlined");
const slides = document.getElementsByClassName("slides");
scrollButton[0].addEventListener("click", up);
scrollButton[1].addEventListener("click", down);

var i = 0;
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
    i = 0
    if (clicks < slides.length - 1) {
        clicks++;
        console.log("Scrolled to " + clicks);
        slides[clicks].scrollIntoView();
    }
}


// Intro Slide Images
const intro = document.getElementById("intro");
const introMedia = document.getElementsByClassName("introMedia");
const introVid = document.getElementById("introVid");
intro.addEventListener("click", () => advanceMedia(introMedia));

function advanceMedia(media) {
    console.log(i);
    if (i < media.length){
        media[i].style.display = "block";
        if (i == 2) {
            media[0].style.display = "none";
            media[1].style.display = "none";
        } else if (i > 2) {
            media[i-1].style.display = "none";
        }
        if (media[i] == introVid) {
            introVid.play();
        }
        i++;
    }
}


const miss = document.getElementById("miss");
const missMedia = document.getElementsByClassName("missMedia");
miss.addEventListener("click", () => advanceNormal(missMedia));

function advanceNormal(media) {
    console.log(i);
    if (i < media.length){
        media[i].style.display = "block";
        if (i > 0) {
            media[i-1].style.display = "none";
        }
        i++;
    }
}

const cap = document.getElementById("cap");
const capMedia = document.getElementsByClassName("capMedia");
cap.addEventListener("click", () => advanceCap(capMedia));

function advanceCap(media) {
    console.log(i);
    if (i < media.length){
        media[i].style.display = "block";
        if (i > 0 && i < media.length - 4) {
            media[i-1].style.display = "none";
        }
        i++;
    }
}

const other = document.getElementById("other");
const otherMedia = document.getElementsByClassName("otherMedia");
other.addEventListener("click", () => advanceOther(otherMedia));

function advanceOther(media) {
    console.log(i);
    if (i < media.length) {
        media[i].style.display = "block";
    }
    i++;
}


const how = document.getElementById("how");
const howMedia = document.getElementsByClassName("howMedia");
how.addEventListener("click", () => advanceHow(howMedia));

function advanceHow(media) {
    console.log(i);
    if (i < media.length) {
        media[i].style.display = "inline-block";
    }
    // add the part where you can show multiple companies atst
    i++;
}