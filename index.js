// Const Songs
// Defines the start time and end time of the songs.
const songs = {
  "Two Of Us": {
    start: "0",
    end: "177",
  },
  "Dig A Pony": {
    start: "177 ",
    end: "420",
  },
  "Across The Universe": {
    start: "421",
    end: "623",
  },
  "I Me Mine": {
    start: "624",
    end: "751",
  },
  "Dig It": {
    start: "752",
    end: "972",
  },
  "Let It Be": {
    start: "973",
    end: "1187",
  },
  "Maggie Mae": {
    start: "1191",
    end: "1250",
  },
  "I've Got A Feeling": {
    start: "1252",
    end: "1482",
  },
  "One After 909": {
    start: "1483",
    end: "1648",
  },
  "The Long And Winding Road": {
    start: "1650",
    end: "1861",
  },
  "For You Blue": {
    start: "1863",
    end: "2021",
  },
  "Get Back": {
    start: "2021",
    end: "2177",
  },
  "All of The Above": {
    start: "0",
    end: "2177",
  },
};

// Select class songs from index.html 
const songsDOM = document.querySelector(".songs");

const embed = document.getElementById("embed");

const newTabGithub = document.querySelector(".social");

// Select class round
const toggle = document.querySelector(".round");

// Select class slider from index.html
const slider = document.querySelector(".slider");

// execute modeswitch function on click.
toggle.addEventListener("click", modeSwitch);

// Darkmode/Lightmode + Making songs play when clicked

let isLight = true;

const updateMode = () => {
  isLight
  // Change the background image 1 if isight is true.
    ? (slider.style.backgroundImage = "url('./images/day.png')")

    // else Change the background image 2.
    : (slider.style.backgroundImage = "url('./images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

// if mode is dark i.e not light (islight = false) it will execute function updateMode()
function modeSwitch() {
  isLight = !isLight;
  updateMode();
}
embed.style = "display:none";
let userHasClickedASong = false;

// This function access songs object and take each song by index 
// to play the songs 
Object.keys(songs).map((song_title) => {
  const startTime = songs[song_title].start;
  const endTime = songs[song_title].end;

  // Created the Element p (paragraph) with javascript 
  const outerElem = document.createElement("p");

  // created the link element with javascript
  const link = document.createElement("a");

  // Shows the songs on the page.
  link.innerHTML = song_title;

  // Appear curson as pointer.
  link.style = "cursor: pointer";

  // when click on the links it will start song accoording to starttime and endtime mention in songs object.
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/rrhXXFAKEYk?start=${startTime}&autoplay=1&end=${endTime}`;
    console.log(
      "If you don't know this song, we suggest you go to the lyrics page. You can play the song from that page too :)"
    );
    if (!userHasClickedASong) {
      userHasClickedASong = true;
    }
  };

  // Adding all the links in paragraph element 
  outerElem.appendChild(link);

  // Adding all the pragraph and link to div with class songs.
  songsDOM.appendChild(outerElem);
});

// Open GitHub repo in a new window if user clicks GitHub icon on project website
newTabGithub.addEventListener("click", () => {
  window.open(
    "https://github.com/KendallDoesCoding/mogul-christmas",
    "_blank",
    "resizable=yes, scroll=yes, location=1, titlebar=yes, width=800, height=900, top=10, left=10"
  );
});
