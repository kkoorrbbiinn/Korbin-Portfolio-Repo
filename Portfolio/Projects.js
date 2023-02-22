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