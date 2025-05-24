document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-music"); 
  const title = document.getElementById("player-title");
  const artist = document.getElementById("player-artist");
  const image = document.getElementById("player-image");
  const currentTime = document.getElementById("current-time");
  const duration = document.getElementById("song-duration");
  const audio = document.getElementById("audio-player");
  const progressBar = document.querySelector(".progress-bar");

  const playButtons = document.querySelectorAll(".play-song");

  const playBtn = document.querySelector(".bi-play-fill")?.closest("button") ||
                  document.querySelector(".bi-pause-fill")?.closest("button");
  const prevBtn = document.querySelector(".bi-skip-backward-fill").closest("button");
  const nextBtn = document.querySelector(".bi-skip-forward-fill").closest("button");
  const playIcon = document.querySelector(".bi-play-fill") || document.querySelector(".bi-pause-fill");
 


  let isPlaying = false;
  let currentIndex = 0;
  let artistSongs = [];
  // Extract song list from cards
  const songs = Array.from(cards).map(card => ({
    title: card.dataset.title,
    artist: card.dataset.artist,
    image: card.dataset.image,
    src: card.dataset.src
  }));

  // Load song into player
  function loadSong(index) {
    if (index < 0 || index >= artistSongs.length) return;
    const song = artistSongs[index];
    currentIndex = index;

    // Update the music player UI
    title.textContent = song.title;
    artist.textContent = song.artist;
    image.src = song.albumImage; // Use the album image from the song data
    audio.src = song.src;

    // Play the song
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }
  function playArtistSongs(artistName) {
    // Filter songs by the artist
    artistSongs = songs.filter(song => song.artist === artistName);

    if (artistSongs.length > 0) {
      loadSong(0); // Start playing the first song
    } else {
      console.error("No songs found for this artist.");
    }
  }
   playArtistBtn.addEventListener("click", () => {
    const artistName = document.getElementById("artist-name").textContent; // Get the artist's name
    playArtistSongs(artistName);
  });
  function updatePlayPauseIcon() {
    if (isPlaying) {
      playIcon.classList.replace("bi-play-fill", "bi-pause-fill");
    } else {
      playIcon.classList.replace("bi-pause-fill", "bi-play-fill");
    }
  }
  // Handle card click to select song
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      loadSong(index);

    });
  });

  // Play/Pause toggle
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
  });
  
 playButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");
    const audioSrc = clickedButton.getAttribute("data-src");
    const title = clickedButton.getAttribute("data-title");
    const artist = clickedButton.getAttribute("data-artist");
    const imageSrc = clickedButton.getAttribute("data-image");

    const audioPlayer = document.getElementById('audio-player');
    const playerTitle = document.getElementById('player-title');
    const playerImage = document.getElementById('player-image');
    const playerArtist = document.getElementById('player-artist');

    // Update display info
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    playerImage.src = imageSrc;

    // Update audio source
    audioPlayer.src = audioSrc;

    // Play audio after ensuring it's loaded
    audioPlayer.load(); // Force load new src
    audioPlayer.play().catch((err) => {
      console.error("Playback failed:", err);
    });
  });
});

  // Previous song
  prevBtn.addEventListener("click", () => {
    loadSong((currentIndex - 1 + songs.length) % songs.length);
  });

  // Next song
  nextBtn.addEventListener("click", () => {
    loadSong((currentIndex + 1) % songs.length);
  });

  // Update time display & progress bar
  audio.addEventListener("timeupdate", () => {
    const min = Math.floor(audio.currentTime / 60);
    const sec = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    currentTime.textContent = `${min}:${sec}`;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent || 0}%`;
  });

  // Set duration when metadata is ready
  audio.addEventListener("loadedmetadata", () => {
    const min = Math.floor(audio.duration / 60);
    const sec = Math.floor(audio.duration % 60).toString().padStart(2, "0");
    duration.textContent = `${min}:${sec}`;
  });

  // Autoplay next when song ends
  audio.addEventListener("ended", () => {
    loadSong((currentIndex + 1) % songs.length);
  });
});
function initializeSongClickListeners() {
  const songCards = document.querySelectorAll('.card-music');

  songCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const artist = card.getAttribute('data-artist');
      const imageSrc = card.getAttribute('data-image');
      const audioSrc = card.getAttribute('data-src'); // Ensure the `data-src` attribute is set in your HTML
       // Ensure the `data-image` attribute is set in your HTML
      // Update the music player
      const audioPlayer = document.getElementById('audio-player');
      const playerTitle = document.getElementById('player-title');
      const playerImage = document.getElementById('player-image');
      const playerArtist = document.getElementById('player-artist');

      playerTitle.textContent = title;
      playerArtist.textContent = artist;
      playerImage.src = imageSrc; // Ensure the `data-image` attribute is set in your HTML
      audioPlayer.src = audioSrc;

      // Play the selected song
      audioPlayer.play();
    });
  });
}
function initializeSongClickListeners() {
  const songCards = document.querySelectorAll(".card-music");

  songCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const artist = card.getAttribute("data-artist");
      const imageSrc = card.getAttribute("data-image");
      const audioSrc = card.getAttribute("data-src");

      // Update the music player
      const audioPlayer = document.getElementById("audio-player");
      const playerTitle = document.getElementById("player-title");
      const playerImage = document.getElementById("player-image");
      const playerArtist = document.getElementById("player-artist");

      playerTitle.textContent = title;
      playerArtist.textContent = artist;
      playerImage.src = imageSrc; // Update album art
      audioPlayer.src = audioSrc;

      // Play the selected song
      audioPlayer.play();
    });
  });
}

// Call this function on page load to set up listeners for the initial content
document.addEventListener('DOMContentLoaded', initializeSongClickListeners);
// Define a global function to play a song
function playSong(src) {
  const audioPlayer = document.getElementById("audio-player");
  audioPlayer.src = src;
  audioPlayer.play();

  // Update the player UI
  const playerTitle = document.getElementById("player-title");
  const playerArtist = document.getElementById("player-artist");
  const playerImage = document.getElementById("player-image");

  // These values can be updated dynamically if needed
  playerTitle.textContent = "Now Playing";
  playerArtist.textContent = "Unknown Artist";
  playerImage.src = ""; // Set album art if available
}
function playArtistSongs() {
  const songCards = document.querySelectorAll("#artist-songs .card-music");
  const artistSongs = Array.from(songCards).map((card) => ({
    title: card.getAttribute("data-title"),
    src: card.getAttribute("data-src"),
  }));

  if (artistSongs.length > 0) {
    let currentIndex = 0;

    // Load and play the first song
    function loadAndPlaySong(index) {
      const song = artistSongs[index];
      const audioPlayer = document.getElementById("audio-player");
      const playerTitle = document.getElementById("player-title");

      playerTitle.textContent = song.title;
      audioPlayer.src = song.src;
      audioPlayer.play();

      // Play the next song when the current one ends
      audioPlayer.onended = () => {
        currentIndex++;
        if (currentIndex < artistSongs.length) {
          loadAndPlaySong(currentIndex);
        }
      };
    }

    loadAndPlaySong(currentIndex);
  } else {
    console.error("No songs found for this artist.");
  }
}
function setupFooterModal() {
  const footer = document.querySelector("footer");
  const audioPlayer = document.getElementById("audio-player");

  footer.addEventListener("click", () => {
    // Populate modal content
    updateQueueList(document.getElementById("song-title").textContent);

    document.getElementById("modal-album-art").src = document.getElementById("album-cover").src;
    document.getElementById("modal-song-title").textContent = document.getElementById("song-title").textContent;
    document.getElementById("modal-song-artist").textContent = document.getElementById("song-artist").textContent;

    const duration = audioPlayer.duration;
    document.getElementById("modal-song-duration").textContent =
      isNaN(duration) ? "--" : formatTime(duration);

    // Show modal
    const songModal = new bootstrap.Modal(document.getElementById("songDetailsModal"));
    songModal.show();
  });

}
// Attach the Play Artist button event
document.querySelector(".btn-danger").addEventListener("click", playArtistSongs);
console.log("Function X executed");
