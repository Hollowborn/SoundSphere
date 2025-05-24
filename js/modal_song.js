function setupFooterModal() {
  const footer = document.querySelector("#album-cover");
  const audioPlayer = document.getElementById("audio-player");

  footer.addEventListener("click", () => {
    // Populate modal content
    document.getElementById("modal-album-art").src = document.getElementById("album-cover").src;
    document.getElementById("modal-song-title").textContent = document.getElementById("song-title").textContent;
    document.getElementById("modal-song-artist").textContent = document.getElementById("song-artist").textContent;

    const duration = audioPlayer.duration;
    document.getElementById("modal-song-duration").textContent =
      isNaN(duration) ? "--" : formatTime(duration);

    // Show modal
    const songModal = new bootstrap.Modal(document.getElementById("songDetailsModal"));
    updateQueueList(document.getElementById("song-title").textContent);
    songModal.show();
    

  });
  function updateQueueList(currentTitle) {
  const queueList = document.getElementById("queue-list");
  queueList.innerHTML = "";

  const currentPlaylist = JSON.parse(localStorage.getItem("currentArtistSongs")) || [];

  currentPlaylist.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("py-1", "px-2", "rounded");

    li.textContent = `${song.title} - ${song.artist}`;

    if (song.title === currentTitle) {
      li.classList.add("bg-secondary", "text-white", "fw-bold");
    } else {
      li.classList.add("text-white");
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        playSongAtIndex(index, currentPlaylist);
      });
    }

    queueList.appendChild(li);
  });
}

function playSongAtIndex(index, playlist) {
  const song = playlist[index];
  const audioPlayer = document.getElementById("audio-player");

  // Set audio and UI
  audioPlayer.src = song.src;
  document.getElementById("album-cover").src = song.image;
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;

  // Update modal as well
  document.getElementById("modal-album-art").src = song.image;
  document.getElementById("modal-song-title").textContent = song.title;
  document.getElementById("modal-song-artist").textContent = song.artist;
  document.getElementById("modal-song-duration").textContent = audioPlayer.duration;

  audioPlayer.play();

  // Sync icons
  document.getElementById("play-btn").innerHTML = `<i class="bi bi-pause-fill"></i>`;
  document.getElementById("modal-play-icon").className = "bi bi-pause-fill";

  // Update queue highlight
  updateQueueList(song.title);
}
}

function updateQueueList(currentTitle) {
  const queueList = document.getElementById("queue-list");
  queueList.innerHTML = "";

  const currentPlaylist = JSON.parse(localStorage.getItem("currentArtistSongs")) || [];

  currentPlaylist.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("py-1", "px-2", "rounded");

    li.textContent = `${song.title} - ${song.artist}`;

    if (song.title === currentTitle) {
      li.classList.add("bg-secondary", "text-white", "fw-bold");
    } else {
      li.classList.add("text-muted");
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        playSongAtIndex(index, currentPlaylist);
      });
    }

    queueList.appendChild(li);
  });
}
// Helper to format seconds to mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
// function playSongAtIndex(index, playlist) {
//   const song = playlist[index];
//   const audioPlayer = document.getElementById("audio-player");

//   // Set audio and UI
//   audioPlayer.src = song.src;
//   document.getElementById("album-cover").src = song.image;
//   document.getElementById("song-title").textContent = song.title;
//   document.getElementById("song-artist").textContent = song.artist;

//   // Update modal as well
//   document.getElementById("modal-album-art").src = song.image;
//   document.getElementById("modal-song-title").textContent = song.title;
//   document.getElementById("modal-song-artist").textContent = song.artist;

//   audioPlayer.play();

//   // Sync icons
//   document.getElementById("play-btn").innerHTML = `<i class="bi bi-pause-fill"></i>`;
//   document.getElementById("modal-play-icon").className = "bi bi-pause-fill";

//   // Update queue highlight
//   updateQueueList(song.title);
// }

document.addEventListener("DOMContentLoaded", setupFooterModal);
