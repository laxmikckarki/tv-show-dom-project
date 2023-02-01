//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
 // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  console.log(episodeList);
  for(const episode of episodeList) {
  
    const div = document.createElement('div')
    const image = document.createElement('img')
    image.src = episode.image.medium
    div.appendChild(image)
    div.innerHTML+= `${episode.name}, ${episode.season}, ${episode.number}`
    rootElem.appendChild(div);
    const season = 1;
    const episode = 10;
    season.episode+= `S${season.toString().padStart(2, 0)}E${episode}`

    }


    }



window.onload = setup;
