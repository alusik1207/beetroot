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

let i = 0;
svitlofor.addEventListener("click", () => {
  switch (i) {
    case 0:
      lightRed.style.backgroundColor = "red";
      break;

    case 1:
      lightRed.style.backgroundColor = "grey";
      lightOrange.style.backgroundColor = "orange";
      break;

    case 2:
      lightOrange.style.backgroundColor = "grey";
      lightGreen.style.backgroundColor = "green";
      break;
    case 3:
      lightRed.style.backgroundColor = "red";
      lightOrange.style.backgroundColor = "orange";
      lightGreen.style.backgroundColor = "green";

      i = -1;
      break;
  }
  i++;
});
