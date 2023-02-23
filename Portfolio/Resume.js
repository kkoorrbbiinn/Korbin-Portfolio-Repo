function goToLink(link){
    location.href = link.value;
}

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});