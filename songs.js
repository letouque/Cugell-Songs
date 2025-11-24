const songs = [
  {
    artist: "10cc",
    title: "I'm not in love",
    duration: "5 min 06",
    year: "1975",
    style: ["Soft Rock"],
    category: "70s Music",
    cover: "img/10cc - Im not in love.jpg"
  },
  {
    artist: "ABBA",
    title: "Gimme ! Gimme ! Gimmie !",
    duration: "3 min 07",
    year: "",
    style: ["Pop","Disco"],
    category: "70s Music",
    cover: "img/ABBA - Gimme  Gimme  Gimmie.jpg"
  },
  {
    artist: "ABBA",
    title: "Mammamia",
    duration: "3 min 28",
    year: "",
    style: ["Pop"],
    category: "70s Music",
    cover: "img/ABBA - Mammamia.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "All that she wants",
    duration: "3 min 22",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/Ace Of Base - All that she wants.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "Happy Nation",
    duration: "3 min 36",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/Ace Of Base - Happy Nation.jpg"
  },
  {
    artist: "Ace Of Base",
    title: "The Sign",
    duration: "3 min 06",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/Ace Of Base - The Sign.jpg"
  },
  {
    artist: "Aha",
    title: "Take on me",
    duration: "3 min 42",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Aha - Take on me.jpg"
  },
  {
    artist: "Air",
    title: "Kelly watch the stars",
    duration: "3 min 42",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/Air - Kelly watch the stars.jpg"
  },
  {
    artist: "Alannah Myles",
    title: "Black Velvet",
    duration: "4 min 39",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Alannah Myles - Black Velvet.jpg"
  },
  {
    artist: "Alice Deejay",
    title: "Better off alone",
    duration: "3 min 32",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/Alice Deejay - Better off alone.jpg"
  },
  {
    artist: "Alicia Keys",
    title: "No one",
    duration: "4 min 08",
    year: "",
    style: ["R&B"],
    category: "2000s Music",
    cover: "img/Alicia Keys - No one.jpg"
  },
  {
    artist: "Alizee",
    title: "Moi Lolita",
    duration: "4 min 26",
    year: "",
    style: ["French Pop"],
    category: "2000s Music",
    cover: "img/Alizee - Moi Lolita.jpg"
  },
  {
    artist: "Alphaville",
    title: "Big in Japan",
    duration: "4 min 46",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Alphaville - Big in Japan.jpg"
  },
  {
    artist: "Alphaville",
    title: "Forever Young",
    duration: "3 min 49",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Alphaville - Forever Young.jpg"
  },
  {
    artist: "Amy Winehouse",
    title: "Back to Black",
    duration: "3 min 56",
    year: "",
    style: ["Soul"],
    category: "2000s Music",
    cover: "img/Amy Winehouse - Back to Black.jpg"
  },
  {
    artist: "Amy Winehouse",
    title: "You know I'm no good",
    duration: "3 min 34",
    year: "",
    style: ["Soul"],
    category: "2000s Music",
    cover: "img/Amy Winehouse - You know Im no good.jpg"
  },
    {
    artist: "Andrea Bocelli",
    title: "Vivo per Lei",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Andrea Bocelli - Vivo per Lei.jpg"
  },
  {
    artist: "Animals",
    title: "House of the rising sun",
    duration: "4 min 39",
    year: "",
    style: ["Rock"],
    category: "60s Music",
    cover: "img/Animals - House of the rising sun.jpg"
  },
  {
    artist: "Anita Ward",
    title: "Ring My Bell",
    duration: "3 min 26",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/Anita Ward - Ring My Bell.jpg"
  },
  {
    artist: "Ann Lee",
    title: "2 Times",
    duration: "3 min 48",
    year: "",
    style: ["Dance-Pop"],
    category: "90s Music",
    cover: "img/Ann Lee - 2 Times.jpg"
  },
  {
    artist: "Arctic Monkeys",
    title: "505",
    duration: "4 min 10",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/Arctic Monkeys - 505.jpg"
  },
  {
    artist: "Artemas",
    title: "I like the way you kiss me",
    duration: "2 min 18",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/Artemas - I like the way you kiss me.jpg"
  },
  {
    artist: "Avicii",
    title: "Levels",
    duration: "2 min 57",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Avicii - Levels.jpg"
  },
  {
    artist: "Awolnation",
    title: "Sail",
    duration: "4 min 00",
    year: "",
    style: ["Alternative Rock"],
    category: "2010s Music",
    cover: "img/Awolnation - Sail.jpg"
  },
  {
    artist: "Backstreet Boys",
    title: "I Want It That Way",
    duration: "3 min 29",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/Backstreet Boys - I Want It That Way.jpg"
  },
  {
    artist: "Bag Raiders",
    title: "Shooting Star",
    duration: "3 min 50",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Bag Raiders - Shooting Star.jpg"
  },
  {
    artist: "Bangles",
    title: "Eternal Flame",
    duration: "3 min 47",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Bangles - Eternal Flame.jpg"
  },
  {
    artist: "Bangles",
    title: "Walk like an Egyptian",
    duration: "3 min 12",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Bangles - Walk like an Egyptian.jpg"
  },
  {
    artist: "Barry White",
    title: "You're the first the last my everything",
    duration: "3 min 37",
    year: "",
    style: ["Soul"],
    category: "70s Music",
    cover: "img/Barry White - Youre the first the last my everything.jpg"
  },
  {
    artist: "Billie Eilish",
    title: "Bad Guy",
    duration: "3 min 11",
    year: "",
    style: ["Pop"],
    category: "2010s Music",
    cover: "img/Billie Eilish - Bad Guy.jpg"
  },
  {
    artist: "Billie Eilish",
    title: "Birds of a feather",
    duration: "3 min 25",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/Billie Eilish - Birds of a feather.jpg"
  },
  {
    artist: "Billy Idol",
    title: "Eyes Without A Face",
    duration: "5 min 01",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Billy Idol - Eyes Without A Face.jpg"
  },
  {
    artist: "Billy Idol",
    title: "Flesh for Fantasy",
    duration: "4 min 05",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Billy Idol - Flesh for Fantasy.jpg"
  },
  {
    artist: "Billy Idol",
    title: "White Wedding",
    duration: "3 min 21",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Billy Idol - White Wedding.jpg"
  },
  {
    artist: "Black",
    title: "Wonderful Life",
    duration: "4 min 42",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Black - Wonderful Life.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "I got a feeling",
    duration: "4 min 57",
    year: "",
    style: ["Dance-Pop"],
    category: "2000s Music",
    cover: "img/Black Eyed Peas - I got a feeling.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "Meet me halfway",
    duration: "4 min 42",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/Black Eyed Peas - Meet me halfway.jpg"
  },
  {
    artist: "Black Eyed Peas",
    title: "Pump It",
    duration: "3 min 32",
    year: "",
    style: ["Hip Hop"],
    category: "2000s Music",
    cover: "img/Black Eyed Peas - Pump It.jpg"
  },
  {
    artist: "Blondie",
    title: "Atomic",
    duration: "4 min 59",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Blondie - Atomic.jpg"
  },
  {
    artist: "Blondie",
    title: "Heart of glass",
    duration: "4 min 19",
    year: "",
    style: ["New Wave"],
    category: "70s Music",
    cover: "img/Blondie - Heart of glass.jpg"
  },
  {
    artist: "Blues Brothers",
    title: "Peter Gunn Theme",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Blues Brothers - Peter Gunn Theme.jpg"
  },
  {
    artist: "Bon Jovi",
    title: "It's my life",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Bon Jovi - Its my life.jpg"
  },
  {
    artist: "Boney M",
    title: "Rasputin",
    duration: "4 min 25",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/Boney M - Rasputin.jpg"
  },
  {
    artist: "Bonnie Tyler",
    title: "Holding outta hero",
    duration: "5 min 09",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Bonnie Tyler - Holding outta hero.jpg"
  },
  {
    artist: "BTS",
    title: "Standing Next to You",
    duration: "3 min 19",
    year: "",
    style: ["K-Pop"],
    category: "2020s Music",
    cover: "img/BTS - Standing Next to You.jpg"
  },
  {
    artist: "Cake",
    title: "Never There",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Cake - Never There.jpg"
  },
  {
    artist: "Camila Cabello",
    title: "Havana ft. Young Thug",
    duration: "3 min 31",
    year: "",
    style: ["Latin Pop"],
    category: "2010s Music",
    cover: "img/Camila Cabello - Havana ft. Young Thug.jpg"
  },
  {
    artist: "Carlos Santana",
    title: "Maria Maria",
    duration: "4 min 29",
    year: "",
    style: ["Latin Rock"],
    category: "2000s Music",
    cover: "img/Carlos Santana - Maria Maria.jpg"
  },
  {
    artist: "Chaka Khan",
    title: "Ain't Nobody",
    duration: "3 min 55",
    year: "",
    style: ["Funk"],
    category: "80s Music",
    cover: "img/Chaka Khan - Aint Nobody.jpg"
  },
  {
    artist: "Cock Robin",
    title: "The promise you made",
    duration: "3 min 57",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Cock Robin - The promise you made.jpg"
  },
  {
    artist: "Coldplay",
    title: "Viva La Vida",
    duration: "3 min 59",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/Coldplay - Viva La Vida.jpg"
  },
  {
    artist: "Coldplay",
    title: "Yellow",
    duration: "4 min 21",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/Coldplay - Yellow.jpg"
  },
  {
    artist: "Cyndi Lauper",
    title: "Time after Time",
    duration: "3 min 56",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Cyndi Lauper - Time after Time.jpg"
  },
  {
    artist: "Cyndi Lauper",
    title: "True Colors",
    duration: "3 min 32",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Cyndi Lauper - True Colors.jpg"
  },
  {
    artist: "Da Hool",
    title: "Meet Her At The Love Parade",
    duration: "2 min 44",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/Da Hool - Meet Her At The Love Parade.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Aerodynamic",
    duration: "3 min 35",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Aerodynamic.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Digital Love",
    duration: "4 min 46",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Digital Love.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Giorgio",
    duration: "5 min 51",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Daft Punk - Giorgio.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Harder better faster stronger",
    duration: "3 min 38",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Harder better faster stronger.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Instant Crush",
    duration: "5 min 14",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Daft Punk - Instant Crush.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Lose yourself to dance",
    duration: "5 min 54",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Daft Punk - Lose yourself to dance.jpg"
  },
  {
    artist: "Daft Punk",
    title: "One More Time",
    duration: "3 min 52",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - One More Time.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Robot Rock",
    duration: "4 min 45",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Robot Rock.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Television Rules the Nation",
    duration: "4 min 05",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Television Rules the Nation.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Veridis Quo",
    duration: "2 min 35",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Daft Punk - Veridis Quo.jpg"
  },
  {
    artist: "Daft Punk",
    title: "Within",
    duration: "3 min 33",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Daft Punk - Within.jpg"
  },
  {
    artist: "Daniel Balavoine",
    title: "Tout les cris les SOS",
    duration: "4 min 42",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/Daniel Balavoine - Tout les cris les SOS.jpg"
  },
  {
    artist: "Dario G",
    title: "Sunchyme",
    duration: "3 min 57",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/Dario G - Sunchyme.jpg"
  },
  {
    artist: "David Bowie",
    title: "Life on mars",
    duration: "3 min 22",
    year: "",
    style: ["Glam Rock"],
    category: "70s Music",
    cover: "img/David Bowie - Life on mars.jpg"
  },
  {
    artist: "Desireless",
    title: "Voyage Voyage",
    duration: "4 min 17",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/Desireless - Voyage Voyage.jpg"
  },
  {
    artist: "Dexys Midnight Runners",
    title: "Come on Eileen",
    duration: "4 min 19",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Dexys Midnight Runners - Come on Eileen.jpg"
  },
  {
    artist: "Dire Straits",
    title: "Brothers in arms",
    duration: "6 min 30",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Dire Straits - Brothers in arms.jpg"
  },
  {
    artist: "DJ Okawari",
    title: "Flower Dance",
    duration: "4 min 22",
    year: "",
    style: ["Instrumental"],
    category: "2010s Music",
    cover: "img/DJ Okawari - Flower Dance.jpg"
  },
  {
    artist: "Donna Summer",
    title: "Hot Stuff",
    duration: "3 min 46",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/Donna Summer - Hot Stuff.jpg"
  },
  {
    artist: "Dune (1984)",
    title: "Take My Hand (Credits music)",
    duration: "4 min 17",
    year: "",
    style: ["Soundtrack"],
    category: "80s Music",
    cover: "img/Dune 1984 - Take My Hand Credits music.jpg"
  },
  {
    artist: "Duran Duran",
    title: "Ordinary World",
    duration: "4 min 59",
    year: "",
    style: ["Pop Rock"],
    category: "90s Music",
    cover: "img/Duran Duran - Ordinary World.jpg"
  },
  {
    artist: "Elvis Presley",
    title: "Suspicious Minds",
    duration: "3 min 25",
    year: "",
    style: ["Rock"],
    category: "60s Music",
    cover: "img/Elvis Presley - Suspicious Minds.jpg"
  },
  {
    artist: "Ennio Moriconne",
    title: "Chi Mai",
    duration: "4 min 02",
    year: "",
    style: ["Soundtrack"],
    category: "70s Music",
    cover: "img/Ennio Moriconne - Chi Mai.jpg"
  },
  {
    artist: "Eurythmics",
    title: "Here comes the rain again",
    duration: "5 min 05",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/Eurythmics - Here comes the rain again.jpg"
  },
  {
    artist: "Evanescence",
    title: "My immortal",
    duration: "4 min 25",
    year: "",
    style: ["Rock"],
    category: "2000s Music",
    cover: "img/Evanescence - My immortal.jpg"
  },
  {
    artist: "Everything But The Girl",
    title: "Missing",
    duration: "3 min 22",
    year: "",
    style: ["Pop"],
    category: "90s Music",
    cover: "img/Everything But The Girl - Missing.jpg"
  },
  {
    artist: "Flashdance - Irene Cara",
    title: "What a feeling",
    duration: "3 min 33",
    year: "",
    style: ["Disco"],
    category: "80s Music",
    cover: "img/Flashdance - Irene Cara - What a feeling.jpg"
  },
  {
    artist: "Fleetwood Mac",
    title: "Dreams",
    duration: "4 min 17",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/Fleetwood Mac - Dreams.jpg"
  },
  {
    artist: "Florence and the machines",
    title: "Cosmic love",
    duration: "4 min 13",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/Florence and the machines - Cosmic love.jpg"
  },
  {
    artist: "Fools Garden",
    title: "Lemon Tree",
    duration: "3 min 09",
    year: "",
    style: ["Pop Rock"],
    category: "90s Music",
    cover: "img/Fools Garden - Lemon Tree.jpg"
  },
  {
    artist: "FR David",
    title: "Words",
    duration: "4 min 19",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/FR David - Words.jpg"
  },
  {
    artist: "Frank Sinatra",
    title: "My Way",
    duration: "4 min 32",
    year: "",
    style: ["Pop"],
    category: "60s Music",
    cover: "img/Frank Sinatra - My Way.jpg"
  },
  {
    artist: "Franz Ferdinand",
    title: "Take me out",
    duration: "4 min 01",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/Franz Ferdinand - Take me out.jpg"
  },
  {
    artist: "Freaks",
    title: "When Mama Isn't Home",
    duration: "2 min 05",
    year: "",
    style: ["Dance"],
    category: "2010s Music",
    cover: "img/Freaks - When Mama Isnt Home.jpg"
  },
  {
    artist: "Fugees",
    title: "Fu Gee La",
    duration: "4 min 24",
    year: "",
    style: ["Hip Hop"],
    category: "90s Music",
    cover: "img/Fugees - Fu Gee La.jpg"
  },
  {
    artist: "Fun",
    title: "Some nights",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Fun - Some nights.jpg"
  },
  {
    artist: "Futari No Kimochi",
    title: "Inuyasha Sad Song",
    duration: "1 min 51",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/Futari No Kimochi - Inuyasha Sad Song.jpg"
  },
  {
    artist: "Game of Thrones",
    title: "Light of The Seven",
    duration: "9 min 41",
    year: "",
    style: ["Soundtrack"],
    category: "2010s Music",
    cover: "img/Game of Thrones - Light of The Seven.jpg"
  },
  {
    artist: "Gerry Rafferty",
    title: "Baker Street",
    duration: "6 min 17",
    year: "",
    style: ["Soft Rock"],
    category: "70s Music",
    cover: "img/Gerry Rafferty - Baker Street.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Baby Queen",
    duration: "3 min 24",
    year: "",
    style: ["Alternative"],
    category: "2020s Music",
    cover: "img/Gorillaz - Baby Queen.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Clint Eastwood",
    duration: "4 min 11",
    year: "",
    style: ["Alternative"],
    category: "2000s Music",
    cover: "img/Gorillaz - Clint Eastwood.jpg"
  },
  {
    artist: "Gorillaz",
    title: "Silent Running",
    duration: "4 min 20",
    year: "",
    style: ["Alternative"],
    category: "2020s Music",
    cover: "img/Gorillaz - Silent Running.jpg"
  },
  {
    artist: "Gotye",
    title: "Somebody That I Used To Know ft. Kimbra",
    duration: "4 min 05",
    year: "",
    style: ["Indie Pop"],
    category: "2010s Music",
    cover: "img/Gotye - Somebody That I Used To Know ft. Kimbra.jpg"
  },
  {
    artist: "Green Day",
    title: "Boulevard of Broken Dreams",
    duration: "4 min 17",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/Green Day - Boulevard of Broken Dreams.jpg"
  },
  {
    artist: "Highway Men",
    title: "Highwayman",
    duration: "3 min 00",
    year: "",
    style: ["Country"],
    category: "80s Music",
    cover: "img/Highway Men - Highwayman.jpg"
  },
  {
    artist: "Indila - Derniere Danse",
    title: "Derniere Danse",
    duration: "3 min 29",
    year: "",
    style: ["Pop"],
    category: "2010s Music",
    cover: "img/Indila - Derniere Danse - Derniere Danse.jpg"
  },
  {
    artist: "Indochine",
    title: "J'ai demande a la Lune",
    duration: "3 min 29",
    year: "",
    style: ["Pop Rock"],
    category: "2000s Music",
    cover: "img/Indochine - Jai demande a la Lune.jpg"
  },
  {
    artist: "Indochine",
    title: "L'aventurier",
    duration: "3 min 45",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Indochine - Laventurier.jpg"
  },
  {
    artist: "Inuyasha OST",
    title: "Aika (sad song)",
    duration: "2 min 00",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/Inuyasha OST - Aika sad song.jpg"
  },
  {
    artist: "Iron Maiden",
    title: "Killers",
    duration: "4 min 05",
    year: "",
    style: ["Heavy Metal"],
    category: "80s Music",
    cover: "img/Iron Maiden - Killers.jpg"
  },
  {
    artist: "Iron Maiden",
    title: "The Trooper",
    duration: "3 min 45",
    year: "",
    style: ["Heavy Metal"],
    category: "80s Music",
    cover: "img/Iron Maiden - The Trooper.jpg"
  },
  {
    artist: "Jamiroquai",
    title: "Virtual Insanity",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Jamiroquai - Virtual Insanity.jpg"
  },
  {
    artist: "Jamiroquai",
    title: "Deeper Underground",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Jamiroquai - Deeper Underground.jpg"
  },
  {
    artist: "Janet Jackson",
    title: "Together again",
    duration: "4 min 14",
    year: "",
    style: ["Dance Pop"],
    category: "90s Music",
    cover: "img/Janet Jackson - Together again.jpg"
  },
  {
    artist: "Jim Noir - My Patch",
    title: "My Patch",
    duration: "4 min 00",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/Jim Noir - My Patch - My Patch.jpg"
  },
  {
    artist: "John Paul Young",
    title: "Love Is In The Air",
    duration: "3 min 07",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/John Paul Young - Love Is In The Air.jpg"
  },
  {
    artist: "Johnny Cash",
    title: "Hurt",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Johnny Cash - Hurt.jpg"
  },
  {
    artist: "Johnny Hallyday",
    title: "Allumer le feu",
    duration: "5 min 23",
    year: "",
    style: ["French Rock"],
    category: "90s Music",
    cover: "img/Johnny Hallyday - Allumer le feu.jpg"
  },
  {
    artist: "Justice",
    title: "Civilization",
    duration: "4 min 09",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Justice - Civilization.jpg"
  },
  {
    artist: "Justice",
    title: "D.A.N.C.E",
    duration: "2 min 59",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Justice - D.A.N.C.E.jpg"
  },
  {
    artist: "Justice",
    title: "On N On",
    duration: "3 min 13",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Justice - On N On.jpg"
  },
  {
    artist: "Justice & Simian",
    title: "We Are Your Friends",
    duration: "2 min 40",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Justice  Simian - We Are Your Friends.jpg"
  },
  {
    artist: "Keane",
    title: "Somewhere Only We Know",
    duration: "3 min 52",
    year: "",
    style: ["Pop Rock"],
    category: "2000s Music",
    cover: "img/Keane - Somewhere Only We Know.jpg"
  },
  {
    artist: "Kid Francescoli",
    title: "Moon",
    duration: "6 min 18",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Kid Francescoli - Moon.jpg"
  },
  {
    artist: "Killers",
    title: "Human",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Killers - Human.jpg"
  },
  {
    artist: "Kim Carnes",
    title: "Bette Davis Eyes",
    duration: "3 min 49",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Kim Carnes - Bette Davis Eyes.jpg"
  },
  {
    artist: "Kool & the Gang",
    title: "Fresh",
    duration: "3 min 22",
    year: "",
    style: ["Funk"],
    category: "80s Music",
    cover: "img/Kool  the Gang - Fresh.jpg"
  },
  {
    artist: "Kraftwerk",
    title: "The Model",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Kraftwerk - The Model.jpg"
  },
  {
    artist: "Laura Branigan",
    title: "Self Control",
    duration: "3 min 44",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Laura Branigan - Self Control.jpg"
  },
  {
    artist: "Liquido",
    title: "Narcotic",
    duration: "4 min 23",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Liquido - Narcotic.jpg"
  },
  {
    artist: "LocoRoco",
    title: "Menu",
    duration: "1 min 10",
    year: "",
    style: ["Video Game Music"],
    category: "2000s Music",
    cover: "img/LocoRoco - Menu.jpg"
  },
  {
    artist: "Lykke Li",
    title: "I Follow Rivers (Tiesto Remix)",
    duration: "3 min 16",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Lykke Li - I Follow Rivers Tiesto Remix.jpg"
  },
  {
    artist: "Macklemore & Ryan Lewis",
    title: "Thrift Shop",
    duration: "3 min 49",
    year: "",
    style: ["Hip Hop"],
    category: "2010s Music",
    cover: "img/Macklemore  Ryan Lewis - Thrift Shop.jpg"
  },
  {
    artist: "Madonna",
    title: "La Isla Bonita",
    duration: "3 min 48",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Madonna - La Isla Bonita.jpg"
  },
  {
    artist: "Madonna",
    title: "Like A Prayer",
    duration: "7 min 04",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Madonna - Like A Prayer.jpg"
  },
  {
    artist: "Major Lazer",
    title: "Lean on",
    duration: "2 min 56",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Major Lazer - Lean on.jpg"
  },
  {
    artist: "Marvin Gaye",
    title: "Sexual Healing",
    duration: "4 min 08",
    year: "",
    style: ["Soul"],
    category: "80s Music",
    cover: "img/Marvin Gaye - Sexual Healing.jpg"
  },
  {
    artist: "Massive Attack",
    title: "Angel",
    duration: "6 min 13",
    year: "",
    style: ["Trip-Hop"],
    category: "90s Music",
    cover: "img/Massive Attack - Angel.jpg"
  },
  {
    artist: "Massive Attack",
    title: "Teardrop",
    duration: "5 min 24",
    year: "",
    style: ["Trip-Hop"],
    category: "90s Music",
    cover: "img/Massive Attack - Teardrop.jpg"
  },
  {
    artist: "Medley - Sweet Dreams vs Seven Nation Army",
    title: "Sweet Dreams vs Seven Nation Army",
    duration: "3 min 33",
    year: "",
    style: ["Mashup"],
    category: "Mixed Years",
    cover: "img/Medley - Sweet Dreams vs Seven Nation Army - Sweet Dreams vs Seven Nation Army.jpg"
  },
  {
    artist: "Meute",
    title: "You and Me (Flume Remix)",
    duration: "5 min 33",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Meute - You and Me Flume Remix.jpg"
  },
  {
    artist: "MGMT",
    title: "Kids",
    duration: "4 min 52",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/MGMT - Kids.jpg"
  },
  {
    artist: "Michael Jackson",
    title: "Beat it",
    duration: "4 min 12",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Michael Jackson - Beat it.jpg"
  },
  {
    artist: "Michael Jackson",
    title: "Billie Jean",
    duration: "4 min 53",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Michael Jackson - Billie Jean.jpg"
  },
  {
    artist: "Michel Polnareff",
    title: "Lettre a France",
    duration: "3 min 42",
    year: "",
    style: ["French Pop"],
    category: "70s Music",
    cover: "img/Michel Polnareff - Lettre a France.jpg"
  },
  {
    artist: "Michel Sardou",
    title: "Les lacs du connemara",
    duration: "6 min 02",
    year: "",
    style: ["French Pop"],
    category: "80s Music",
    cover: "img/Michel Sardou - Les lacs du connemara.jpg"
  },
  {
    artist: "Mike Oldfield",
    title: "Moonlight Shadow",
    duration: "5 min 01",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Mike Oldfield - Moonlight Shadow.jpg"
  },
  {
    artist: "Miki Matsubara",
    title: "Stay With Me",
    duration: "5 min 01",
    year: "",
    style: ["City Pop"],
    category: "80s Music",
    cover: "img/Miki Matsubara - Stay With Me.jpg"
  },
  {
    artist: "Modjo",
    title: "Lady Hear Me Tonight",
    duration: "3 min 40",
    year: "",
    style: ["House"],
    category: "2000s Music",
    cover: "img/Modjo - Lady Hear Me Tonight.jpg"
  },
  {
    artist: "Monty Python",
    title: "Always look on the bright side of life",
    duration: "3 min 32",
    year: "",
    style: ["Comedy"],
    category: "70s Music",
    cover: "img/Monty Python - Always look on the bright side of life.jpg"
  },
  {
    artist: "Myrskyluodon Maija",
    title: "Myrskyluodon Maija",
    duration: "3 min 11",
    year: "",
    style: ["Classical"],
    category: "Modern Classical",
    cover: "img/Myrskyluodon Maija - Myrskyluodon Maija.jpg"
  },
  {
    artist: "Nathalie Cardone",
    title: "Hasta Siempre",
    duration: "4 min 12",
    year: "",
    style: ["Latin Folk"],
    category: "90s Music",
    cover: "img/Nathalie Cardone - Hasta Siempre.jpg"
  },
  {
    artist: "New Order",
    title: "Blue Monday",
    duration: "7 min 34",
    year: "",
    style: ["Synthpop"],
    category: "80s Music",
    cover: "img/New Order - Blue Monday.jpg"
  },
  {
    artist: "Nick Cave & the Bad Seeds",
    title: "Red Right Hand",
    duration: "6 min 02",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Nick Cave  the Bad Seeds - Red Right Hand.jpg"
  },
  {
    artist: "Nik Kershaw",
    title: "Wouldn't it be good",
    duration: "4 min 16",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Nik Kershaw - Wouldnt it be good.jpg"
  },
  {
    artist: "NSync",
    title: "Bye Bye Bye",
    duration: "3 min 20",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/NSync - Bye Bye Bye.jpg"
  },
  {
    artist: "Offspring",
    title: "Pretty Fly",
    duration: "3 min 02",
    year: "",
    style: ["Punk Rock"],
    category: "90s Music",
    cover: "img/Offspring - Pretty Fly.jpg"
  },
  {
    artist: "Outkast",
    title: "Hey ya",
    duration: "3 min 53",
    year: "",
    style: ["Hip Hop"],
    category: "2000s Music",
    cover: "img/Outkast - Hey ya.jpg"
  },
  {
    artist: "Paolo Conte",
    title: "Via con me",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Paolo Conte - Via con me.jpg"
  },
  {
    artist: "Paul Kalkbrenner & Fritz Kalkbrenner",
    title: "Sky and sand",
    duration: "3 min 54",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Paul Kalkbrenner  Fritz Kalkbrenner - Sky and sand.jpg"
  },
  {
    artist: "Peter Gabriel",
    title: "Solsbury Hill",
    duration: "4 min 57",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/Peter Gabriel - Solsbury Hill.jpg"
  },
  {
    artist: "Phil Collins",
    title: "In the air tonight",
    duration: "4 min 29",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Phil Collins - In the air tonight.jpg"
  },
  {
    artist: "Pixies",
    title: "Where is my mind",
    duration: "3 min 45",
    year: "",
    style: ["Alternative Rock"],
    category: "80s Music",
    cover: "img/Pixies - Where is my mind.jpg"
  },
  {
    artist: "Placebo",
    title: "Running up that hill",
    duration: "4 min 52",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/Placebo - Running up that hill.jpg"
  },
  {
    artist: "Placebo",
    title: "Pure Morning",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Placebo - Pure Morning.jpg"
  },
  {
    artist: "Police",
    title: "Every breath you take",
    duration: "3 min 57",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Police - Every breath you take.jpg"
  },
  {
    artist: "Prince",
    title: "Purple rain",
    duration: "6 min 26",
    year: "",
    style: ["Pop Rock"],
    category: "80s Music",
    cover: "img/Prince - Purple rain.jpg"
  },
  {
    artist: "Queen",
    title: "Don't stop me now",
    duration: "4 min 17",
    year: "",
    style: ["Rock"],
    category: "70s Music",
    cover: "img/Queen - Dont stop me now.jpg"
  },
  {
    artist: "Queen",
    title: "Radio Ga Ga",
    duration: "4 min 54",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Queen - Radio Ga Ga.jpg"
  },
  {
    artist: "Queen",
    title: "The show must go on",
    duration: "3 min 57",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/Queen - The show must go on.jpg"
  },
  {
    artist: "Queen & David Bowie",
    title: "Under pressure",
    duration: "3 min 50",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Queen  David Bowie - Under pressure.jpg"
  },
  {
    artist: "Queen of the Stone Age",
    title: "Burn the Witch",
    duration: "3 min 44",
    year: "",
    style: ["Alternative Rock"],
    category: "2000s Music",
    cover: "img/Queen of the Stone Age - Burn the Witch.jpg"
  },
  {
    artist: "R3HAB",
    title: "All Around The World (La La La)",
    duration: "2 min 29",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/R3HAB - All Around The World La La La.jpg"
  },
  {
    artist: "Radiohead",
    title: "No Surprises",
    duration: "3 min 56",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Radiohead - No Surprises.jpg"
  },
  {
    artist: "Radiohead",
    title: "Street Spirit (Faded out)",
    duration: "4 min 07",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Radiohead - Street Spirit Faded out.jpg"
  },
  {
    artist: "Ram Jam",
    title: "Black Betty",
    duration: "3 min 57",
    year: "",
    style: ["Hard Rock"],
    category: "70s Music",
    cover: "img/Ram Jam - Black Betty.jpg"
  },
  {
    artist: "Rammstein",
    title: "Adieu",
    duration: "4 min 30",
    year: "",
    style: ["Industrial Metal"],
    category: "2020s Music",
    cover: "img/Rammstein - Adieu.jpg"
  },
  {
    artist: "Ramones",
    title: "Blitzkrieg Bop",
    duration: "2 min 13",
    year: "",
    style: ["Punk Rock"],
    category: "70s Music",
    cover: "img/Ramones - Blitzkrieg Bop.jpg"
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "Can't Stop",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Red Hot Chili Peppers - Cant Stop.jpg"
  },
  {
    artist: "Red Hot Chili Peppers",
    title: "Road Trippin'",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Red Hot Chili Peppers - Road Trippin.jpg"
  },
  {
    artist: "Ricchi e Poveri",
    title: "Sara perche ti amo",
    duration: "3 min 13",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Ricchi e Poveri - Sara perche ti amo.jpg"
  },
  {
    artist: "Robert Miles",
    title: "Children",
    duration: "4 min 03",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/Robert Miles - Children.jpg"
  },
  {
    artist: "Rosé and Bruno Mars",
    title: "APT",
    duration: "2 min 47",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/Rosé and Bruno Mars - APT.jpg"
  },
  {
    artist: "Royksopp",
    title: "Me and Youphoria",
    duration: "4 min 25",
    year: "",
    style: ["Electronic"],
    category: "2020s Music",
    cover: "img/Royksopp - Me and Youphoria.jpg"
  },
  {
    artist: "Ryan Paris",
    title: "La Dolce Vita",
    duration: "3 min 23",
    year: "",
    style: ["Disco"],
    category: "80s Music",
    cover: "img/Ryan Paris - La Dolce Vita.jpg"
  },
  {
    artist: "Ryuichi Sakamoto",
    title: "Merry Christmas, Mr. Lawrence",
    duration: "4 min 55",
    year: "",
    style: ["Soundtrack"],
    category: "80s Music",
    cover: "img/Ryuichi Sakamoto - Merry Christmas Mr. Lawrence.jpg"
  },
  {
    artist: "Sabrina",
    title: "Boys (Summertime Love)",
    duration: "4 min 06",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Sabrina - Boys Summertime Love.jpg"
  },
  {
    artist: "Santa Esmeralda",
    title: "Don't let me be misunderstood",
    duration: "5 min 44",
    year: "",
    style: ["Disco"],
    category: "70s Music",
    cover: "img/Santa Esmeralda - Dont let me be misunderstood.jpg"
  },
  {
    artist: "Sash",
    title: "Equador",
    duration: "3 min 33",
    year: "",
    style: ["Dance"],
    category: "90s Music",
    cover: "img/Sash - Equador.jpg"
  },
  {
    artist: "Scorpions",
    title: "Wind of change",
    duration: "5 min 08",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/Scorpions - Wind of change.jpg"
  },
  {
    artist: "Seal",
    title: "Kiss for a Rose",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Seal - Kiss for a Rose.jpg"
  },
  {
    artist: "Shaggy",
    title: "Boombastic",
    duration: "3 min 56",
    year: "",
    style: ["Reggae Fusion"],
    category: "90s Music",
    cover: "img/Shaggy - Boombastic.jpg"
  },
  {
    artist: "Shakira",
    title: "Hips don't lie",
    duration: "3 min 13",
    year: "",
    style: ["Pop"],
    category: "2000s Music",
    cover: "img/Shakira - Hips dont lie.jpg"
  },
  {
    artist: "Shivaree",
    title: "Goodnight moon",
    duration: "4 min 00",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Shivaree - Goodnight moon.jpg"
  },
  {
    artist: "Shostakovich",
    title: "Waltz N?2",
    duration: "2 min 09",
    year: "",
    style: ["Classical"],
    category: "Early 20th Century",
    cover: "img/Shostakovich - Waltz N2.jpg"
  },
  {
    artist: "Stevie Wonder",
    title: "Isn't She Lovely",
    duration: "3 min 21",
    year: "",
    style: ["Soul"],
    category: "70s Music",
    cover: "img/Stevie Wonder - Isnt She Lovely.jpg"
  },
  {
    artist: "Stromae",
    title: "Alors on Danse",
    duration: "3 min 22",
    year: "",
    style: ["Electronic"],
    category: "2010s Music",
    cover: "img/Stromae - Alors on Danse.jpg"
  },
  {
    artist: "Stromae & Pomme",
    title: "Ma Meilleure Ennemie (Arcane soundtrack)",
    duration: "2 min 22",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/Stromae  Pomme - Ma Meilleure Ennemie Arcane soundtrack.jpg"
  },
  {
    artist: "Survivors",
    title: "Eye of the Tiger",
    duration: "4 min 04",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Survivors - Eye of the Tiger.jpg"
  },
  {
    artist: "Suzanne Vega",
    title: "Luka",
    duration: "3 min 51",
    year: "",
    style: ["Folk Rock"],
    category: "80s Music",
    cover: "img/Suzanne Vega - Luka.jpg"
  },
  {
    artist: "Talk Talk",
    title: "It's my life",
    duration: "4 min 21",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Talk Talk - Its my life.jpg"
  },
  {
    artist: "Talk Talk",
    title: "Such a shame",
    duration: "4 min 17",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/Talk Talk - Such a shame.jpg"
  },
  {
    artist: "Tame Impala",
    title: "Borderline",
    duration: "4 min 34",
    year: "",
    style: ["Psychedelic Pop"],
    category: "2010s Music",
    cover: "img/Tame Impala - Borderline.jpg"
  },
  {
    artist: "Tame Impala",
    title: "Elephant",
    duration: "3 min 37",
    year: "",
    style: ["Psychedelic Rock"],
    category: "2010s Music",
    cover: "img/Tame Impala - Elephant.jpg"
  },
  {
    artist: "Tame Impala",
    title: "The Less I know the better",
    duration: "3 min 29",
    year: "",
    style: ["Psychedelic Pop"],
    category: "2010s Music",
    cover: "img/Tame Impala - The Less I know the better.jpg"
  },
  {
    artist: "Tanita Tikaram",
    title: "Twist in My Sobriety",
    duration: "3 min 50",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/Tanita Tikaram - Twist in My Sobriety.jpg"
  },
  {
    artist: "The Buggles",
    title: "Video killed the radio star",
    duration: "4 min 14",
    year: "",
    style: ["Synthpop"],
    category: "70s Music",
    cover: "img/The Buggles - Video killed the radio star.jpg"
  },
  {
    artist: "The Cranberries",
    title: "Zombie",
    duration: "5 min 03",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/The Cranberries - Zombie.jpg"
  },
  {
    artist: "The Cure",
    title: "Close to me",
    duration: "3 min 29",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/The Cure - Close to me.jpg"
  },
  {
    artist: "The Cure",
    title: "Lullaby",
    duration: "4 min 09",
    year: "",
    style: ["New Wave"],
    category: "80s Music",
    cover: "img/The Cure - Lullaby.jpg"
  },
  {
    artist: "The Doors",
    title: "Riders on the storm",
    duration: "2 min 46",
    year: "",
    style: ["Psychedelic Rock"],
    category: "70s Music",
    cover: "img/The Doors - Riders on the storm.jpg"
  },
  {
    artist: "The Pointer Sisters",
    title: "Im so excited",
    duration: "5 min 33",
    year: "",
    style: ["Pop"],
    category: "80s Music",
    cover: "img/The Pointer Sisters - Im so excited.jpg"
  },
  {
    artist: "The Weeknd",
    title: "Save your tears",
    duration: "3 min 33",
    year: "",
    style: ["Pop"],
    category: "2020s Music",
    cover: "img/The Weeknd - Save your tears.jpg"
  },
  {
    artist: "The XX",
    title: "Intro",
    duration: "2 min 00",
    year: "",
    style: ["Indie Pop"],
    category: "2000s Music",
    cover: "img/The XX - Intro.jpg"
  },
  {
    artist: "Timbaland",
    title: "The way I are",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Timbaland - The way I are.jpg"
  },
  {
    artist: "Tomoyasu Hotei",
    title: "Battle Without Honor or Humanity",
    duration: "1 min 53",
    year: "",
    style: ["Soundtrack"],
    category: "2000s Music",
    cover: "img/Tomoyasu Hotei - Battle Without Honor or Humanity.jpg"
  },
  {
    artist: "Toto",
    title: "Africa",
    duration: "4 min 12",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Toto - Africa.jpg"
  },
  {
    artist: "Toto",
    title: "Rosana",
    duration: "5 min 16",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/Toto - Rosana.jpg"
  },
  {
    artist: "Tracy Chapman",
    title: "Talkin' about a revolution",
    duration: "2 min 40",
    year: "",
    style: ["Folk Rock"],
    category: "80s Music",
    cover: "img/Tracy Chapman - Talkin about a revolution.jpg"
  },
  {
    artist: "Twenty One Pilots",
    title: "Stressed out",
    duration: "3 min 18",
    year: "",
    style: ["Alternative"],
    category: "2010s Music",
    cover: "img/Twenty One Pilots - Stressed out.jpg"
  },
  {
    artist: "U2",
    title: "One",
    duration: "4 min 35",
    year: "",
    style: ["Rock"],
    category: "90s Music",
    cover: "img/U2 - One.jpg"
  },
  {
    artist: "U2",
    title: "Sunday Bloody Sunday",
    duration: "4 min 29",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/U2 - Sunday Bloody Sunday.jpg"
  },
  {
    artist: "U96",
    title: "Das Boot",
    duration: "5 min 14",
    year: "",
    style: ["Techno"],
    category: "90s Music",
    cover: "img/U96 - Das Boot.jpg"
  },
  {
    artist: "UB40",
    title: "Can't Help Falling in Love",
    duration: "3 min 19",
    year: "",
    style: ["Reggae"],
    category: "90s Music",
    cover: "img/UB40 - Cant Help Falling in Love.jpg"
  },
  {
    artist: "UB40",
    title: "Red Red Wine",
    duration: "4 min 10",
    year: "",
    style: ["Reggae"],
    category: "80s Music",
    cover: "img/UB40 - Red Red Wine.jpg"
  },
  {
    artist: "Vampire Weekend",
    title: "A-Punk",
    duration: "2 min 13",
    year: "",
    style: ["Indie Rock"],
    category: "2000s Music",
    cover: "img/Vampire Weekend - A-Punk.jpg"
  },
  {
    artist: "Vampire Weekend",
    title: "White Sky",
    duration: "2 min 57",
    year: "",
    style: ["Indie Rock"],
    category: "2010s Music",
    cover: "img/Vampire Weekend - White Sky.jpg"
  },
  {
    artist: "Van Halen",
    title: "Jump",
    duration: "3 min 43",
    year: "",
    style: ["Hard Rock"],
    category: "80s Music",
    cover: "img/Van Halen - Jump.jpg"
  },
  {
    artist: "Weezer",
    title: "Buddy Holly",
    duration: "2 min 46",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Weezer - Buddy Holly.jpg"
  },
  {
    artist: "Weezer",
    title: "Only in dreams",
    duration: "7 min 57",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Weezer - Only in dreams.jpg"
  },
  {
    artist: "Weezer",
    title: "Undone",
    duration: "4 min 32",
    year: "",
    style: ["Alternative Rock"],
    category: "90s Music",
    cover: "img/Weezer - Undone.jpg"
  },
  {
    artist: "Yazoo",
    title: "Don't Go",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/Yazoo - Dont Go.jpg"
  },
  {
    artist: "Yeah Yeah Yeah",
    title: "Heads will roll",
    duration: "4 min 59",
    year: "",
    style: ["Electronic"],
    category: "2000s Music",
    cover: "img/Yeah Yeah Yeah - Heads will roll.jpg"
  },
  {
    artist: "Yes",
    title: "Owner of a lonely heart",
    duration: "4 min 28",
    year: "",
    style: ["Progressive Rock"],
    category: "80s Music",
    cover: "img/Yes - Owner of a lonely heart.jpg"
  },
  {
    artist: "Zombie Nation",
    title: "Kernkraft 400",
    duration: "4 min 38",
    year: "",
    style: ["Electronic"],
    category: "90s Music",
    cover: "img/Zombie Nation - Kernkraft 400.jpg"
  },
  {
    artist: "ZZ Top",
    title: "Gimme All Your Lovin'",
    duration: "3 min 41",
    year: "",
    style: ["Rock"],
    category: "80s Music",
    cover: "img/ZZ Top - Gimme All Your Lovin.jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/- .jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/- .jpg"
  },
  {
    artist: "",
    title: "",
    duration: "",
    year: "",
    style: [],
    category: "",
    cover: "img/- .jpg"
  },
  {
    artist: "Wet Wet Wet",
    title: "Love is all around",
    duration: "14:27:49",
    year: "",
    style: [],
    category: "",
    cover: "img/Wet Wet Wet - Love is all around.jpg"
  },
];
