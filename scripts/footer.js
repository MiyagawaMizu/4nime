const showToTop = document.querySelector('.show-to-top')

showToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
