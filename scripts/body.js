// render Years list in the sidebar
const listYear = document.querySelector(".movies_aside_years--list");

const renderListYear = () => {
	for (let i = 2023; i >= 2009; i--) {
		const Year = document.createElement("div");
		Year.classList.add("movies_aside_years--year");
		Year.textContent = i;

		// Add a click event listener to each year button
		Year.addEventListener("click", () => {
			filterMoviesByYear(i);
		});

		listYear.appendChild(Year);
	}
};
renderListYear();

// Tạo nút "Tất cả"
const allButton = document.createElement("div");
allButton.classList.add("movies_aside_years--year");
allButton.textContent = "Tất cả";

// Add a click event listener to the "Tất cả" button
allButton.addEventListener("click", () => {
	filterMoviesByYear("all");
});

listYear.appendChild(allButton);

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

// News

let News = document.querySelector(".movies_news_body");

const renderNews = () => {
	for (let i = 0; i < 5; i++) {
		let NewsItem = document.createElement("li");
		NewsItem.classList.add("movies_news_body_item");
		let NewsDate = document.createElement("div");
		NewsDate.classList.add("movies_news_body_item-date");
		let NewDay = document.createElement("div");
		NewDay.classList.add("movies_news_body_item-date--d");
		NewDay.textContent = "5";
		let NewMonth = document.createElement("div");
		NewMonth.classList.add("movies_news_body_item-date--m");
		NewMonth.textContent = "March";
		NewsDate.appendChild(NewDay);
		NewsDate.appendChild(NewMonth);
		NewsItem.appendChild(NewsDate);
		let NewsContent = document.createElement("div");
		NewsContent.classList.add("movies_news_body_item-content");
		let NewsHeader = document.createElement("div");
		NewsHeader.classList.add("movies_news_body_item-content--header");
		NewsHeader.textContent =
			"The Batman: New Images Show Off Catwoman’s Costume And More";
		let NewsDes = document.createElement("div");
		NewsDes.classList.add("movies_news_body_item-content--des");
		NewsDes.textContent =
			"The Batman is one of the most highly-anticipated movies of 2022, and it's easy to see why. The film will see Robert Pattinson's Bruce Wayne take on a whole new set of villains, including Paul Dano's Riddler, Colin Farrell's Penguin, and Zoë Kravitz's Catwoman. While fans have gotten a few glimpses of the film's cast and costumes, a new batch of photos have surfaced online, giving fans a new look at Catwoman's costume and more.";
		NewsContent.appendChild(NewsHeader);
		NewsContent.appendChild(NewsDes);
		NewsItem.appendChild(NewsContent);
		News.appendChild(NewsItem);
	}
};
renderNews();

// preview link
const anchors = document.getElementsByTagName("a");

for (let i = 0; i < anchors.length; i++) {
	const anchor = anchors[i];
	const href = anchor.getAttribute("href");
	if (href) {
		anchor.setAttribute("title", href);
	}
}
