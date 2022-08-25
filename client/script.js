const searchBtn = document.querySelector('.button-search');
const random = document.querySelector('.button-random');


searchBtn.addEventListener('click', fetcher);


function fetcher(e) {
  e.preventDefault()
  fetch('http://localhost:3000/books')
    .then((response) => response.json()) // promise
    .then((data) => {
      console.log(data)
      // window.location.assign("./result.html")

      document.querySelector('#text').textContent = JSON.stringify(data);
    });
}


// .replace(/{"quote":/, "")
//   .replace("}", "").replaceAll("\"", "")

// document.querySelector("#output").textContent = JSON.stringify(data[Math.floor(Math.random() * data.length)])

// new_p.textContent = JSON.stringify(data);
