//You can edit ALL of the code here
const url = "https://api.tvmaze.com/shows/82/episodes";
let allEpisodes = [];

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
  rootElem.innerHTML ="";

  const countParagraph = document.createElement('p');
  countParagraph.innerText = `Showing ${episodeList.length} episode`;
  rootElem.appendChild(countParagraph);
  episodeList.forEach((episode) => {
    
    //add season and episode and name

    const paragraph = document.createElement('p');
    paragraph.textContent = `${makeSeasonAndEpisodes(episode)}: ${episode.name}`;
    rootElem.appendChild(paragraph);

    //add image

    const image = document.createElement('img');
    image.src = episode.image.medium;
   rootElem.appendChild(image);

   // add the summary, episode summary
    rootElem.innerHTML+= episode.summary;
 

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
