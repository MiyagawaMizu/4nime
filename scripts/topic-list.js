const listMoviesHot = [
    {
        featu: "Simple",
        pictureLink: "./images/image(2).jpg",
        topicFilm: "HR VIETSUB",
        nameFilm: "Herrscher of NER",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(3).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(4).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(5).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(5).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(5).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(5).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(2).jpg",
        topicFilm: "HR VIETSUB",
        nameFilm: "Herrscher of NER",
        year: 2033,
    },
    {
        featu: "Simple",
        pictureLink: "./images/image(3).jpg",
        topicFilm: "HD VIETSUB",
        nameFilm: "Herrscher of Death",
        year: 2033,
    },
];

// Scan/render list film hot
listMoviesHot.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("poster");

    // Tạo nội dung HTML cho mỗi phần tử phim
    const movieHTML = `
        <div class="data--top">
            <span class="featu">${movie.featu}</span>
            <span class="topic--film">${movie.topicFilm}</span>
            <svg class="play" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
            <a href="" class="link">
                <img class="img-poster" src="${movie.pictureLink}" alt="Errol Server">
            </a>
        </div>
        <div class="data--featu">
            <a class="name--film" href="">${movie.nameFilm}</a>
            <span class="year">${movie.year}</span>
        </div>
    `;

    // Gắn nội dung HTML vào phần tử container
    movieContainer.innerHTML = movieHTML;

    // Thêm phần tử container vào danh sách phim trong HTML
    const moviesHotRender = document.getElementById("movies_hot_render");
    moviesHotRender.appendChild(movieContainer);
});




// Click scroll-x
document.addEventListener("DOMContentLoaded", function () {
    const listFilmHot = document.querySelector(".list_film--hot");
    const clickScrollRight = document.querySelector(".click_scroll--right");
    const clickScrollLeft = document.querySelector(".click_scroll--left");
    const scrollStep = 160; // 160px 1 lần click scroll
    
    // Lấy danh sách các phần tử con trong list_film--hot
    const filmItems = listFilmHot.children;

    let scrollPosition = 0;

    // Thêm sự kiện click cho div click_scroll-right
    clickScrollRight.addEventListener("click", function () {
        // Cuộn qua phải
        scrollPosition += scrollStep;

        // Kiểm tra nếu cuộn đến cuối thì quay lại đầu
        if (scrollPosition > listFilmHot.scrollWidth - listFilmHot.clientWidth) {
            scrollPosition = 0;
        }

        // Cập nhật vị trí cuộn
        listFilmHot.scrollLeft = scrollPosition;
    });
    
    // Thêm sự kiện click cho div click_scroll-left
    clickScrollLeft.addEventListener("click", function () {
        // Cuộn qua trái
        scrollPosition -= scrollStep;

        // Kiểm tra nếu cuộn đến đầu thì quay lại cuộn từ cuối
        if (scrollPosition < 0) {
            scrollPosition = listFilmHot.scrollWidth - listFilmHot.clientWidth;
        }

        // Cập nhật vị trí cuộn
        listFilmHot.scrollLeft = scrollPosition;
    });
});
    
    
    
    
    
  
