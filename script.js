// JavaScript pentru interactivitate (dacă este necesar)
// De exemplu, adăugarea unor funcționalități de scroll smooth pentru linkurile din meniu

document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
    
    for (const link of scrollLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});
