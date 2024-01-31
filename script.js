const toggles = document.querySelectorAll('.faq-toggle')
const toggleBtns = document.querySelector('.faq-toggle i')


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.toggle('active')
        const active = toggle.parentElement.classList.contains('active')
        toggle.classList = active ? "fas fa-times" : "fas fa-chevron-down";
        // e.target.classList.toggle('active')
    })
})