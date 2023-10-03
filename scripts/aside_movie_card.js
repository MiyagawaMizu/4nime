// aside_movie_list.js

// Lấy tham chiếu đến phần tử chứa danh sách phim
const moviesAsideList = document.querySelector(".movies_aside_list");

// Dữ liệu danh sách phim (có thể đặt dữ liệu thật từ API hoặc nguồn dữ liệu khác)
const movieData = [
	{
		title: "Castlevania: Nocturne",
		imageUrl:
			"https://phimmoiyyy.net/wp-content/uploads/2023/09/Castlevania-Nocturne.jpg",
		rating: "10.0",
		year: "2023",
	},
	{
		title: "Castlevania: Nocturne",
		imageUrl:
			"https://phimmoiyyy.net/wp-content/uploads/2023/09/Castlevania-Nocturne.jpg",
		rating: "10.0",
		year: "2023",
	},
	{
		title: "Castlevania: Nocturne",
		imageUrl:
			"https://phimmoiyyy.net/wp-content/uploads/2023/09/Castlevania-Nocturne.jpg",
		rating: "10.0",
		year: "2023",
	},
	{
		title: "Castlevania: Nocturne",
		imageUrl:
			"https://phimmoiyyy.net/wp-content/uploads/2023/09/Castlevania-Nocturne.jpg",
		rating: "10.0",
		year: "2023",
	},
	// Thêm các mục phim khác tại đây
];

// Hàm để tạo và thêm một thẻ phim vào danh sách phim
function addMovieToAsideList(movie) {
	const movieCard = document.createElement("a");
	movieCard.classList.add("movie_aside_card");
	movieCard.href = ""; // Đặt đường dẫn của phim tại đây

	const cardImage = document.createElement("div");
	cardImage.classList.add("aside_card-img");
	const image = document.createElement("img");
	image.src = movie.imageUrl;
	image.alt = "";
	cardImage.appendChild(image);

	const cardContent = document.createElement("div");
	cardContent.classList.add("movie_aside_card_content");

	const title = document.createElement("h3");
	title.textContent = movie.title;

	const row = document.createElement("div");
	row.classList.add("aside_row");

	const rating = document.createElement("div");
	rating.classList.add("movie_aside-rating");
	const starIcon = document.createElement("i");
	starIcon.classList.add("bi", "bi-star-fill");
	const ratingText = document.createElement("p");
	ratingText.textContent = movie.rating;

	const year = document.createElement("p");
	year.classList.add("aisde-year");
	year.textContent = movie.year;

	rating.appendChild(starIcon);
	rating.appendChild(ratingText);

	row.appendChild(rating);
	row.appendChild(year);

	cardContent.appendChild(title);
	cardContent.appendChild(row);

	movieCard.appendChild(cardImage);
	movieCard.appendChild(cardContent);

	moviesAsideList.appendChild(movieCard);
}

// Thêm các phần tử phim vào danh sách
movieData.forEach((movie) => {
	addMovieToAsideList(movie);
});
