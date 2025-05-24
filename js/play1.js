// js/play.js
const audio = document.querySelector("#audio-player");
const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const progressBar = document.querySelector("#progress-bar");
const progressContainer = document.querySelector("#progress-container");
const currentTimeEl = document.querySelector("#current-time");
const durationEl = document.querySelector("#song-duration");
const songTitleEl = document.querySelector("#song-title");
const artistNameEl = document.querySelector("#song-artist");
const albumCoverEl = document.querySelector("#album-cover");
const volumeSlider = document.querySelector("#volume-control");

let songs = JSON.parse(localStorage.getItem("currentArtistSongs")) || [];
let artistName = localStorage.getItem("currentArtistName") || "--";
let currentIndex = parseInt(localStorage.getItem("currentSongIndex")) || 0;
console.log(songs);

document.addEventListener("DOMContentLoaded", () => {
  const playBtn1 = document.getElementById("play-artist");

  playBtn1.addEventListener("click", () => {
    // Get the artist key from the URL
    
    const params = new URLSearchParams(window.location.search);
    let artistKey = params.get("artist");

     // If the artist key is not found in the URL, use the data-artist attribute
    if (!artistKey) {
      artistKey = playBtn1.getAttribute("data-artist");
    }

    // Validate the artist key
    if (!artistKey || !artistsData[artistKey]) {
      console.error("Artist not found or invalid.");
      return;
    }

    // Get the artist's songs
    const artistSongs = artistsData[artistKey].songs;

    // Clear and set songs in localStorage
    localStorage.removeItem("currentArtistSongs");
    localStorage.setItem("currentArtistSongs", JSON.stringify(artistSongs));
    songs = JSON.parse(localStorage.getItem("currentArtistSongs")) || [];
    // Load the first song into the footer audio player
    if (artistSongs.length > 0) {
      const firstSong = artistSongs[0];
      parseInt(localStorage.getItem("currentSongIndex")) || 0;
      const audio = document.getElementById("audio-player");
      const cover = document.getElementById("album-cover");
      const title = document.getElementById("song-title");
      const artist = document.getElementById("song-artist");
      albumArt = firstSong.image;
      audio.src = firstSong.src;
      cover.src = firstSong.image;
      title.textContent = firstSong.title;
      artist.textContent = firstSong.artist;

      audio.play(); // Optional: auto-play
      playBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
      
    }
  });
});

function playSelectedSong(index, artist){
  let artistKey = artist
  const song = artistsData[artistKey].songs[index];
  
   if (!song) {
    resetDisplay();
    return;
  }
  audio.src = song.src;
  songTitleEl.textContent = song.title;
  artistNameEl.textContent = song.artist  || "--";
  albumCoverEl.src = song.image;;
  audio.load();
  audio.play();

  playBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
  
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function resetDisplay() {
  songTitleEl.textContent = "--";
  artistNameEl.textContent = "--";
  albumCoverEl.src = "";
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";
  progressBar.style.width = "0%";
}

function loadSong(index) {
  const song = songs[index];
  if (!song) {
    resetDisplay();
    return;
  }
  audio.src = song.src;
  songTitleEl.textContent = song.title;
  artistNameEl.textContent = song.artist  || "--";
  albumCoverEl.src = song.image;;
  audio.load();
}

function updateProgress() {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  if (duration) {
    audio.currentTime = (clickX / width) * duration;
  }
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
});

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

// Optional: volume control
if (volumeSlider) {
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
}

loadSong(currentIndex); // Load initial
