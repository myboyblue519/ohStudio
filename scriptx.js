const observerOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
};

window.addEventListener('DOMContentLoaded', (event) => { 

    // const sections =Array.from(document.getElementsByClassName('section'));
    
    // for (let section of sections) {
    //   observer.observe(section);
    // }
    
    // 
    const sections = Array.from(document.getElementsByClassName('section'));
   for (let section of sections) {
   const fadeups = section.getElementsByClassName('fade-delay');
     for (let count = 0; count < fadeups.length; count++) {
        fadeups[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
    }
  observer.observe(section);
}
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


