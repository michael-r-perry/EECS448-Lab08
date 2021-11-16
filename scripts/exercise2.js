let index = 0;
let imgs = ["img/theRock.jpg",
            "img/theRock2.jpeg",
            "img/theRock3.jpg",
            "img/theRock4.jpg",
            "img/theRock5.jpg"];

function previous() {
    index--;
    if (index < 0) {
        index = 4;
    }
    let path = imgs[index];

    let imgTag = document.getElementById("image");
    imgTag.src = path;
}

function next() {
    index++;
    if (index > 4) {
        index = 0;
    }
    let path = imgs[index];

    let imgTag = document.getElementById("image");
    imgTag.src = path;
}