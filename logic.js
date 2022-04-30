let btn = document.getElementsByClassName(".btn");
let box = document.querySelector(".box");

// btn.addEventListener("click", clickEvent);

function clickEvent() {
    box.classList.toggle("active");
}

setInterval(() => {
    clickEvent();
}, 1000);

setTimeout(box.classList.remove("active"), 1000);

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

xhr.getResponseHeader("Content-type", "application/json");

xhr.onload = function() {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.querySelector('.container');
        str = "";
        for (key in obj) {
            str += `<div class="card">
            <div class="card-header">
            ${obj[key].name} 
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${obj[key].email} </p>
                <footer class="blockquote-footer">${obj[key].body} </footer>
              </blockquote>
            </div>
          </div>`;
        }
        list.innerHTML = str;
    } else {
        console.log("Some error occured")
    }
}
xhr.send(this.responseText);

console.log("We are done!");