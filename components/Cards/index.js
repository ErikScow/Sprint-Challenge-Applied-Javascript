// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardData = axios.get('https://lambda-times-backend.herokuapp.com/articles')
console.log(cardData)

const cardContainer = document.querySelector('.cards-container')

cardData.then(response => {
    const articlesData = response.data.articles
    articlesData.javascript.forEach(item => {
        cardContainer.appendChild(CardComponent(item))
    })
    articlesData.bootstrap.forEach(item => {
        cardContainer.appendChild(CardComponent(item))
    })
    articlesData.technology.forEach(item => {
        cardContainer.appendChild(CardComponent(item))
    })
    articlesData.jquery.forEach(item => {
        cardContainer.appendChild(CardComponent(item))
    })
    articlesData.node.forEach(item => {
        cardContainer.appendChild(CardComponent(item))
    })
})



const CardComponent = (dataParam) => {
//create elements
const cardDiv = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('div')
const imgCont = document.createElement('div')
const image = document.createElement('img')
const authorName = document.createElement('span')

//nesting
cardDiv.appendChild(headline)
cardDiv.appendChild(author)
author.appendChild(imgCont)
author.appendChild(authorName)
imgCont.appendChild(image)

//classes
cardDiv.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imgCont.classList.add('img-container')

//content 
headline.textContent = `${dataParam.headline}`
image.src = `${dataParam.authorPhoto}`
authorName.textContent = `By ${dataParam.authorName}`

return cardDiv
}


