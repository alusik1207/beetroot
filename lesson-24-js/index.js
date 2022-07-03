const playlist = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const listId = document.getElementById("list");

for (let i = 0; i < playlist.length; i++) {
  const li = document.createElement("li");
  listId.appendChild(li);
  li.innerHTML = `author: "${playlist[i].author}", song: "${playlist[i].song}"`;
}

// ...

const btnOpenModal = document.getElementById("btn-open-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalWindow = document.getElementById("modal-window");
const pressing = true;
btnOpenModal.addEventListener("click", () => {
  modalWindow.style.display = "block";
  btnOpenModal.style.display = "none";
  pressing = !pressing;
});
btnCloseModal.addEventListener("click", () => {
  modalWindow.style.display = "none";
  btnOpenModal.style.display = "block";
  pressing = !pressing;
});

const lightRoom = document.getElementById("svitlofor");
const lightRed = document.getElementById("light-red");
const lightOrange = document.getElementById("light-orange");
const lightGreen = document.getElementById("light-green");
let activeLight=0;
svitlofor.addEventListener("click", () => {
  if(activeLight=0){
    lightRed.style.backgroundColor='red'
  }else if(activeLight=1){
    lightOrange.style.backgroundColor='orange'
  }else if(activeLight=2){
    lightGreen.style.backgroundColor='green'
  }
  activeLight++
});