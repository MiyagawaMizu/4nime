const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
})
