let searchBtn = document.querySelector('.button-search')
searchBtn.addEventListener('click', fetcher);

function fetcher(e) {
  e.preventDefault()
  fetch('http://localhost:3000/books')
    .then((response) => response.json()) // promise
    .then((data) => {
      console.log(data)
      window.location.assign("result.html")
    });
}
// .replace(/{"quote":/, "")
//   .replace("}", "").replaceAll("\"", "")

// document.querySelector("#output").textContent = JSON.stringify(data[Math.floor(Math.random() * data.length)])
