const songs = [
  {
    artist: "10cc",
    title: "I'm not in love",
    duration: "5 min 06",
    year: "1975",
    style: ["Soft Rock"],
    category: "70s Music",
    cover: "img/10cc-not-in-love.jpg"
  },
  {
    artist: "ABBA",
    title: "Gimme ! Gimme ! Gimmie !",
    duration: "3 min 07",
    year: "",
    style: ["Pop","Disco"],
    category: "70s Music",
    cover: "img/abba-gimme.jpg"
  },
  {
    artist: "ABBA",
    title: "Mammamia",
    duration: "3 min 28",
    year: "",
    style: ["Pop"],
    category: "70s Music",
    cover: "img/abba-mammamia.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "All that she wants",
    duration: "3 min 22",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/ace-of-base-all-that-she-wants.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "Happy Nation",
    duration: "3 min 36",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/ace-of-base-happy-nation.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "The Sign",
    duration: "3 min 06",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/ace-of-base-the-sign.jpg"
  },
  {
    artist: "Aha",
    title: "Take on me",
    duration: "3 min 42",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/take-on-me.jpg"
  },
  {
    artist: "Air",
    title: "Kelly watch the stars",
    duration: "3 min 42",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/air-kelly-watch-the-stars.jpg"
  },
  {
    artist: "Alannah Myles",
    title: "Black Velvet",
    duration: "4 min 39",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/black-velvet.jpg"
  },
  {
    artist: "Alice Deejay",
    title: "Better off alone",
    duration: "3 min 32",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/alice-deejay-better-off-alone.jpg"
  },
  {
    artist: "Alicia Keys",
    title: "No one",
    duration: "4 min 08",
    year: "",
    style: ["R&B"],
    category: "2000s Music",
    cover: "img/alicia-keys-no-one.jpg"
  },
  {
    artist: "Alizee",
    title: "Moi Lolita",
    duration: "4 min 26",
    year: "",
    style: ["French Pop"],
    category: "2000s Music",
    cover: "img/alizee-moi-lolita.jpg"
  },
  {
    artist: "Alphaville",
    title: "Big in Japan",
    duration: "4 min 46",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/alphaville-big-in-japan.jpg"
  },
  {
    artist: "Alphaville",
    title: "Forever Young",
    duration: "3 min 49",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/alphaville-forever-young.jpg"
  },
  {
    artist: "Amy Winehouse",
    title: "Back to Black",
    duration: "3 min 56",
    year: "",
    style: ["Soul"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Amy Winehouse",
    title: "You know I'm no good",
    duration: "3 min 34",
    year: "",
    style: ["Soul"],
    category: "2000s Music",
    cover: "img/Amy-Winehouse-Back-To-Black.jpg"
  },
  {
    artist: "Andrea Bocelli",
    title: "Vivo por Ella",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Animals",
    title: "House of the rising sun",
    duration: "4 min 39",
    year: "",
    style: ["Rock"],
    category: "60s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Anita Ward",
    title: "Ring My Bell",
    duration: "3 min 26",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ann Lee",
    title: "2 Times",
    duration: "3 min 48",
    year: "",
    style: ["Dance-Pop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Arctic Monkeys",
    title: "505",
    duration: "4 min 10",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Artemas",
    title: "I like the way you kiss me",
    duration: "2 min 18",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Avicii",
    title: "Levels",
    duration: "2 min 57",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Awolnation",
    title: "Sail",
    duration: "4 min 00",
    year: "",
    style: ["Alternative Rock"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Backstreet Boys",
    title: "I Want It That Way",
    duration: "3 min 29",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Bag Raiders",
    title: "Shooting Star",
    duration: "3 min 50",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Bangles",
    title: "Eternal Flame",
    duration: "3 min 47",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Bangles",
    title: "Walk like an Egyptian",
    duration: "3 min 12",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Barry White",
    title: "You're the first the last my everything",
    duration: "3 min 37",
    year: "",
    style: ["Soul"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Billie Eilish",
    title: "Bad Guy",
    duration: "3 min 11",
    year: "",
    style: ["Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Billie Eilish",
    title: "Birds of a feather",
    duration: "3 min 25",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Billy Idol",
    title: "Eyes Without A Face",
    duration: "5 min 01",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Billy Idol",
    title: "Flesh for Fantasy",
    duration: "4 min 05",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Billy Idol",
    title: "White Wedding",
    duration: "3 min 21",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Black",
    title: "Wonderful Life",
    duration: "4 min 42",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "I got a feeling",
    duration: "4 min 57",
    year: "",
    style: ["Dance-Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "Meet me halfway",
    duration: "4 min 42",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "Pump It",
    duration: "3 min 32",
    year: "",
    style: ["Hip Hop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Blondie",
    title: "Atomic",
    duration: "4 min 59",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Blondie",
    title: "Heart of glass",
    duration: "4 min 19",
    year: "",
    style: ["New Wave"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Blues Brothers",
    title: "Peter Gunn Theme",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Bon Jovi",
    title: "It's my life",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Boney M",
    title: "Rasputin",
    duration: "4 min 25",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Bonnie Tyler",
    title: "Holding outta hero",
    duration: "5 min 09",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "BTS",
    title: "Standing Next to You",
    duration: "3 min 19",
    year: "",
    style: ["K-Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Cake",
    title: "Never There",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Camila Cabello",
    title: "Havana ft. Young Thug",
    duration: "3 min 31",
    year: "",
    style: ["Latin Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Carlos Santana",
    title: "Maria Maria",
    duration: "4 min 29",
    year: "",
    style: ["Latin Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Chaka Khan",
    title: "Ain't Nobody",
    duration: "3 min 55",
    year: "",
    style: ["Funk"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Cock Robin",
    title: "The promise you made",
    duration: "3 min 57",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Coldplay",
    title: "Viva La Vida",
    duration: "3 min 59",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Coldplay",
    title: "Yellow",
    duration: "4 min 21",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Cyndi Lauper",
    title: "Time after Time",
    duration: "3 min 56",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Cyndi Lauper",
    title: "True Colors",
    duration: "3 min 32",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Da Hool",
    title: "Meet Her At The Love Parade",
    duration: "2 min 44",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Aerodynamic",
    duration: "3 min 35",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/daft-punk-discovery.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Digital Love",
    duration: "4 min 46",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/daft-punk-discovery.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Giorgio",
    duration: "5 min 51",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Harder better faster stronger",
    duration: "3 min 38",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/daft-punk-discovery.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Instant Crush",
    duration: "5 min 14",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Lose yourself to dance",
    duration: "5 min 54",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "One More Time",
    duration: "3 min 52",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/daft-punk-discovery.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Robot Rock",
    duration: "4 min 45",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Television Rules the Nation",
    duration: "4 min 05",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Veridis Quo",
    duration: "2 min 35",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/daft-punk-discovery.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Within",
    duration: "3 min 33",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Daniel Balavoine",
    title: "Tout les cris les SOS",
    duration: "4 min 42",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Dario G",
    title: "Sunchyme",
    duration: "3 min 57",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "David Bowie",
    title: "Life on mars",
    duration: "3 min 22",
    year: "",
    style: ["Glam Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Desireless",
    title: "Voyage Voyage",
    duration: "4 min 17",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Dexys Midnight Runners",
    title: "Come on Eileen",
    duration: "4 min 19",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Dire Straits",
    title: "Brothers in arms",
    duration: "6 min 30",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "DJ Okawari",
    title: "Flower Dance",
    duration: "4 min 22",
    year: "",
    style: ["Instrumental"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Donna Summer",
    title: "Hot Stuff",
    duration: "3 min 46",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Dune (1984)",
    title: "Take My Hand (Credits music)",
    duration: "4 min 17",
    year: "",
    style: ["Soundtrack"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Duran Duran",
    title: "Ordinary World",
    duration: "4 min 59",
    year: "",
    style: ["Pop Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Elvis Presley",
    title: "Suspicious Minds",
    duration: "3 min 25",
    year: "",
    style: ["Rock"],
    category: "60s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ennio Moriconne",
    title: "Chi Mai",
    duration: "4 min 02",
    year: "",
    style: ["Soundtrack"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Eurythmics",
    title: "Here comes the rain again",
    duration: "5 min 05",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Evanescence",
    title: "My immortal",
    duration: "4 min 25",
    year: "",
    style: ["Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Everything But The Girl",
    title: "Missing",
    duration: "3 min 22",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Flashdance - Irene Cara",
    title: "What a feeling",
    duration: "3 min 33",
    year: "",
    style: ["Disco"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Fleetwood Mac",
    title: "Dreams",
    duration: "4 min 17",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Florence and the machines",
    title: "Cosmic love",
    duration: "4 min 13",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Fools Garden",
    title: "Lemon Tree",
    duration: "3 min 09",
    year: "",
    style: ["Pop Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "FR David",
    title: "Words",
    duration: "4 min 19",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Frank Sinatra",
    title: "My Way",
    duration: "4 min 32",
    year: "",
    style: ["Pop"],
    category: "60s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Franz Ferdinand",
    title: "Take me out",
    duration: "4 min 01",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Freaks",
    title: "When Mama Isn't Home",
    duration: "2 min 05",
    year: "",
    style: ["Dance"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Fugees",
    title: "Fu Gee La",
    duration: "4 min 24",
    year: "",
    style: ["Hip Hop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Fun",
    title: "Some nights",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Futari No Kimochi",
    title: "Inuyasha Sad Song",
    duration: "1 min 51",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Game of Thrones",
    title: "Light of The Seven",
    duration: "9 min 41",
    year: "",
    style: ["Soundtrack"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Gerry Rafferty",
    title: "Baker Street",
    duration: "6 min 17",
    year: "",
    style: ["Soft Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Baby Queen",
    duration: "3 min 24",
    year: "",
    style: ["Alternative"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Clint Eastwood",
    duration: "4 min 11",
    year: "",
    style: ["Alternative"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Silent Running",
    duration: "4 min 20",
    year: "",
    style: ["Alternative"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Gotye",
    title: "Somebody That I Used To Know ft. Kimbra",
    duration: "4 min 05",
    year: "",
    style: ["Indie Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Green Day",
    title: "Boulevard of Broken Dreams",
    duration: "4 min 17",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Highway Men",
    title: "Highwayman",
    duration: "3 min 00",
    year: "",
    style: ["Country"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Indila - Derniere Danse",
    title: "Derniere Danse",
    duration: "3 min 29",
    year: "",
    style: ["Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Indochine",
    title: "J'ai demande a la Lune",
    duration: "3 min 29",
    year: "",
    style: ["Pop Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Indochine",
    title: "L'aventurier",
    duration: "3 min 45",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Inuyasha OST",
    title: "Aika (sad song)",
    duration: "2 min 00",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Iron Maiden",
    title: "Killers",
    duration: "4 min 05",
    year: "",
    style: ["Heavy Metal"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Iron Maiden",
    title: "The Trooper",
    duration: "3 min 45",
    year: "",
    style: ["Heavy Metal"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Jamiroquai",
    title: "Virtual Insanity",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Jamiroquai",
    title: "Deeper Underground",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Janet Jackson",
    title: "Together again",
    duration: "4 min 14",
    year: "",
    style: ["Dance Pop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Jim Noir - My Patch",
    title: "My Patch",
    duration: "4 min 00",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "John Paul Young",
    title: "Love Is In The Air",
    duration: "3 min 07",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Johnny Cash",
    title: "Hurt",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Johnny Hallyday",
    title: "Allumer le feu",
    duration: "5 min 23",
    year: "",
    style: ["French Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Justice",
    title: "Civilization",
    duration: "4 min 09",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Justice",
    title: "D.A.N.C.E",
    duration: "2 min 59",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Justice",
    title: "On N On",
    duration: "3 min 13",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Justice & Simian",
    title: "We Are Your Friends",
    duration: "2 min 40",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Keane",
    title: "Somewhere Only We Know",
    duration: "3 min 52",
    year: "",
    style: ["Pop Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Kid Francescoli",
    title: "Moon",
    duration: "6 min 18",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Killers",
    title: "Human",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Kim Carnes",
    title: "Bette Davis Eyes",
    duration: "3 min 49",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Kool & the Gang",
    title: "Fresh",
    duration: "3 min 22",
    year: "",
    style: ["Funk"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Kraftwerk",
    title: "The Model",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Laura Branigan",
    title: "Self Control",
    duration: "3 min 44",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Liquido",
    title: "Narcotic",
    duration: "4 min 23",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "LocoRoco",
    title: "Menu",
    duration: "1 min 10",
    year: "",
    style: ["Video Game Music"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Lykke Li",
    title: "I Follow Rivers (Tiesto Remix)",
    duration: "3 min 16",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Macklemore & Ryan Lewis",
    title: "Thrift Shop",
    duration: "3 min 49",
    year: "",
    style: ["Hip Hop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Madonna",
    title: "La Isla Bonita",
    duration: "3 min 48",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Madonna",
    title: "Like A Prayer",
    duration: "7 min 04",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Major Lazer",
    title: "Lean on",
    duration: "2 min 56",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Marvin Gaye",
    title: "Sexual Healing",
    duration: "4 min 08",
    year: "",
    style: ["Soul"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Massive Attack",
    title: "Angel",
    duration: "6 min 13",
    year: "",
    style: ["Trip-Hop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Massive Attack",
    title: "Teardrop",
    duration: "5 min 24",
    year: "",
    style: ["Trip-Hop"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Medley - Sweet Dreams vs Seven Nation Army",
    title: "Sweet Dreams vs Seven Nation Army",
    duration: "3 min 33",
    year: "",
    style: ["Mashup"],
    category: "Mixed Years",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Meute",
    title: "You and Me (Flume Remix)",
    duration: "5 min 33",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "MGMT",
    title: "Kids",
    duration: "4 min 52",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Michael Jackson",
    title: "Beat it",
    duration: "4 min 12",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Michael Jackson",
    title: "Billie Jean",
    duration: "4 min 53",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Michel Polnareff",
    title: "Lettre a France",
    duration: "3 min 42",
    year: "",
    style: ["French Pop"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Michel Sardou",
    title: "Les lacs du connemara",
    duration: "6 min 02",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Mike Oldfield",
    title: "Moonlight Shadow",
    duration: "5 min 01",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Miki Matsubara",
    title: "Stay With Me",
    duration: "5 min 01",
    year: "",
    style: ["City Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Modjo",
    title: "Lady Hear Me Tonight",
    duration: "3 min 40",
    year: "",
    style: ["House"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Monty Python",
    title: "Always look on the bright side of life",
    duration: "3 min 32",
    year: "",
    style: ["Comedy"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Myrskyluodon Maija",
    title: "Myrskyluodon Maija",
    duration: "3 min 11",
    year: "",
    style: ["Classical"],
    category: "Modern Classical",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Nathalie Cardone",
    title: "Hasta Siempre",
    duration: "4 min 12",
    year: "",
    style: ["Latin Folk"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "New Order",
    title: "Blue Monday",
    duration: "7 min 34",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Nick Cave & the Bad Seeds",
    title: "Red Right Hand",
    duration: "6 min 02",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Nik Kershaw",
    title: "Wouldn't it be good",
    duration: "4 min 16",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "NSync",
    title: "Bye Bye Bye",
    duration: "3 min 20",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Offspring",
    title: "Pretty Fly",
    duration: "3 min 02",
    year: "",
    style: ["Punk Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Outkast",
    title: "Hey ya",
    duration: "3 min 53",
    year: "",
    style: ["Hip Hop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Paolo Conte",
    title: "Via con me",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Paul Kalkbrenner & Fritz Kalkbrenner",
    title: "Sky and sand",
    duration: "3 min 54",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Peter Gabriel",
    title: "Solsbury Hill",
    duration: "4 min 57",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Phil Collins",
    title: "In the air tonight",
    duration: "4 min 29",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Pixies",
    title: "Where is my mind",
    duration: "3 min 45",
    year: "",
    style: ["Alternative Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Placebo",
    title: "Running up that hill",
    duration: "4 min 52",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Placebo",
    title: "Pure Morning",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Police",
    title: "Every breath you take",
    duration: "3 min 57",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Prince",
    title: "Purple rain",
    duration: "6 min 26",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Queen",
    title: "Don't stop me now",
    duration: "4 min 17",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Queen",
    title: "Radio Ga Ga",
    duration: "4 min 54",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Queen",
    title: "The show must go on",
    duration: "3 min 57",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Queen & David Bowie",
    title: "Under pressure",
    duration: "3 min 50",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Queen of the Stone Age",
    title: "Burn the Witch",
    duration: "3 min 44",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "R3HAB",
    title: "All Around The World (La La La)",
    duration: "2 min 29",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Radiohead",
    title: "No Surprises",
    duration: "3 min 56",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Radiohead",
    title: "Street Spirit (Faded out)",
    duration: "4 min 07",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ram Jam",
    title: "Black Betty",
    duration: "3 min 57",
    year: "",
    style: ["Hard Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Rammstein",
    title: "Adieu",
    duration: "4 min 30",
    year: "",
    style: ["Industrial Metal"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ramones",
    title: "Blitzkrieg Bop",
    duration: "2 min 13",
    year: "",
    style: ["Punk Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "Can't Stop",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "Road Trippin'",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ricchi e Poveri",
    title: "Sara perche ti amo",
    duration: "3 min 13",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Robert Miles",
    title: "Children",
    duration: "4 min 03",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Rosé and Bruno Mars",
    title: "APT",
    duration: "2 min 47",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Royksopp",
    title: "Me and Youphoria",
    duration: "4 min 25",
    year: "",
    style: ["Electronic"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ryan Paris",
    title: "La Dolce Vita",
    duration: "3 min 23",
    year: "",
    style: ["Disco"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Ryuichi Sakamoto",
    title: "Merry Christmas, Mr. Lawrence",
    duration: "4 min 55",
    year: "",
    style: ["Soundtrack"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Sabrina",
    title: "Boys (Summertime Love)",
    duration: "4 min 06",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Santa Esmeralda",
    title: "Don't let me be misunderstood",
    duration: "5 min 44",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Sash",
    title: "Equador",
    duration: "3 min 33",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Scorpions",
    title: "Wind of change",
    duration: "5 min 08",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Seal",
    title: "Kiss for a Rose",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Shaggy",
    title: "Boombastic",
    duration: "3 min 56",
    year: "",
    style: ["Reggae Fusion"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Shakira",
    title: "Hips don't lie",
    duration: "3 min 13",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Shivaree",
    title: "Goodnight moon",
    duration: "4 min 00",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Shostakovich",
    title: "Waltz N?2",
    duration: "2 min 09",
    year: "",
    style: ["Classical"],
    category: "Early 20th Century",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Stevie Wonder",
    title: "Isn't She Lovely",
    duration: "3 min 21",
    year: "",
    style: ["Soul"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Stromae",
    title: "Alors on Danse",
    duration: "3 min 22",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Stromae & Pomme",
    title: "Ma Meilleure Ennemie (Arcane soundtrack)",
    duration: "2 min 22",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Survivors",
    title: "Eye of the Tiger",
    duration: "4 min 04",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Suzanne Vega",
    title: "Luka",
    duration: "3 min 51",
    year: "",
    style: ["Folk Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Talk Talk",
    title: "It's my life",
    duration: "4 min 21",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Talk Talk",
    title: "Such a shame",
    duration: "4 min 17",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tame Impala",
    title: "Borderline",
    duration: "4 min 34",
    year: "",
    style: ["Psychedelic Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tame Impala",
    title: "Elephant",
    duration: "3 min 37",
    year: "",
    style: ["Psychedelic Rock"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tame Impala",
    title: "The Less I know the better",
    duration: "3 min 29",
    year: "",
    style: ["Psychedelic Pop"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tanita Tikaram",
    title: "Twist in My Sobriety",
    duration: "3 min 50",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Buggles",
    title: "Video killed the radio star",
    duration: "4 min 14",
    year: "",
    style: ["Synthpop"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Cranberries",
    title: "Zombie",
    duration: "5 min 03",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Cure",
    title: "Close to me",
    duration: "3 min 29",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Cure",
    title: "Lullaby",
    duration: "4 min 09",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Doors",
    title: "Riders on the storm",
    duration: "2 min 46",
    year: "",
    style: ["Psychedelic Rock"],
    category: "70s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Pointer Sisters",
    title: "Im so excited",
    duration: "5 min 33",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The Weeknd",
    title: "Save your tears",
    duration: "3 min 33",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "The XX",
    title: "Intro",
    duration: "2 min 00",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Timbaland",
    title: "The way I are",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tomoyasu Hotei",
    title: "Battle Without Honor or Humanity",
    duration: "1 min 53",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Toto",
    title: "Africa",
    duration: "4 min 12",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Toto",
    title: "Rosana",
    duration: "5 min 16",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Tracy Chapman",
    title: "Talkin' about a revolution",
    duration: "2 min 40",
    year: "",
    style: ["Folk Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Twenty One Pilots",
    title: "Stressed out",
    duration: "3 min 18",
    year: "",
    style: ["Alternative"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "U2",
    title: "One",
    duration: "4 min 35",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "U2",
    title: "Sunday Bloody Sunday",
    duration: "4 min 29",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "U96",
    title: "Das Boot",
    duration: "5 min 14",
    year: "",
    style: ["Techno"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "UB40",
    title: "Can't Help Falling in Love",
    duration: "3 min 19",
    year: "",
    style: ["Reggae"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "UB40",
    title: "Red Red Wine",
    duration: "4 min 10",
    year: "",
    style: ["Reggae"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Vampire Weekend",
    title: "A-Punk",
    duration: "2 min 13",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Vampire Weekend",
    title: "White Sky",
    duration: "2 min 57",
    year: "",
    style: ["Indie Rock"],
    category: "2010s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Van Halen",
    title: "Jump",
    duration: "3 min 43",
    year: "",
    style: ["Hard Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Weezer",
    title: "Buddy Holly",
    duration: "2 min 46",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Weezer",
    title: "Only in dreams",
    duration: "7 min 57",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Weezer",
    title: "Undone",
    duration: "4 min 32",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Yazoo",
    title: "Don't Go",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Yeah Yeah Yeah",
    title: "Heads will roll",
    duration: "4 min 59",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Yes",
    title: "Owner of a lonely heart",
    duration: "4 min 28",
    year: "",
    style: ["Progressive Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Zombie Nation",
    title: "Kernkraft 400",
    duration: "4 min 38",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "ZZ Top",
    title: "Gimme All Your Lovin'",
    duration: "3 min 41",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
  {
    artist: "Wet Wet Wet",
    title: "Love is all around",
    duration: "14:27:49",
    year: "",
    style: [],
    category: "",
    cover: "img/default-cover.jpg"
  },
];
