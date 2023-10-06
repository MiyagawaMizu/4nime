// Danh sách phim
const movies = [
    {
        featu: 'HOT',
        nameFilm: 'Sword Art Online',
        topicFilm: 'HD VIETSUB',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureLink: 'https://ecdn.game4v.com/g4v-content/uploads/2022/08/03092132/SAO-P-1-game4v-1659493290-81.jpg',
        year: '2022'
    },
    {
        featu: 'HOT',
        nameFilm: 'One Punch Man',
        topicFilm: 'HD VIETSUB',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureLink: 'https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg',
        year: '2015'
    },
    {
        featu: 'HOT',
        nameFilm: "Onimai: I'm now your sister!",
        topicFilm: 'HD VIETSUB',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureLink: 'https://image.tmdb.org/t/p/original/tpvVSr6ThPQFISYc9xRVR7MKjDF.jpg',
        year: '2023'
    },
    {
        featu: 'HOT',
        nameFilm: "Miss Kobayashi's Dragon Maid S",
        topicFilm: 'HD VIETSUB',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureLink: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107717-bixaW1NTGBra.jpg',
        year: '2021'
    },
    {
        featu: 'HOT',
        nameFilm: 'Your Name',
        topicFilm: 'HD VIETSUB',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureLink: 'https://egoamo.co.za/cdn/shop/products/your_name_anime_movie_poster_egoamo_posters_800x.jpg',
        year: '2016'
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(2).jpg',
        topicFilm: 'HDR VIETSUB',
        nameFilm: 'Herrscher of NER',
        year: 2023
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(3).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Herrscher of Death',
        year: 2022
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(4).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Herrscher of Death',
        year: 2021
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(5).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Herrscher of Death',
        year: 2019
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(6).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Quạc quạc quạc',
        year: 2018
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(7).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Autumm',
        year: 2017
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(8).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Summer of Death',
        year: 2016
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(9).jpg',
        topicFilm: 'HR VIETSUB',
        nameFilm: 'Night of the life',
        year: 2015
    },
    {
        featu: 'Simple',
        pictureLink: './images/image(10).jpg',
        topicFilm: 'HD VIETSUB',
        nameFilm: 'Spring of life',
        year: 2014
    }
    // Thêm các phim khác vào đây
]

// Hiển thị danh sách phim ban đầu
displayMovies(movies)

// Hàm hiển thị danh sách phim
function displayMovies(movies) {
    const movieBox = document.getElementById('movies')
    movieBox.innerHTML = ''

    movies.forEach((movie) => {
        const movieCard = document.createElement('article')
        movieCard.classList.add('movie-card')

        const movieTop = document.createElement('div')
        movieTop.classList.add('movie-top')

        const movieTag = document.createElement('span')
        movieTag.classList.add('movie-tag')
        movieTag.textContent = movie.featu

        const movieQuality = document.createElement('span')
        movieQuality.classList.add('movie-quality')
        movieQuality.textContent = movie.topicFilm

        const movieLink = document.createElement('a')
        movieLink.classList.add('movie-link')
        movieLink.target = '_blank'
        movieLink.innerHTML = `<svg
											class="play" id="play"
											xmlns="http://www.w3.org/2000/svg"
											height="1em"
											viewBox="0 0 384 512">
											<path
												d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
										</svg>`
        movieLink.href = movie.link

        const moviePoster = document.createElement('img')
        moviePoster.classList.add('movie-poster')
        moviePoster.src = movie.pictureLink

        const movieInfo = document.createElement('div')
        movieInfo.classList.add('movie-info')

        const movieName = document.createElement('h3')
        movieName.textContent = movie.nameFilm

        const movieYear = document.createElement('p')
        movieYear.textContent = movie.year

        movieBox.appendChild(movieCard)
        movieCard.appendChild(movieTop)
        movieTop.appendChild(movieTag)
        movieTop.appendChild(movieQuality)
        movieTop.appendChild(movieLink)
        // movieTop.appendChild(moviePoster);
        movieLink.appendChild(moviePoster)
        movieCard.appendChild(movieInfo)
        movieInfo.appendChild(movieName)
        movieInfo.appendChild(movieYear)
    })
}
