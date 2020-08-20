//=========== Variable Declaration==================
const mainImage = document.querySelector('.image');
const imageSource = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];
const buttons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.smallImage');
let index = 0;
let intervalID;

//==================Slider Functions=================
function showImage(index) {
    mainImage.src = imageSource[index];
    images[1].src = mainImage.src;
    switch (index) {
        case 0:
            images[0].src = imageSource[index + 2]
            images[2].src = imageSource[index + 1]
            break
        case 1:
            images[0].src = imageSource[index - 1]
            images[2].src = imageSource[index + 1]
            break
        case 2:
            images[0].src = imageSource[index - 1]
            images[2].src = imageSource[index - 2]
            break
        default:
    }
}

showImage(index);
generateInterval();

function calculateIndex(index, isPositive) {
    if (isPositive) {
        if (index == images.length - 1) {
            index = 0;
        } else {
            index++
        }
    } else {
        if (!index) {
            index = images.length - 1;
        } else {
            index = index - 1;
        }
    }
    return index;
}

function next() {
    clearInterval(intervalID);
    index = calculateIndex(index, true);
    showImage(index);
    generateInterval();
}
function prev() {
    clearInterval(intervalID);
    index = calculateIndex(index, false);
    showImage(index);
    generateInterval();
}

function generateInterval() {
    intervalID = setInterval(() => {
        index = calculateIndex(index, true)
        showImage(index)
    }, 3000)
}

buttons[1].addEventListener('click', next)
buttons[0].addEventListener('click', prev)