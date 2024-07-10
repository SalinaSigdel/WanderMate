let submit = document.getElementById("submit");
submit.addEventListener("click", async () => {
  try {
    let id = document.getElementById("search").value;
    let url = `https://api.jikan.moe/v4/anime/${id}/full`;
    let response = await fetch(url);
    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
    let datas = await response.json();
    console.log(datas);
    let episodes = document.getElementById("episodes");
    episodes.innerHTML = `Episodes : ${datas.data.episodes}`;
    let title = document.getElementById("title");
    title.innerHTML = `Title: ${datas.data.title}`;
    let image = document.getElementById("image");
    image.src = datas.data.images.jpg.image_url;
  } catch (error) {
    console.error(error);
  }
});

let array = [
  "cowboy Bepop",
  "Rurouni Kenshin:Meiji Kenkaku Romantam",
  "Shienshikin Engi",
  "Jujutsu Kaisen",
];
let parent = document.querySelector(".div-1");
array.forEach((item) => {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = item;
  div.appendChild(p);
  parent.appendChild(div);
});