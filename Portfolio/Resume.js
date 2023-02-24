function goToLink(link){
    location.href = link.value;
}

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

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