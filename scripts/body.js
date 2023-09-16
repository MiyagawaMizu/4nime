// render Years
var listYear = document.querySelector('.movies_aside_years--list')

const renderListYear = () => {
    for (let i = 2023; i >= 2009; i--) {
        const Year = document.createElement('div')
        Year.classList.add('movies_aside_years--year')
        Year.textContent = i
        listYear.appendChild(Year)
    }
}
renderListYear()
