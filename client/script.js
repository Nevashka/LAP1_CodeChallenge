fetch('http://localhost:3000/books')
.then((response) => response.json()) // promise
.then((data) => {
  console.log(data)
  document.querySelector("#text").textContent = JSON.stringify(data)
});
