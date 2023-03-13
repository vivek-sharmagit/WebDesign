let slide = document.getElementById('Slide');
let backBtn = document.getElementById('BackBtn');
let nextBtn = document.getElementById('NextBtn');

let slideImages = [
    "Images/pr1.jpg",
    // "Images/pr2.jpg" ,
    "Images/pr3.jpg",
    "Images/pr4.jpg",
    "Images/pr1.jpg",
    "Images/pr3.jpg"
];

let i = 0;

nextBtn.onclick = function () {
    if (i < 4) {
        slide.src = slideImages[i + 1];
        i++;
    }
}
backBtn.onclick = function () {
    if (i > 0) {
        slide.src = slideImages[i - 1];
        i--;
    }
}