if(localStorage.getItem("currentArtistName") !== null) {
  document.getElementById("artist-name").textContent = localStorage.getItem("currentArtistName");
}
const params = new URLSearchParams(window.location.search);
const artistKey = params.get("artist");

if (artistsData[artistKey]) {
  const artist = artistsData[artistKey];
  document.getElementById("artist-name").textContent = artist.name;
  document.getElementById("artist-photo").src = artist.photo;
  document.getElementById("artist-description").textContent = artist.description;

  const albumsContainer = document.getElementById("artist-albums");
  albumsContainer.innerHTML = artist.albums
    .map(
      (album) => `
      <div class="col">
        <a class="card bg-dark text-white border-secondary">
          <img src="${album.image}" class="card-img-top" alt="${album.title}">
          <div class="card-body">
            <h5 class="card-title">${album.title}</h5>
          </div>
        </a>
      </div>
    `
    )
    .join("");

  // const songsContainer = document.getElementById("artist-songs");
  // songsContainer.innerHTML = artist.songs
  // .map((song) => {
  //   return `
  //   <div class="col">
  //     <div class="card-music d-flex align-items-center gap-3" data-title="${song.title}" data-src="${song.src}" data-image="${song.albumImage}">
  //       <img src="${song.albumImage}" alt="${song.title}" style="height: 50px; width: 50px; object-fit: cover; border-radius: 4px;">
  //       <p class="mb-0">${song.title}</p>
  //     </div>
  //     </div>
  //   `;
  // })
  // .join("");
const songsContainer = document.getElementById("artist-songs");
songsContainer.innerHTML = artist.songs
  .map((song, index) => {
   
    return `
      <div class="col">
        <div class="card bg-dark text-white border-secondary h-100">
          <div class="d-flex align-items-center gap-3 p-3">
            <img src="${song.image}" alt="${song.title}" class="img-fluid" style="height: 50px; width: 50px; object-fit: cover; border-radius: 4px;">
            <div>
              <h6 class="mb-1">${song.title}</h6>
              <small class="text-white" style="font-weight: 300;">${artist.name}</small>
            </div>
          </div>
          <div class="card-footer bg-transparent border-0 text-end">
            <button class="btn btn-outline-light btn-sm play-song" onclick="playSelectedSong(${index}, '${artistKey}')">
              <i class="bi bi-play-circle"></i> Play
            </button>
          </div>
        </div>
      </div>
    `;
  })
  .join("");
  // localStorage.setItem("currentArtistSongs", JSON.stringify(artist.songs));
  // localStorage.setItem("currentArtistName", artist.name);
  // localStorage.setItem("currentArtistAlbums", JSON.stringify(artist.albums));
//   document.querySelectorAll(".play-song").forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     const song = artist.songs[index];
//     playSong(song, index);
//   });
// });

}
// function playSong(song, index) {
//   currentSongIndex = index;
//   audioPlayer.src = song.src.trim(); // trim in case of extra space
//   audioPlayer.play();

//   console.log(`Now playing: ${song.title}`);
// }
// document.getElementById("prev-track").addEventListener("click", () => {
//   if (currentSongIndex < artist.songs.length - 1) {
//     currentSongIndex++;
//     playSong(artistsData.artistKey.songs[currentSongIndex], currentSongIndex);
//   }
// });

// document.getElementById("next-track").addEventListener("click", () => {
//   if (currentSongIndex > 0) {
//     currentSongIndex--;
//     playSong(artist.songs[currentSongIndex], currentSongIndex);
//   }
// });
// audioPlayer.addEventListener("ended", () => {
//   if (currentSongIndex < artist.songs.length - 1) {
//     currentSongIndex++;
//     playSong(artistsData.artistKey.songs[currentSongIndex], currentSongIndex);
//   }
// });

// console.log(artistsData.bruno.songs[0]);