function scrollToSection() {
    const section = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        section.classList.add('bg-dark');
        section.classList.add('sticky-top');
        section.classList.add('opacity-75');

    } else {
        section.classList.remove('bg-dark');
        section.classList.remove('sticky-top');
        section.classList.remove('opacity-75');
    }
}

// Add event listener to handle scroll events
window.addEventListener('scroll', scrollToSection);

// Initial call to set initial state
scrollToSection();
