// Danh sách phim
const movies = [
	{
		title: "Sword Art Online",
		subtitle: "Progressive Movie - Kuraki Yuuyami no Scherzo",
		year: "2022",
		poster:
			"https://ecdn.game4v.com/g4v-content/uploads/2022/08/03092132/SAO-P-1-game4v-1659493290-81.jpg",
	},
	{
		title: "One Punch Man",
		subtitle: "Road to Hero",
		year: "2015",
		poster:
			"https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg",
	},
	{
		title: "Onimai: I'm now your sister!",
		subtitle: "2023",
		year: "2023",
		poster:
			"https://image.tmdb.org/t/p/original/tpvVSr6ThPQFISYc9xRVR7MKjDF.jpg",
	},
	{
		title: "Miss Kobayashi's Dragon Maid S",
		subtitle: "2021",
		year: "2021",
		poster: "https://cdn-amz.woka.io/images/I/811AMdAUtTL.jpg",
	},
	{
		title: "Your Name",
		subtitle: "2016",
		year: "2016",
		poster:
			"https://egoamo.co.za/cdn/shop/products/your_name_anime_movie_poster_egoamo_posters_800x.jpg",
	},
	// Thêm các phim khác vào đây
];

// Hiển thị danh sách phim ban đầu
displayMovies(movies);

// Hàm hiển thị danh sách phim
function displayMovies(movies) {
	const movieContainer = document.getElementById("movies");
	movieContainer.innerHTML = "";

	movies.forEach((movie) => {
		const movieCard = document.createElement("article");
		movieCard.classList.add("movie-card");

		const moviePoster = document.createElement("img");
		moviePoster.classList.add("movie-poster");
		moviePoster.src = movie.poster;

		const movieTitle = document.createElement("h3");
		movieTitle.textContent = movie.title;

		const subTitle = document.createElement("p");
		subTitle.textContent = movie.subtitle;

		movieCard.appendChild(moviePoster);
		movieCard.appendChild(movieTitle);
		movieCard.appendChild(subTitle);
		movieContainer.appendChild(movieCard);
	});
}

// Hàm lọc phim theo năm
// function filterMovies() {
// 	const selectedYear = document.getElementById("year").value;
// 	let filteredMovies;

// 	if (selectedYear === "all") {
// 		filteredMovies = movies;
// 	} else {
// 		filteredMovies = movies.filter(
// 			(movie) => movie.year.toString() === selectedYear
// 		);
// 	}

// 	displayMovies(filteredMovies);
// }

// Hàm lọc phim theo năm
function filterMoviesByYear(selectedYear) {
	let filteredMovies;

	if (selectedYear === "all") {
		filteredMovies = movies;
	} else {
		filteredMovies = movies.filter(
			(movie) => movie.year.toString() === selectedYear.toString()
		);
	}

	displayMovies(filteredMovies);
}
