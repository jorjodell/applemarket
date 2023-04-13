let products = document.querySelector(".products")
let search = document.querySelector('#search')
let url = 'http://localhost:8000/products'
let inpName = document.querySelector('#name')
let inpSurname = document.querySelector('#surname')
let inpEmail = document.querySelector('#email')
let inpNumber = document.querySelector('#number')
let btn = document.querySelector('form button')
let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0]
let appleCard = document.querySelector('#apple-card')

console.log(appleCard)
async function getCards() {
  let res = await fetch(url)
  let data = await res.json()
  data.forEach((elem) => {
    products.innerHTML += 
    `
    <div class="products__card">
        <img src="${elem.image}" width="170">
        <strong>${elem.title}</strong>
        <p>${elem.price}</p>
        <button>Buy</button>
      </div>
    `
  })
}
getCards()

search.addEventListener("input", ()=> {
  const inp = search.value.toLowerCase()
  products.innerHTML = ""
  fetch(url, {
    method: "GEt",
    headers: {
      "Content-type" : "application/json"
    }
  }).then(res => res.json()).then(data => {
    data.filter((item) => item.title.toLowerCase().includes(inp)).forEach((elem) => {
      products.innerHTML += 
      `
      <div class="products__card">
          <img src="${elem.image}" width="170">
          <strong>${elem.title}</strong>
          <p>${elem.price}</p>
          <button>Buy</button>
        </div>
      `
    })
  })
})

function signIn() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
console.log(appleCard);

btn.addEventListener('click', ()=> {
  if(inpEmail.value.trim() != '' && inpName.value.trim() != '' && inpNumber.value.trim() != '' && inpSurname.value.trim() != '') {
    appleCard.style.display = 'none'
    modal.style.display = 'none'
    alert("Вы получили дисконтную карту Apple")
  } else {
    alert('Заполните все поля')
  }
})