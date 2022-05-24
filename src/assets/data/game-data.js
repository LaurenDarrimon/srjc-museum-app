// ~ MAIN GAME SEQUENCE DATA ~ //

// Contains all the info needed to render all game components in the proper order
// Mainly keeping track of the Game's stateCounters
// Be very careful when changing these values

/****Counters***
   1. trivia => increments each time user completes trivia/scav. hunt question
   2. game => increments each time user completes a mini-game
   3. lesson => increments each time user completess a "lesson" slide
   4. overall slide => increments each time the user hits the "next" btn
    */

export const gameData = [
  {
    //trivia-counter 0
    number: 0, // Key # for each page/slide
    title: "land acknowledgement", 
    nextPath: "/museum/trivia", // next page (for back/next buttons)
    lastPath: "/museum/instructions", // last page
    stateCounters:[0, 0, 0, 0,] //[trivia question, game, lesson, overall slide] 
  },
  {
    number: 1,
    title: "CA find trivia 1",
    nextPath: "/museum/trivia",
    lastPath: "/museum/trivia",
    stateCounters:[1, 0, 0, 1,]
  },
  {
    //CA scavenger hunt
    //trivia-counter 2 //game-counter 0
    number: 2,
    title: "CA find trivia 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[2, 0, 0, 2,]
  },
  {
    //game-counter 0
    number: 3,
    title: "CA Lesson 1",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[3, 0, 0, 3,]
  },
  {
    number: 4,
    title: "CA Lesson 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/lesson",
    stateCounters:[3, 0, 1, 4,]
  },
  {
    number: 5,
    title: "CA Lesson 3",
    nextPath: "/museum/california",
    lastPath: "/museum/lesson",
    stateCounters:[3, 0, 2, 5,]
  },
  {
    // game 0
    number: 6,
    title: "California Game",
    nextPath: "/museum/trivia",
    lastPath: "/museum/lesson",
    stateCounters:[3, 0, 2, 6,]
  },
  {
    //SW FIND 1 
    number: 7,
    title: "SW find trivia 1",
    nextPath: "/museum/trivia",
    lastPath: "/museum/california",
    stateCounters:[3, 1, 2, 7,]
  },
  {
    //SW FIND 2
    number: 8,
    title: "SW find trivia 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[4, 1, 2, 8,]
  },
  {
    //game 2
    //SW FIND 2
    number: 9,
    title: "SW Lesson 1",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[5, 1, 3, 9,]
  },
  {
    number: 10,
    title: "SW Lesson 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/lesson",
    stateCounters:[5, 1, 4, 10,]
  },
  {
    number: 11,
    title: "SW Lesson 3",
    nextPath: "/museum/southwest",
    lastPath: "/museum/lesson",
    stateCounters:[5, 1, 5, 11,]
  },
  {
    //SW GAME
    number: 12,
    title: "SW Game",
    nextPath: "/museum/trivia",
    lastPath: "/museum/lesson",
    stateCounters:[5, 1, 6, 12,]
  },
  {
      //GP FIND 1 
    number: 13,
    title: "GP find trivia 1",
    nextPath: "/museum/trivia",
    lastPath: "/museum/southwest",
    stateCounters:[5, 2, 6, 13,]
  },
  {
      //GP FIND 2
    number: 14,
    title: "GP find trivia 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[6, 2, 6, 14,]
  },
  {
    //game 3
    number: 15,
    title: "GP Lesson 1",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[7, 2, 6, 15,]
  },
   {
    number: 16,
    title: "GP Lesson 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/lesson",
    stateCounters:[7, 2, 7, 16,]
  },
  {
    number: 17,
    title: "GP Lesson 3",
    nextPath: "/museum/greatplains",
    lastPath: "/museum/lesson",
    stateCounters:[7, 2, 8, 17,]
  },
  {
    number: 18,
    title: "GP Game",
    nextPath: "/museum/trivia",
    lastPath: "/museum/lesson",
    stateCounters:[7, 2, 9, 18,]
  },
  {
    //trivia 3
    //PNW FIND 1
    number: 19,
    title: "PNW find trivia 1",
    nextPath: "/museum/trivia",
    lastPath: "/museum/greatplains",
    stateCounters:[7, 3, 9, 19,]
  },
  {
    //PNW FIND 2
    number: 20,
    title: "PNW find trivia 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[8, 3, 9, 20,]
  },
  {
    //game 1
    number: 21,
    title: "PNW Lesson 1",
    nextPath: "/museum/lesson",
    lastPath: "/museum/trivia",
    stateCounters:[9, 3, 9, 21,]
  },
  {
    number: 22,
    title: "PNW Lesson 2",
    nextPath: "/museum/lesson",
    lastPath: "/museum/lesson",
    stateCounters:[9, 3, 10, 22,]
  },
  {
    number: 23,
    title: "PNW Lesson 3",
    nextPath: "/museum/pacificnw",
    lastPath: "/museum/lesson",
    stateCounters:[9, 3, 11, 23,]
  },
  {
    number: 24,
    title: "PNW Game",
    nextPath: "/museum/culturetoday",
    lastPath: "/museum/lesson",
    stateCounters:[9, 3, 11, 24,]
  },
  // Contemporary First Nations Q
  {   
    number: 25,
    title: "Contemporary Culture Intro",
    nextPath: "/museum/trivia",
    lastPath: "/museum/pacificnw",
    stateCounters:[9, 4, 11, 25,]
  },
  {   
    number: 26,
    title: "Contemporary Culture Q1",
    nextPath: "/museum/lesson",
    lastPath: "/museum/culturetoday",
    stateCounters:[9, 4, 11, 26,]
  },
  {
  number: 27,
  title: "Contemporary Culture Lesson 1",
  nextPath: "/museum/lesson",
  lastPath: "/museum/trivia",
  stateCounters:[9, 4, 12, 27,]
  } ,
  {
  number: 28,
  title: "Contemporary Culture Lesson 2",
  nextPath: "/museum/trivia",
  lastPath: "/museum/lesson",
  stateCounters:[9, 4, 13, 28,]
  },
  {
    number: 29,
    title: "Contemporary Culture Q2",
    nextPath: "/museum/theend",
    lastPath: "/museum/lesson",
    stateCounters:[10, 4, 13, 29,]
  },

];