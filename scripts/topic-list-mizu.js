const listMoviesHot = [
    {
        featu: 'Simple',
        pictureLink: './images/image(9).jpg',
        topicFilm: 'HDR VIETSUB',
        nameFilm: 'Herrscher of NER',
        year: 2023
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(2).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Herrscher of Death',
        year: 2022
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(4).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Smell of Death',
        year: 2021
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(3).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Lick my ball',
        year: 2019
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(6).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: "Don't give up",
        year: 2018
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(5).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Try hard',
        year: 2017
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(8).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Discipline',
        year: 2016
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(7).jpg',
        topicFilm: 'HR VIETSUB',
        nameFilm: 'persist',
        year: 2015
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(1).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Work hard',
        year: 2014
    }
]

// Hiển thị danh sách phim ban đầu
displayMovies(listMoviesHot)

// Hàm hiển thị danh sách phim
function displayMovies(movies) {
    const moviesHotRender = document.getElementById('movies_hot_render')
    moviesHotRender.innerHTML = ''

    movies.forEach((movie) => {
        const movieContainer = document.createElement('article')
        movieContainer.classList.add('poster')

        const movieDataTop = document.createElement('div')
        movieDataTop.classList.add('data--top')
        movieDataTop.innerHTML = `<svg
											class="play" id="play"
											xmlns="http://www.w3.org/2000/svg"
											height="1em"
											viewBox="0 0 384 512">
											<path
												d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
										</svg>`

        const movieFeatu = document.createElement('span')
        movieFeatu.classList.add('featu')
        movieFeatu.textContent = movie.featu

        const movieTopicFilm = document.createElement('span')
        movieTopicFilm.classList.add('topic--film')
        movieTopicFilm.textContent = movie.topicFilm

        const movieLink = document.createElement('a')
        movieLink.classList.add('link')

        const moviePoster = document.createElement('img')
        moviePoster.classList.add('img-poster')
        moviePoster.src = movie.pictureLink

        const movieDataFeatu = document.createElement('div')
        movieDataFeatu.classList.add('data--featu')

        const movieNameFilm = document.createElement('a')
        movieNameFilm.classList.add('name--film')
        movieNameFilm.textContent = movie.nameFilm

        const movieYear = document.createElement('span')
        movieYear.classList.add('year')
        movieYear.textContent = movie.year

        moviesHotRender.appendChild(movieContainer)
        movieContainer.appendChild(movieDataTop)
        movieDataTop.appendChild(movieFeatu)
        movieDataTop.appendChild(movieTopicFilm)
        movieDataTop.appendChild(movieLink)
        movieLink.appendChild(moviePoster)
        movieContainer.appendChild(movieDataFeatu)
        movieDataFeatu.appendChild(movieNameFilm)
        movieDataFeatu.appendChild(movieYear)
    })
}

// Click scroll-x
document.addEventListener('DOMContentLoaded', function () {
    const listFilmHot = document.querySelector('.list_film--hot')
    const clickScrollRight = document.querySelector('.click_scroll--right')
    const clickScrollLeft = document.querySelector('.click_scroll--left')
    const scrollStep = 160 // 160px 1 lần click scroll

    // Lấy danh sách các phần tử con trong list_film--hot
    const filmItems = listFilmHot.children

    let scrollPosition = 0

    // Thêm sự kiện click cho div click_scroll-right
    clickScrollRight.addEventListener('click', function () {
        // Cuộn qua phải
        scrollPosition += scrollStep

        // Kiểm tra nếu cuộn đến cuối thì quay lại đầu
        if (scrollPosition > listFilmHot.scrollWidth - listFilmHot.clientWidth) {
            scrollPosition = 0
        }

        // Cập nhật vị trí cuộn
        listFilmHot.scrollLeft = scrollPosition
    })

    // Thêm sự kiện click cho div click_scroll-left
    clickScrollLeft.addEventListener('click', function () {
        // Cuộn qua trái
        scrollPosition -= scrollStep

        // Kiểm tra nếu cuộn đến đầu thì quay lại cuộn từ cuối
        if (scrollPosition < 0) {
            scrollPosition = listFilmHot.scrollWidth - listFilmHot.clientWidth
        }

        // Cập nhật vị trí cuộn
        listFilmHot.scrollLeft = scrollPosition
    })
})
