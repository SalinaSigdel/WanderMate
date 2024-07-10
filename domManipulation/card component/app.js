const data = [ {
    title: "Hare Krishna",
    img: "https://i.pinimg.com/736x/36/e2/c2/36e2c24e90560b806f44ee6ad82d9c0b.jpg",
    description:
    "This is a beautiful place for a relaxed and peaceful stay"
},
{
    title: "Himalaya",
    img: "https://www.worldwildlife.org/places/himalayas/images/himalayas-overview-large.jpg",
    description:
    "Visit the Himalayas for a unique experience"},
    {
        title: "Nepal",
        img: "https://www.worldwildlife.org/places/nepal/images/nepal-overview-large.jpg",
        description:
        "Discover the rich history and culture of Nepal"
    }
]
const cardContainer = document.getElementById("card-container")

data.map((card) => {
    // create card div
    const cardDiv =document.createElement("div")
    cardDiv.className = "card"
    //image div
    const imageDiv =document.createElement("div")
    imageDiv.className = "image"
    cardDiv.appendChild(imageDiv)
    //image
    const image = document.createElement("img")
    image.src = card.img
    imageDiv.appendChild(image)
    //title
    const title = document.createElement("h1")
    title.textContent = card.title
    cardDiv.appendChild(title)
    //description
    const description = document.createElement("p")
    description.textContent = card.description
    cardDiv.appendChild(description)
    //adding each card to container
    cardContainer.appendChild(cardDiv)

})