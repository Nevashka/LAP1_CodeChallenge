const searchBtn = document.querySelector('.button-search');
const random = document.querySelector('.button-random');


searchBtn.addEventListener('click', getBooks);


function getBooks(e) {
  e.preventDefault()
  fetch('http://localhost:3000/books')
    .then((response) => response.json()) // promise
    .then((data) => {
      console.log(data)
      // window.location.assign("./result.html")

      document.querySelector('#text').textContent = JSON.stringify(data);
    });
}

