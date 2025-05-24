const artistsData = {
  bruno: {
    name: "Bruno Mars",
    photo: "/images/artist/bruno.jpg",
    description: "Bruno Mars is a Grammy-winning artist known for his soulful voice.",
    albums: [
      { title: "Doo-Wops & Hooligans", image: "/images/album/Bruno Mars/doowoops.png"},
      { title: "Unorthodox Jukebox", image: "/images/album/Bruno Mars/unorthodox.png"},
      { title: "24K Magic", image: "/images/album/Bruno Mars/24k.png"},
    ],
    songs: [
      { title: "24K Magic", src: "/audio/Bruno Mars - 24K Magic.mp3", image: "/images/album/Bruno Mars/24k.png",  artist: "Bruno Mars"},
      { title: "Just the Way You Are", src: "/audio/Bruno Mars - Just the Way You Are.mp3", image: "../images/album/Bruno Mars/doowoops.png",  artist: "Bruno Mars" },
      { title: "Leave The Door Open", src: "/audio/Bruno Mars, Anderson .Paak, Silk Sonic - Leave The Door Open.mp3", image: "/images/album/Bruno Mars/silksonic.png",  artist: "Bruno Mars" },
      { title: "Locked Out of Heaven", src: "/audio/lockedout.mp3", image: "/images/album/Bruno Mars/unorthodox.png",  artist: "Bruno Mars" },
    ],
  },
  unique: {
    name: "Unique Salonga",
    photo: "../images/artist/unique.jpg",
    description:
      "Unique Salonga is a Filipino singer-songwriter known for his poetic lyrics and distinct voice.",
    albums: [
      { title: "Grandma", image: "/images/album/Unique/grandma.png" },
      { title: "Pangalan", image: "/images/album/Unique/pangalan.png" },
      { title: "Daisy", image: "/images/album/Unique/daisy.png" },
    ],
    songs: [
      { title: "Midnight Sky", src: "/audio/Unique Salonga - Midnight Sky.mp3", image: "/images/album/Unique/grandma.png" ,  artist: "Unique Salonga" },
      { title: "Mga Katulad Mo", src: "/audio/Unique Salonga - Mga Katulad Mo.mp3", image: "/images/album/Unique/pangalan.png" ,  artist: "Unique Salonga" },
      { title: "Daisy", src: "/audio/Unique Salonga - Daisy.mp3", image: "/images/album/Unique/daisy.png" ,  artist: "Unique Salonga" },
    ],
  },
  rivermaya: {
    name: "Rivermaya",
    photo: "../images/artist/rivermaya.webp",
    description:
      "Rivermaya is one of the most influential rock bands in the Philippines.",
    albums: [
      { title: "Tuloy Ang Ligaya", image: "/images/album/Rivermaya/tuloy.jpg" },
      { title: "Greatest Hits", image: "/images/album/Rivermaya/greatest.png" },
      { title: "Rivermaya", image: "/images/album/Rivermaya/rivermaya.png" },
    ],
    songs: [
      { title: "Umaaraw, Umuulan", src: "/audio/Rivermaya - Umaaraw, Umuulan.mp3", image: "/images/album/Rivermaya/tuloy.jpg" ,  artist: "Rivermaya" },
      { title: "Balisong", src: "/audio/Rivermaya - Balisong.mp3", image: "/images/album/Rivermaya/greatest.png",  artist: "Rivermaya" },
      { title: "Kisapmata", src: "/audio/Rivermaya - Kisapmata.mp3", image: "/images/album/Rivermaya/rivermaya.png",  artist: "Rivermaya"  },
    ],
  },
  spongecola: {
    name: "Sponge Cola",
    photo: "../images/artist/spongecola.jpg",
    description:
      "Sponge Cola is a Filipino rock band famed for combining heartfelt lyrics with energetic performances.",
    albums: [
      { title: "Palabas & Transit Collection", image: "/images/album/Spongecola/palabastransit.png"},
      { title: "Araw Oras Tagpuan", image: "/images/album/Spongecola/araw.jpg" },
      { title: "Spongecola", image: "/images/album/Spongecola/sponge.jpg" },
    ],
    songs: [
      { title: "Pasubali", src: "/audio/Sponge Cola - Pasubali.mp3", image: "/images/album/Spongecola/palabastransit.png",  artist: "Sponge Cola" },
      { title: "Kay Tagal Kitang Hinintay", src: "/audio/Sponge Cola - Kay Tagal Kitang Hinintay.mp3", image: "/images/album/Spongecola/araw.jpg",  artist: "Sponge Cola" },
      { title: "Di Na Mababawi", src: "/audio/Sponge Cola - Di Na Mababawi.mp3", image: "/images/album/Spongecola/sponge.jpg",  artist: "Sponge Cola" },
    ],
  },
  kitchie: {
    name: "Kitchie Nadal",
    photo: "../images/artist/kitchie.jpg",
    description:
      "Kitchie Nadal is a Filipina singer-songwriter known for her introspective lyrics and soulful acoustic rock style.",
    albums: [
      { title: "Kitchie Nadal", image: "/images/album/Kitchie/kitchie.png" },
      { title: "Love Letter", image: "/images/album/Kitchie/love.png" },
    ],
    songs: [
      { title: "Same Ground", src: "/audio/Kitchie Nadal - Same Ground.mp3", image: "/images/album/Kitchie/kitchie.png",  artist: "Kitchie Nadal" },
      { title: "Huwag Na Huwag Mong Sasabihin", src: "/audio/Kitchie Nadal - Huwag Na Huwag Mong Sasabihin.mp3", image: "/images/album/Kitchie/love.png",  artist: "Kitchie Nadal"},
     
    ],
  },
  hale: {
    name: "Hale",
    photo: "../images/artist/hale.avif",
    description:
      "Hale is a Filipino alternative rock band known for their emotional lyrics and melodic tunes.",
    albums: [
      { title: "Hale", image: "/images/album/Hale/hale.png" },
      { title: "Twilight", image: "/images/album/Hale/twilight.png" },
    ],
    songs: [
      { title: "Kung Wala Ka", src: "/audio/Hale - Kung Wala Ka.mp3", image: "/images/album/Hale/hale.png",  artist: "Hale" },
      { title: "The Day You Said Goodnight", src: "/audio/Hale - The Day You Said Goodnight.mp3", image: "/images/album/Hale/twilight.png",  artist: "Hale" },
    ],
  },
  sugarfree: {
    name: "Sugarfree",
    photo: "../images/artist/sugarfree.jpg",
    description:
      "Sugarfree was a critically acclaimed Filipino band recognized for their heartfelt storytelling.",
    albums: [
      { title: "Sa Wakas", image: "/images/album/sugarfree/sawakas.png" },
      { title: "Dramachine", image: "/images/album/sugarfree/drama.png" },
      { title: "Tala-Arawan", image: "/images/album/sugarfree/tala-arawan/Folder.png" },
    ],
    songs: [
      { title: "Burnout", src: "/audio/Sugarfree - Burnout.mp3", image: "/images/album/sugarfree/sawakas.png",  artist: "Sugarfree" },
      { title: "Prom", src: "/audio/Sugarfree - Prom.mp3", image: "/images/album/sugarfree/drama.png",  artist: "Sugarfree" },
      { title: "Kung Ayaw Mo Na Sa Akin", src: "/audio/Sugarfree - Kung Ayaw Mo Na Sa Akin.mp3", image: "/images/album/sugarfree/tala-arawan/Folder.png",  artist: "Sugarfree" },
    ],
  },
};

// 
