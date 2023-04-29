// //You can edit ALL of the code here

// //level 100
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
//   settingSearchInput(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;

//   const episodeWrapper = document.createElement("div");
//   episodeWrapper.classList.add("episode-wrapper");
//   episodeList.forEach((list) => {
//     const episodeDiv = document.createElement("div");
//     episodeDiv.classList.add("episode-div");

//     const episodeName = document.createElement("h1");
//     episodeName.classList.add("episode-name");
//     episodeName.innerText = list.name;
//     const season = list.season.toString().padStart(2, "0");
//     const number = list.number.toString().padStart(2, "0");

//     const seasonAndEpisode = document.createElement("h2");

//     seasonAndEpisode.classList.add("episode-season");

//     seasonAndEpisode.innerText = `S${season}E${number}`;
//     const episodeImage = document.createElement("img");
//     episodeImage.classList.add("episode-img");
//     episodeImage.innerText = list.image.medium;
//     const episodeSummary = document.createElement("p");
//     episodeSummary.classList.add("episode-summary");
//     episodeSummary.innerHTML = list.summary;

//     episodeWrapper.appendChild(episodeDiv);
//     rootElem.appendChild(episodeWrapper);
//     episodeDiv.appendChild(episodeName);
//     episodeDiv.appendChild(seasonAndEpisode);
//     episodeDiv.appendChild(episodeImage);
//     episodeDiv.appendChild(episodeSummary);
//   });
// }
// //level 200

// function settingSearchInput(episode) {
//   const searchInput = document.getElementById("search-input");
//   searchInput.addEventListener("input", (event) => {
//     let searchArray = episode.filter((element) => {
//       const name = element.name;
//       const summary = element.summary;
//       const searchString = `${name} ${summary}`;
//       const searchInPutValue = searchInput.value.toLowerCase();

//       return searchString.toLowerCase().includes(searchInPutValue);
//     });
//     console.log(searchArray);
//     makePageForEpisodes(searchArray);
//   });
// }

// const url = "https://api.tvmaze.com/shows/82/episodes";
// let allEpisodes = [];

// //level 400
// async function allShows() {
//   try {
//     let response = await fetch("https://api.tvmaze.com/shows");
//     let data = await response.json();
//     return data;
//   } catch (error) {}
// }
// //async function setup() {
// // for (let { id: idNum } of allShows) {
// // try {
// //   const response = await fetch(`https://api.tvmaze.com/shows/82/episodes`);
// //   const objectResponse = await response.json();
// //   selectShow(allShows);
// //   displayEpisodes(objectResponse);
// //   search(objectResponse);
// //   select(objectResponse);
// // } catch (error) {
// //   console.log(error);
// // }

// function setup() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       allEpisodes = data;

//       makePageForEpisodes(allEpisodes);
//     })
//     .catch((err) => console.error(err));
// }

// function makeSeasonAndEpisodes(episode) {
//   const { season, number } = episode;
//   const paddedSeason = season.toString().padStart(2, "0");
//   const paddedEpisode = number.toString().padStart(2, "0");

//   return `S${paddedSeason}E${paddedEpisode}`;
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   const selectElem = document.getElementById("select-input");
//   const episodesParent = document.getElementById("episode-list");
//   episodesParent.innerHTML = "";

//   const countParagraph = document.createElement("p");
//   countParagraph.innerText = `Showing ${episodeList.length} episode`;
//   rootElem.prepend(countParagraph);
//   episodeList.forEach((episode) => {
//     //add season and episode and name
//     const div = document.createElement("div");
//     div.setAttribute("class", "episode");
//     episodesParent.appendChild(div);

//     const paragraph = document.createElement("p");
//     paragraph.classList.add("episode-title");
//     paragraph.textContent = `${makeSeasonAndEpisodes(episode)}: ${
//       episode.name
//     }`;
//     div.appendChild(paragraph);

//     //add image

//     const image = document.createElement("img");
//     image.src = episode.image.medium;
//     div.appendChild(image);

//     // add the summary, episode summary
//     div.innerHTML += episode.summary;

//     // also, one more thing, add it to the select element as an option
//     const option = document.createElement("option");
//     option.textContent = `${makeSeasonAndEpisodes(episode)} - ${episode.name}`;
//     option.value = episode.id;
//     selectElem.appendChild(option);
//   });
// }

// const searchInPut = document.getElementById("search-input");
// searchInPut.addEventListener("input", (event) => {
//   const searchString = event.target.value.toLowerCase();
//   const filteredEpisodes = allEpisodes.filter((episode) => {
//     return (
//       episode.summary.toLowerCase().includes(searchString) ||
//       episode.name.toLowerCase().includes(searchString)
//     );
//   });
//   makePageForEpisodes(filteredEpisodes);
// });
// //Level 300
// const selectInPut = document.getElementById("select-input");
// selectInPut.addEventListener("change", (event) => {
//   //the episode id that has been clicked on
//   const idSelectByUser = Number(event.target.value);
//   const selectedEpisode = allEpisodes.find(
//     (episode) => episode.id === idSelectByUser
//   );
//   if (selectedEpisode) {
//     makePageForEpisodes([selectedEpisode]);
//   }
// });

// /*fetch(url)
// .then((res) => res.json())
// .then((data)=>console.log(data))
// console.log('from the promise chain');
// console.log(data.results[0].name.first)
// .catch((err) => console.error(err));

// //or
// async function getTheData(){
//   try{
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log('from the async function');
//   console.log(data.results[0].name.first);
// } catch (err){
// console.error(err);
// }
// }
// getTheData();*/

// window.onload = setup;

//Declare variables
const rootElem = document.getElementById("root");
const footerEl = document.getElementById("footer");
const paragraphEl = document.getElementById("p");
const footerLinkEl = document.getElementById("a");

paragraphEl.innerText = "Please note that the data has (originally) been pulled in from: ";
footerLinkEl.setAttribute("href", "https://www.tvmaze.com/api#licensing");
footerLinkEl.setAttribute("target", "_blank");
footerEl.classList.add("footer-root");
footerLinkEl.innerText = "TV MAZE";

footerEl.append(paragraphEl);
paragraphEl.appendChild(footerLinkEl);
document.body.appendChild(footerEl);

let allEpisodes;
let allEpisodesCounter;
let allShows = getAllShows();

const setup = () => {
  let renderDefaultTvShow = 112;
  createRequest(renderDefaultTvShow).then((data) => {
    getEpisodeSelectOption(data);
    allEpisodes = data;
    allEpisodesCounter = data.length;
    paragraphCounterEl.innerHTML = `Displaying ${allEpisodesCounter} / ${allEpisodesCounter} episodes`;
  });
}

//Make an API request 
const createRequest = async (showId) => {
  const URL = `https://api.tvmaze.com/shows/${showId}/episodes`;

  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) =>
      console.error(
        "There has been a problem with your fetch operation:",
        error
      )
    );
};

//Render each episode to the website
const renderEpisodeToWebsite = (name, season, number, image, summary) => {
  divCardH1El.innerText = `${name} - S${season
    .toString()
    .padStart(2, "0")}E${number.toString().padStart(2, "0")}`;
  imgCardEl.src = `${image.medium}`;
  divCardBodyEl.innerHTML = `${summary}`;

  rootElem.append(divCardEl);
};

//Create all episodes of tv shows
const getEpisodeOfTvShows = (episodeList) => {
  rootElem.innerHTML = "";
  episodeList.forEach(({ name, season, number, image, summary}) => {
    divCardEl = document.createElement("div");
    divCardEl.classList.add("card");
    divCardH1El = document.createElement("h1");
    divCardH1El.classList.add("card-header");
    imgCardEl = document.createElement("img");
     imgCardEl.classList.add("card-img-top");
     imgCardEl.setAttribute("alt", `A image from ${name}`);
     divCardBodyEl = document.createElement("div");
     divCardBodyEl.classList.add("card-body");
     buttonRemove = document.createElement("button");
     buttonRemove.classList.add("button-remove");
     buttonRemove.innerText = `Remove`;
     divCardEl.appendChild(divCardH1El);
     divCardEl.appendChild(imgCardEl);
     divCardEl.append(buttonRemove);
     divCardEl.appendChild(divCardBodyEl);

     renderEpisodeToWebsite(name, season, number, image, summary);
   });
//Remove the watched episode cy clicking on button
let buttonEl = document.querySelectorAll("button");
Array.from(buttonEl).forEach((button) => {
  button.addEventListener(
    "click", (e) => {
      let removeTarget = e.target.parentNode;
      removeTarget.parentNode.removeChild(removeTarget);
    },
    false
  );
});
};

//Create search bar component
const divSearchEl = document.createElement("div");
 divSearchEl.classList.add("search-bar-root");
 const inputSearchEl = document.createElement("input");
 inputSearchEl.classList.add("search-query");
 inputSearchEl.setAttribute("type", "text");
 inputSearchEl.setAttribute("placeholder", "Search for any episode");
 const paragraphCounterEl = document.createElement("p");
 divSearchEl.appendChild(inputSearchEl);
 divSearchEl.appendChild(paragraphCounterEl);
 document.body.prepend(divSearchEl);

 // Filter out episodes matching search term within episode title or episode summary
 const handleSearchQuery = (e) => {
   const searchQuery = e.target.value.toLowerCase();
   let filteredEpisodes = allEpisodes.filter(({ name, summary }) => {
     return (
       name.toLowerCase().includes(searchQuery) ||
       summary.toLowerCase().includes(searchQuery)
     );
   });
   getEpisodeOfTvShows(filteredEpisodes);

   const filteredEpisodesCounter = filteredEpisodes.length;
   const paragraphContent = ` ${filteredEpisodesCounter} / ${allEpisodesCounter}`;
   paragraphCounterEl.innerHTML = `Displaying ${paragraphContent} episodes`;
 };
 inputSearchEl.addEventListener("kyup", handleSearchQuery);

 //Create select input component for Episodes
 const inputSelectEl = document.createElement("select");
 inputSelectEl.classList.add("select-query");
 inputSelectEl.setAttribute("id", "option");
 inputSelectEl.setAttribute("type", "select");
 divSearchEl.prepend(inputSelectEl);

 const createEpisodeSelectOption = (allEpisodes) => {
   inputSelectEl.innerHTML = "";
   allEpisodes.forEach((episode) => {
     const optionEl = document.createElement("option");
     optionEl.value = episode.id;
     optionEl.innerText = `S${episode.season
       .toString()
       .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")} - ${
       episode.name
     }`;
     inputSelectEl.append(optionEl);
   });
 };

 // Check to see if selected episode id matches with any in the data if so call the render method with the found episode and render it to the webpage
 const selectedEpisode = document.getElementById("option");
 selectedEpisode.addEventListener("change", () => {
  rootElem.innerHTML = "";
  console.log(selectedEpisode);
  allEpisodes.find((episode) => {
    if(selectedEpisode.value == episode.id){
      const{ name, season, number, image, summary } = episode;
      renderEpisodeToWebsite(name, season, number, image,summary);
      paragraphCounterEl.innerHTML = `Displaying: <b>${name}</b> episode`;
    }
  });
 });

 // Add View All button which redirects user to all episodes 
 const buttonBackEl = document.createElement("a");
 buttonBackEl.classList.add("button-back");
 buttonBackEl.innerText = `VIEW ALL`;
 divSearchEl.appendChild(buttonBackEl);
 buttonBackEl.addEventListener("click", () => {
   setup();
   paragraphCounterEl.innerHTML = `Displaying ${allEpisodesCounter} / ${allEpisodesCounter} episodes`;
 });

 // Create select input component for Shows
 const inputShowSelectEl = document.createElement("select");
 inputShowSelectEl.classList.add("select-query", "select-query-show");
 inputShowSelectEl.setAttribute("id", "option-show");
 inputShowSelectEl.setAttribute("type", "select");
 divSearchEl.prepend(inputShowSelectEl);

 const sortShowByName = (a, b) => {
   return a.name > b.name ? 1 : -1;
 };
 let showSortedAtoZ = allShows.sort(sortShowByName);

 showSortedAtoZ.forEach(({ id, name }) => {
   const optionEl = document.createElement("option");
   optionEl.value = id;
   optionEl.innerText = `${name}`;
   inputShowSelectEl.append(optionEl);
 });

 inputShowSelectEl.addEventListener("change", () => {
   let showId = inputShowSelectEl.value;
   createRequest(showId).then((data) => {
     getEpisodeOfTvShows(data);
     createEpisodeSelectOption(data);
     allEpisodes = data;
     allEpisodesCounter = allEpisodes.length;
     console.log(allEpisodesCounter);
     paragraphCounterEl.innerHTML = `Displaying ${allEpisodesCounter} / ${allEpisodesCounter} episodes`;
   });
 });

 window.onload = setup;