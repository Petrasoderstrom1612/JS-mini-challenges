
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


const playlistHtml = playlistArr.map((track) => {
    const {albumArt, title, artist} = track
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
}).join('')

document.getElementById('container').innerHTML = playlistHtml
