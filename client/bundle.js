(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const searchBtn = document.querySelector('.button-search');
const random = document.querySelector('.button-random');


searchBtn.addEventListener('click', fetcher);


function fetcher(e) {
  e.preventDefault()
  fetch('http://localhost:3000/books')
    .then((response) => response.json()) // promise
    .then((data) => {
      console.log(data)
      window.location.assign("./books.html")

      const new_p = document.querySelector('#text')
      new_p.textContent = data;
    });
}


// .replace(/{"quote":/, "")
//   .replace("}", "").replaceAll("\"", "")

// document.querySelector("#output").textContent = JSON.stringify(data[Math.floor(Math.random() * data.length)])

// new_p.textContent = JSON.stringify(data);

},{}]},{},[1]);
