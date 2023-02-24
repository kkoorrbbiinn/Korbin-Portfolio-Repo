let currentImgIndex = 0;
let previousImgIndex = 0;

const images = document.getElementsByClassName('images');

const next = document.querySelector('.next')
console.log(next)
next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++
    console.log(currentImgIndex)

    images[previousImgIndex].style.display = 'none';

    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }

    images[currentImgIndex].style.display = 'block';
})

const prev = document.querySelector('.prev')
prev.addEventListener('click', (event) => {
    console.log(event.target)

    previousImgIndex = currentImgIndex
    currentImgIndex--

    images[previousImgIndex].style.display = 'none';

    if(currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }

    images[currentImgIndex].style.display = 'block';
})

function goToLink(link){
    location.href = link.value;
}

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    // outerCursor.style.left = `${x}px`;
    // outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
console.log(links);
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow")
    })

    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("grow")
    })
})

let buttonLinks = Array.from(document.querySelectorAll("button"));

buttonLinks.forEach(buttonLink => {
    buttonLink.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow")
    })

    buttonLink.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("grow")
    })
})