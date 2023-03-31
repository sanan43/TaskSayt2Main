

let films = document.getElementById("uli");

// fetch("https://api.tvmaze.com/shows").then(parametr => parametr.json())
//   .then(component => {
//     for (let i = 0; i < component.length; i++) {

//       films.innerHTML += `<div class="col-md-3 mt-5">
//       <div class="card" style="width: 18rem;">
//                   <img src="${component[i].image.medium}" class="card-img-top" alt="...">
//                   <div class="card-body">
//                     <h5 class="card-title">average: ${component[i].rating.average}</h5>
//                     <p class="card-text">${component[i].name}</p>
//                     <a href="details.html?id=${component[i].id}" class="btn btn-primary">Watch Now</a>
//                   </div>
//                 </div>`

//     }
//   })

$.ajax({
  method: "GET",
  url: "https://api.tvmaze.com/shows"
}).done((data) => {
  data.forEach(element => {
    films.innerHTML += `<div class="col-md-3 mt-5">
    <div class="card" style="width: 18rem;">
                <img src="${element.image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">average: ${element.rating.average}</h5>
                  <p class="card-text">${element.name}</p>
                  <a href="details.html?id=${element.id}" class="btn btn-primary">Watch Now</a>
                </div>
              </div>`
  })
})
//search etme
let row=document.querySelector('.row')
const input=document.getElementsByClassName("cus-input")[0]
const btn=document.getElementsByClassName("cus-btn")[0]

btn.addEventListener("click",function(){

  axios.get("https://api.tvmaze.com/search/shows?q="+input.value).then(arr=>{

row.innerHTML=""


arr.data.forEach(element=>{
  row.innerHTML+= `<div class="col-md-3 mt-5">
  <div class="card" style="width: 18rem;">
              <img src="${element.show.image.medium}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">average: ${element.show.rating.average}</h5>
                <p class="card-text">${element.show.name}</p>
                <a href="details.html?id=${element.show.id}" class="btn btn-primary">Watch Now</a>
              </div>
            </div>`
})
 
  })
})





















