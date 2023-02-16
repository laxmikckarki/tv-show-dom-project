//You can edit ALL of the code here

//level 100
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  settingSearchInput(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

const episodeWrapper = document.createElement('div');
    episodeWrapper.classList.add('episode-wrapper');
  episodeList.forEach((list) => {
    const episodeDiv = document.createElement('div');
    episodeDiv.classList.add('episode-div');

    const  episodeName = document.createElement('h1');
episodeName.classList.add('episode-name');
episodeName.innerText = list.name;
const season = list.season.toString().padStart(2, '0');
const number = list.number.toString().padStart(2, '0');
    
const seasonAndEpisode = document.createElement('h2');
     
   seasonAndEpisode.classList.add('episode-season');

seasonAndEpisode.innerText = `S${season}E${number}`;
    const episodeImage = document.createElement('img');
    episodeImage.classList.add('episode-img');
episodeImage.innerText = list.image.medium;
    const episodeSummary = document.createElement('p');
    episodeSummary.classList.add('episode-summary');
    episodeSummary.innerHTML = list.summary;

  episodeWrapper.appendChild(episodeDiv)
    rootElem.appendChild(episodeWrapper);
   episodeDiv.appendChild(episodeName);
   episodeDiv.appendChild(seasonAndEpisode);
   episodeDiv.appendChild(episodeImage);
   episodeDiv.appendChild(episodeSummary);

  })
}
//level 200

function settingSearchInput(episode){
  const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (event) => {
let searchArray = episode.filter((element) => {
  const name = element.name;
  const summary = element.summary;
  const searchString = `${name} ${summary}`;
  const searchInPutValue = searchInput.value.toLowerCase();

return  searchString.toLowerCase().includes(searchInPutValue); 
   
      
}) 
  console.log(searchArray);
  makePageForEpisodes(searchArray);

   }) 
}



window.onload = setup;

/*const url = "https://api.tvmaze.com/shows/82/episodes";
let allEpisodes = [];


//level 400
async function allShows(){
  try {
    let response = await fetch("https://api.tvmaze.com/shows")
    let data = await response.json()
    return data
  } catch (error) {
    
  }
}
//async function setup() {
  // for (let { id: idNum } of allShows) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/82/episodes`);
    const objectResponse = await response.json();
    selectShow(allShows);
    displayEpisodes(objectResponse);
    search(objectResponse);
    select(objectResponse);
  } catch (error) {
    console.log(error);
  }
  
function setup() {
  fetch(url)
  .then((res) => res.json())
  .then((data) => { 
    allEpisodes = data;
  
  makePageForEpisodes(allEpisodes);
})
.catch((err) => console.error(err));
}

function makeSeasonAndEpisodes(episode) {
  const {season, number} = episode;
  const paddedSeason = season.toString().padStart(2, '0');
  const paddedEpisode = number.toString().padStart(2, '0');
    
  return `S${paddedSeason}E${paddedEpisode}`;
    }

function makePageForEpisodes(episodeList){
  const rootElem = document.getElementById("root");
  const selectElem =document.getElementById('select-input');
  const episodesParent = document.getElementById('episode-list');
  episodesParent.innerHTML ="";

  const countParagraph = document.createElement('p');
  countParagraph.innerText = `Showing ${episodes.length} episode`;
  rootElem.prepend(countParagraph);
  episodeList.forEach((episode) => {
    
    //add season and episode and name
const div = document.createElement('div');
div.setAttribute('class', 'episode');
episodesParent.appendChild(div);

    const paragraph = document.createElement('p');
    paragraph.classList.add('episode-title')
    paragraph.textContent = `${makeSeasonAndEpisodes(episode)}: ${episode.name}`;
    div.appendChild(paragraph);

    
    //add image

    const image = document.createElement('img');
    image.src = episode.image.medium;
   div.appendChild(image);

   // add the summary, episode summary
    div.innerHTML+= episode.summary;
 

// also, one more thing, add it to the select element as an option
const option= document.createElement("option");
option.textContent = `${makeSeasonAndEpisodes(episode)} - ${episode.name}`;
option.value = episode.id;
selectElem.appendChild(option);
});
}

const searchInPut = document.getElementById('search-input');
searchInPut.addEventListener('input', (event) => {
  const searchString = event.target.value.toLowerCase();
  const filteredEpisodes = allEpisodes.filter((episode) => {

      return (
        episode.summary.toLowerCase().includes(searchString) || 
        episode.name.toLowerCase().includes(searchString)
      );
    });
  makePageForEpisodes(filteredEpisodes);
});

const selectInPut = document.getElementById('select-input');
selectInPut.addEventListener('change', (event) => {
  
 //the episode id that has been clicked on 
  const idSelectByUser = Number(event.target.value);
  const selectedEpisode = allEpisodes.find((episode) => episode.id === 
  idSelectByUser);
  if (selectedEpisode){
    makePageForEpisodes([selectedEpisode])
  }
});

window.onload = setup;

/*fetch(url)
.then((res) => res.json())
.then((data)=>console.log(data))
console.log('from the promise chain');
console.log(data.results[0].name.first)
.catch((err) => console.error(err));

//or
async function getTheData(){
  try{
  const res = await fetch(url);
  const data = await res.json();
  console.log('from the async function');
  console.log(data.results[0].name.first);
} catch (err){
console.error(err);
}
}
getTheData();*/
