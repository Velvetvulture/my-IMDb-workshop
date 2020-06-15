const listOfMovies = [
  {
    stream: false,
    title: "Pulp Fiction",
    year: "1994",
    rating: "R",
    runningTime: "2h 34min",
    type: "Crime, Drama",
    pictures: [
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNjE3ZDQwZDUtNDdhZC00YzcyLWIwYjktZGJlYzA0ZWQwZDJkXkEyXkFqcGdeQXVyNzYxMTcyMzE@._V1_SY1000_SX750_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BODBmYTRkZmItNjlhNi00MWRkLWE5ZWEtNWNmNzQ4MzEyNDNlXkEyXkFqcGdeQXVyNjA5NzE2OTg@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BZGYzNWZiN2YtOTlhMy00ZDYxLTk4MjEtMWRjOWRmNjBlZGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SY1000_SX750_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNzliYjMzMmEtM2EyZi00ZWMzLWI4MDItNmJmZDdiYWM5YmI0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,652,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BOTc4MTY2NjM5NF5BMl5BanBnXkFtZTgwNjE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTAxMzE0NTE1OTVeQTJeQWpwZ15BbWU4MDk5OTI4OTEx._V1_SX1486_CR0,0,1486,999_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTg3MDQ5NTgwOV5BMl5BanBnXkFtZTcwNzA0MzU5Ng@@._V1_SY1000_CR0,0,1551,1000_AL_.jpg",
    ],
    director: "Quentin Tarantino",
    mainStars: "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    summary:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BZGYzNWZiN2YtOTlhMy00ZDYxLTk4MjEtMWRjOWRmNjBlZGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_SY1000_SX750_AL_.jpg",
    video: "https://www.youtube.com/embed/tGpTpVyI_OQ?autoplay=1",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
  },
  {
    stream: false,
    title: "1917",
    year: "2019",
    rating: "R",
    runningTime: "1h 59min",
    type: "Drama, War",
    pictures: [
      "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BY2ZhMjI5MWEtOTVkYi00MjU1LWExOTgtYzIzZWY1YzQyZDM0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYmUxNjQ2ODgtODZjZS00YjBmLWJjOTYtZjlmMTVjYjRkYjQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1333,1000_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BZjNhYTc5NDgtZGY4Mi00OWQ2LWI0NjktYmU1OWYyMjdlMmFiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SY1000_SX1500_AL_.jpg",
      "https://m.media-amazon.com/images/M/MV5BYTVmZGIxYWItZjE1ZS00M2I5LThhNDItZDY4NjI5ZTI3MThiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BOTI2YmY1MzktNzkwZS00YmY1LWEwYmItYmM2MmU2OGY4OTFhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BNTg3ZDI2ZDctZWQxZC00MjVkLTg3YjktY2E2OWY3Y2M0MTg4XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    ],
    director: "Sam Mendes",
    mainStars: "Dean-Charles Chapman, George MacKay, Daniel Mays",
    summary:
      "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BYmUxNjQ2ODgtODZjZS00YjBmLWJjOTYtZjlmMTVjYjRkYjQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1333,1000_AL_.jpg",
    video: "https://www.youtube.com/embed/YqNYrYUiMfg?autoplay=1",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904003/1917_k8iveh.jpg",
  },
  {
    stream: false,
    title: "Alien",
    year: "1979",
    rating: "R",
    runningTime: "1h 57min",
    type: "Horror, Sci-Fi",
    pictures: [],
    director: "Ridley Scott",
    mainStars: "Sigourney Weaver, Tom Skerritt, John Hurt",
    summary:
      "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BNjIyODEzYTItZjY3Ny00MDRkLWEyMTQtNGUxOGM2ODdmYjRkXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    video: "https://www.youtube.com/embed/LjLamj-b0I8?autoplay=1",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904006/Alien_elegwp.jpg",
  },
  {
    stream: false,
    title: "Back to the Future",
    year: "1985",
    rating: "PG",
    runningTime: "1h 56min",
    type: "Adventure, Comedy, Sci-Fi ",
    pictures: [],
    director: "Robert Zemeckis",
    mainStars: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
    summary:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BMjA4MzI0NzI3MF5BMl5BanBnXkFtZTcwOTc4Mzg0OQ@@._V1_SY1000_SX1500_AL_.jpg",
    video: "",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904005/Back_To_The_Future_kj1gfm.jpg",
  },
  {
    stream: false,
    title: "Forrest Gump",
    year: "1994",
    rating: "PG-13",
    runningTime: "2h 22min",
    type: "Drama, Romance",
    pictures: [],
    director: "Robert Zemeckis",
    mainStars: "Tom Hanks, Robin Wright, Gary Sinise",
    summary:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BZDU0NTgwMGQtZDgwZS00YmQzLWE4Y2MtN2M1ZTYwNWNlMGVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
    video: "",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904008/Forrest_Gump_fur370.jpg",
  },
  {
    stream: false,
    title: "Indiana Jones and the Last Crusade",
    year: "1989",
    rating: "PG-13",
    runningTime: "2h 07min",
    type: "Action, Adventure",
    pictures: [],
    director: "Steven Spielberg",
    mainStars: "Harrison Ford, Sean Connery, Alison Doody",
    summary:
      "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry Indiana Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its power",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BYWRmMWY1OTItZjM3Mi00MWNiLTg3OWUtMTAwOGU3ZmJmNWQ1XkEyXkFqcGdeQXVyODY0MjQ3OTk@._V1_SY1000_CR0,0,1287,1000_AL_.jpg",
    video: "",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,678,1000_AL_.jpg",
  },
  {
    stream: false,
    title: "Jurassic Park",
    year: "1993",
    rating: "PG-13",
    runningTime: "2h 07min",
    type: "Drama, War",
    pictures: [],
    director: "Steven Spielberg",
    mainStars: "Sam Neill, Laura Dern, Jeff Goldblum",
    summary:
      "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BOTdkMzA1NDItMDU4Ny00ZGRjLTg1MTEtNmZjYjdiMmY3YmY1XkEyXkFqcGdeQXVyMjI3NzE4MTM@._V1_SY1000_CR0,0,1701,1000_AL_.jpg",
    video: "",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904005/Jurassic_Park_odlp3h.jpg",
  },
  {
    stream: false,
    title: "A Clockwork Orange",
    year: "1971",
    rating: "R",
    runningTime: "2h 16min",
    type: "Crime, Drama, Sci-Fi",
    pictures: [],
    director: "Stanley Kubrick",
    mainStars: "Malcolm McDowell, Patrick Magee, Michael Bates",
    summary:
      "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BNmJmYzU5ZTMtNGM2My00ODk5LWI0Y2MtZjQ5NTMxZDhkZDc2XkEyXkFqcGdeQXVyMjMzMDI4MjQ@._V1_SY1000_CR0,0,1655,1000_AL_.jpg",
    video: "",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    stream: false,
    title: "Citizen Kane",
    year: "1941",
    rating: "PG",
    runningTime: "1h 59min",
    type: "Drama, Mystery ",
    pictures: [],
    director: "Orson Welles",
    mainStars: "Orson Welles, Joseph Cotten, Dorothy Comingore",
    summary:
      "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BNjc3OWU0MjItYzFlNS00YjJkLTg3NjgtYTU0OWM3ZjJkMTA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    video: "",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg",
  },
  {
    stream: false,
    title: "Hauru no ugoku shiro",
    year: "2004",
    rating: "PG",
    runningTime: "1h 59min",
    type: "Animation, Adventure, Family ",
    pictures: [],
    director: "Hayao Miyazaki",
    mainStars: "Chieko Baishô, Takuya Kimura, Tatsuya Gashûin",
    summary:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BM2VkYWIwYjYtZWM0NS00ZDMzLWIxMzEtN2U5NzJlM2M1ODkxXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
    video: "",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGJjMjc1YTgtZTQ3Yy00NzIyLWEzNTgtYzY3ZGU2ZWRmMzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    stream: false,
    title: "Memento",
    year: "2000",
    rating: "R",
    runningTime: "1h 53min",
    type: "Drama, WarMystery, Thriller",
    pictures: [],
    director: "Christopher Nolan",
    mainStars: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
    summary:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BMTY2NzE4OTE4Nl5BMl5BanBnXkFtZTcwNTY0NzY2NA@@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    video: "",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904006/Memento_gbikew.jpg",
  },
  {
    stream: false,
    title: "The Godfather",
    year: "1972",
    rating: "R",
    runningTime: "2h 55min",
    type: "Crime, Drama ",
    pictures: [],
    director: "Francis Ford Coppola",
    mainStars: "Marlon Brando, Al Pacino, James Caan",
    summary:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    videoPoster:
      "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_SX1375_CR0,0,1375,999_AL_.jpg",
    video: "",
    poster:
      "https://res.cloudinary.com/blackbonbon/image/upload/v1588904009/The_Godfather_piujtf.jpg",
  },
];

module.exports = listOfMovies;
