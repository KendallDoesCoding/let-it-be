// Const Songs
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
const songsDOM = document.querySelector(".songs");
const embed = document.getElementById("embed");
const newTabGithub = document.querySelector(".social");
const toggle = document.querySelector(".round");
const slider = document.querySelector(".slider");
toggle.addEventListener("click", modeSwitch);

// Darkmode/Lightmode + Making songs play when clicked

let isLight = true;

const updateMode = () => {
  isLight
    ? (slider.style.backgroundImage = "url('./images/day.png')")
    : (slider.style.backgroundImage = "url('./images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

function modeSwitch() {
  isLight = !isLight;
  updateMode();
}
embed.style = "display:none";
let userHasClickedASong = false;

Object.keys(songs).map((song_title) => {
  const startTime = songs[song_title].start;
  const endTime = songs[song_title].end;
  const outerElem = document.createElement("p");
  const link = document.createElement("a");
  link.innerHTML = song_title;
  link.style = "cursor: pointer";
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/rrhXXFAKEYk?start=${startTime}&autoplay=1&end=${endTime}`;
    console.log(
      "If you don't know this song, we suggest you go to the lyrics page. You can play the song from that page too :)"
    );
    if (!userHasClickedASong) {
      userHasClickedASong = true;
    }
  };
  outerElem.appendChild(link);
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
