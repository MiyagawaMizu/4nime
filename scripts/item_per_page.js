const itemsPerPage = 10;
const items = document.querySelectorAll(".movies_box article");
const pages = Math.ceil(items.length / itemsPerPage);
const pageButtons = document.querySelector(".list-page");

function showItems(page) {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	items.forEach((item, index) => {
		if (index >= startIndex && index < endIndex) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}

for (let i = 1; i <= pages; i++) {
	const button = document.createElement("li");
	button.textContent = i;
	if (i === 1) {
		button.classList.add("active");
	}
	button.addEventListener("click", () => {
		pageButtons
			.querySelectorAll("li")
			.forEach((btn) => btn.classList.remove("active"));
		button.classList.add("active");
		showItems(i);
	});
	pageButtons.appendChild(button);
}

showItems(1);
