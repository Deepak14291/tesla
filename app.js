
window.addEventListener('scroll', () => {
    var footer = document.querySelector(".schedule");
    const scrollPosition = window.scrollY; // Current scroll position
    console.log(scrollPosition);
    if (scrollPosition >= 400) {
        // footer.classList.add('active'); // Show footer
        document.querySelector(".schedule").style.visibility = "visible";
    } else {
        // footer.classList.remove('active'); // Hide footer
        document.querySelector(".schedule").style.visibility = "hidden";
    }
});


