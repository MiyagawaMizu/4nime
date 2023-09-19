// Danh sách phim
const movies = [
	{
		title: "Swort Art Online",
		subtitle: "Alicization",
		year: "2021",
		poster:
			"https://ecdn.game4v.com/g4v-content/uploads/2022/08/03092132/SAO-P-1-game4v-1659493290-81.jpg",
	},
	{
		title: "One Punch Man",
		subtitle: "Season 2",
		year: "2022",
		poster:
			"https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg",
	},
	{
		title: "Onima: I'm now your sister!",
		subtitle: "Season 2",
		year: "2023",
		poster:
			"https://image.tmdb.org/t/p/original/tpvVSr6ThPQFISYc9xRVR7MKjDF.jpg",
	},
	{
		title: "Miss Kobayashi's Dragon Maid",
		subtitle: "Season 2",
		year: "2021",
		poster: "https://cdn-amz.woka.io/images/I/811AMdAUtTL.jpg",
	},
	{
		title: "Your Name",
		subtitle: "Season 2",
		year: "2022",
		poster:
			"https://egoamo.co.za/cdn/shop/products/your_name_anime_movie_poster_egoamo_posters_800x.jpg",
	},
	{
		title: "Swort Art Online",
		subtitle: "Alicization",
		year: "2021",
		poster:
			"https://ecdn.game4v.com/g4v-content/uploads/2022/08/03092132/SAO-P-1-game4v-1659493290-81.jpg",
	},
	{
		title: "One Punch Man",
		subtitle: "Season 2",
		year: "2022",
		poster:
			"https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg",
	},
	{
		title: "Onima: I'm now your sister!",
		subtitle: "Season 2",
		year: "2023",
		poster:
			"https://image.tmdb.org/t/p/original/tpvVSr6ThPQFISYc9xRVR7MKjDF.jpg",
	},
	{
		title: "Miss Kobayashi's Dragon Maid",
		subtitle: "Season 2",
		year: "2021",
		poster: "https://cdn-amz.woka.io/images/I/811AMdAUtTL.jpg",
	},
	{
		title: "Your Name",
		subtitle: "Season 2",
		year: "2022",
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
