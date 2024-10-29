
/* OBJECT DESTRUCTURING */ 
const myDreamHoliday = {
    country: "the USA",
    place: "Ridgewood",
    activity: "visit Gregories",
    food: "cupcakes"
}

const {country, place, activity, food} = myDreamHoliday

console.log(`I want to travel to ${country}, specifically to ${place} in order to ${activity} and eat ${food}.`)

/*-------------------------------------------------------------------------------------------------------------*/
/* MAPPING */
/* VERSION 1*/ 

const hikesInMiles = [40, 12, 6, 25, 3]

const hikesInKm = hikesInMiles.map((oneHike) => {
    return oneHike * 1.6 //you MUST use return
})

console.log(hikesInKm)

/*-------------------------------------------------------------------------------------------------------------*/

/* VERSION 2 - function but still storing mapping into a new array (it is a shallow copy anyhow)*/ 


const hikesInMilesv2 = [40, 12, 6, 25, 3]

const createHikesInKm = () => { 
    const hikesInKmv2 = hikesInMilesv2.map((oneHikev2) => {
        return oneHikev2 * 1.6 //you MUST use return
    })
    return hikesInKmv2
}

console.log(createHikesInKm())

/*-------------------------------------------------------------------------------------------------------------*/

/* VERSION 3 - function and instead of storing it into a const, you instead return it, hence having double return statements*/ 

const hikesInMilesv3 = [40, 12, 6, 25, 3]

const createHikesInKmv3 = () => {
    return hikesInMilesv3.map((oneHikev3) => {
        return oneHikev3 * 1.6 //you MUST use return
    })
}

console.log(createHikesInKmv3())

/*-------------------------------------------------------------------------------------------------------------*/

/* MAPPING  - where you store a mapping function and object destructuring and html into one array into one variable*/ 

import { playlistArr } from '/playlist.js'


const playlistHtml = playlistArr.map((oneSong) => {
    const {albumArt, title, artist} = oneSong
    return `
<section class="card">
    <div class="card-start">
        <img src="${albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${title}</h4>
            <p class="card-artist">${artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
`
}).join("") //join method turns array into a string, the empty string argument in parentheses removes komma separators between items

document.getElementById('container').innerHTML = playlistHtml

/*-------------------------------------------------------------------------------------------------------------*/

/* FOR EACH - not a good choice of looping method here, as forEach should be used to modify existing array, not to create a new one*/ 

import { playlistArr2 } from '/playlist2.js'

const playlistHtml2 = []

 playlistArr2.forEach((oneSong) => {
    const {albumArt, title, artist} = oneSong
    playlistHtml2.push(`
        <section class="card">
            <div class="card-start">
                <img src="${albumArt}">
            </div>
                <div class="card-mid">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-artist">${artist}</p>
                </div>
            <div class="card-end">
                <p class="card-menu">...</p>
            </div>
        </section>
        `)
}) 


document.getElementById('container2').innerHTML = playlistHtml2.join("")
/*-------------------------------------------------------------------------------------------------------------*/

/* CONTINUE and BREAK - continue immediatelly stops a loop and goes onto next itteration, break stops all remaining itterations and ends the forloop*/ 

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i= 0; i < expensesAndRefunds.length; i++){
    if(expensesAndRefunds[i].amount < 0){
        continue
    }
    if (cutoffDate === expensesAndRefunds[i].year){
        break
    }
    totalSpent += expensesAndRefunds[i].amount //the forloop will check both if statements on each itteration before adding the amount so what you see is one forloop
}

console.log(`The total expenses spent in 2023 without credits is $${totalSpent}`)

/*-------------------------------------------------------------------------------------------------------------*/

// DANGERS OF USING INNER HTML - if you use innerHTML somebody can insert in malicious html code, use instead textContent or innerText that only displays text and not JS

//hacker code: <button onclick="document.getElementById('film-list-app').innerHTML='<h1>Now I own your site 😭</h1>'">Click Me ☣️</button>

let filmInput = document.getElementById("film-input")
let addBtn = document.getElementById("add-btn")
let filmList = document.getElementById("film-list")

addBtn.addEventListener("click", function(){
    // let usersInput = filmInput.value
    // filmList.textContent += `<p>${usersInput}</p>` //this code will insert the <p> as text, you must avoid using html tags if you want this code to work. If you use innerHTML, your code can be hacked.
    // filmInput.value = ""

    const newFilm = document.createElement("p") //create new html element
    newFilm.classList.add("film-item") //add class to it
    newFilm.innerText += filmInput.value //fill it inside with the input.value you wrote in input field
    filmList.appendChild(newFilm) //add this entire html element as a child element to the right dom div
    filmInput.value = "" //clear the input value. !no it is value you clear in input not innertext!
})


/*-------------------------------------------------------------------------------------------------------------*/