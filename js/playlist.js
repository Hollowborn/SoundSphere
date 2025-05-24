// js/playlists.js

const playlists = {
  "Bruno Hits": [
    {
      title: "24K Magic",
      src: "/audio/Bruno Mars - 24K Magic.mp3",
      image: "/images/album/Bruno Mars/24k.png",
      artist: "Bruno Mars"
    },
    {
      title: "Just the Way You Are",
      src: "/audio/Bruno Mars - Just the Way You Are.mp3",
      image: "../images/album/Bruno Mars/doowoops.png",
      artist: "Bruno Mars"
    },
    {
      title: "Locked Out of Heaven",
      src: "/audio/lockedout.mp3",
      image: "/images/album/Bruno Mars/unorthodox.png",
      artist: "Bruno Mars"
    },
    {
      title: "Leave The Door Open",
      src: "/audio/Bruno Mars, Anderson .Paak, Silk Sonic - Leave The Door Open.mp3",
      image: "/images/album/Bruno Mars/silksonic.png",
      artist: "Bruno Mars"
    }
  ],
  "OPM Rock": [
    {
      title: "Balisong",
      src: "/audio/Rivermaya - Balisong.mp3",
      image: "/images/album/Rivermaya/greatest.png",
      artist: "Rivermaya"
    },
    {
      title: "Di Na Mababawi",
      src: "/audio/Sponge Cola - Di Na Mababawi.mp3",
      image: "/images/album/Spongecola/sponge.jpg",
      artist: "Sponge Cola"
    },
    {
      title: "Huwag Na Huwag Mong Sasabihin",
      src: "/audio/Kitchie Nadal - Huwag Na Huwag Mong Sasabihin.mp3",
      image: "/images/album/Kitchie/love.png",
      artist: "Kitchie Nadal"
    },
    {
      title: "Burnout",
      src: "/audio/Sugarfree - Burnout.mp3",
      image: "/images/album/sugarfree/sawakas.png",
      artist: "Sugarfree"
    },
    {
      title: "Kisapmata",
      src: "/audio/Rivermaya - Kisapmata.mp3",
      image: "/images/album/Rivermaya/rivermaya.png",
      artist: "Rivermaya"
    }
  ],
  "OPM Love Songs": [
    {
      title: "The Day You Said Goodnight",
      src: "/audio/Hale - The Day You Said Goodnight.mp3",
      image: "/images/album/Hale/twilight.png",
      artist: "Hale"
    },
    {
      title: "Pasubali",
      src: "/audio/Sponge Cola - Pasubali.mp3",
      image: "/images/album/Spongecola/palabastransit.png",
      artist: "Sponge Cola"
    },
    {
      title: "Prom",
      src: "/audio/Sugarfree - Prom.mp3",
      image: "/images/album/sugarfree/drama.png",
      artist: "Sugarfree"
    },
    {
      title: "Same Ground",
      src: "/audio/Kitchie Nadal - Same Ground.mp3",
      image: "/images/album/Kitchie/kitchie.png",
      artist: "Kitchie Nadal"
    },
    {
      title: "Kay Tagal Kitang Hinintay",
      src: "/audio/Sponge Cola - Kay Tagal Kitang Hinintay.mp3",
      image: "/images/album/Spongecola/araw.jpg",
      artist: "Sponge Cola"
    }
  ],
  "Acoustic & Chill": [
    {
      title: "Midnight Sky",
      src: "/audio/Unique Salonga - Midnight Sky.mp3",
      image: "/images/album/Unique/grandma.png",
      artist: "Unique Salonga"
    },
    {
      title: "Daisy",
      src: "/audio/Unique Salonga - Daisy.mp3",
      image: "/images/album/Unique/daisy.png",
      artist: "Unique Salonga"
    },
    {
      title: "Kung Wala Ka",
      src: "/audio/Hale - Kung Wala Ka.mp3",
      image: "/images/album/Hale/hale.png",
      artist: "Hale"
    },
    {
      title: "Kung Ayaw Mo Na Sa Akin",
      src: "/audio/Sugarfree - Kung Ayaw Mo Na Sa Akin.mp3",
      image: "/images/album/sugarfree/tala-arawan/Folder.png",
      artist: "Sugarfree"
    }
  ]
};

let albumArt = localStorage.getItem("currentAlbumArt");
// Dynamically render playlists to the sidebar
function renderPlaylists() {
  const navList = document.querySelector("#nav-bar-item");

  // Add playlist header
  const header = document.createElement("li");
  header.classList.add("nav-item");
  header.innerHTML = `<span class="text-white fw-bold ps-3 mt-3 d-block">Playlists</span>`;
  navList.appendChild(header);

  // Add each playlist as a separate link under nav
  Object.keys(playlists).forEach(name => {
    const item = document.createElement("li");
    item.classList.add("nav-item");
    item.innerHTML = `
      <a href="#" class="nav-link text-white ps-4 playlist-link" data-playlist="${name}">
        <i class="bi bi-music-note-list me-2"></i>${name}
      </a>
    `;
    navList.appendChild(item);
  });

  // Add event listeners to load songs when a playlist is clicked
  document.querySelectorAll(".playlist-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const playlistName = e.target.dataset.playlist;
      const selectedSongs = playlists[playlistName];
      
      localStorage.setItem("currentArtistSongs", JSON.stringify(selectedSongs));
      const firstSong = selectedSongs[0];
      console.log(localStorage.getItem("currentArtistSongs"));
      songs = JSON.parse(localStorage.getItem("currentArtistSongs")) || [];
      // Update footer player UI
      if (firstSong) {
        
        const audio = document.getElementById("audio-player");
        const cover = document.getElementById("album-cover");
        const title = document.getElementById("song-title");
        const artist = document.getElementById("song-artist");
        albumArt = firstSong.image;
        audio.src = firstSong.src;
        cover.src = firstSong.image;
        title.textContent = firstSong.title;
        artist.textContent = firstSong.artist;

        audio.play(); // Optional: auto-play the first song
        playBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", renderPlaylists);
