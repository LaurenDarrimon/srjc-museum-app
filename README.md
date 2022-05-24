# North American Art Scavenger Hunt E-Learning Game
## Lauren Darrimon, Erin Potter, & Wayne Howlett

![round logo with black geometric pattern on light colored clay](/src/assets/images/logo/logo-500.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT) ![Language Badges](https://img.shields.io/github/languages/top/laurenDarrimon/srjc-museum-app?style=for-the-badge&logo=appveyor) ![Commits Badge](https://img.shields.io/github/last-commit/laurenDarrimon/srjc-museum-app?style=for-the-badge&logo=appveyor) ![Repo Size](https://img.shields.io/github/repo-size/laurenDarrimon/srjc-museum-app?style=for-the-badge&logo=appveyor) ![Repo Issues](https://img.shields.io/github/issues/laurenDarrimon/srjc-museum-app?style=for-the-badge&logo=appveyor)
    
### Description
Interactive e-learning application and scavenger hunt game for the Santa Rosa Junior College Multi-Cultural Museum, built using Node.js, React, Bootstrap React, React Router Dom, and React DnD. 

### Table of Contents

* [Link](#link)
* [Musuem](#musuem)
* [Playing](#playing)
* [Architecture](#architecture)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Thanks](#thanks)
* [Questions](#questions)
* [License](#license)

### Link 
🔗 
Link to application [North American Art Scavenger Hunt Game](http://polar-badlands-25618.herokuapp.com/)

### Museum 
The [Santa Rosa Junior College Multi-Cultural Museum](https://museum.santarosa.edu/) showcases art and cultural objects from four major groupings or regions of Western North America: California, the Southwest, the Great Plains, and the Pacific Northwest Coast. The game is roughly organized around those regions, with a special emphasis on the current indiginous peoples native to the land the college occupies, [the Pomo Tribes](https://en.wikipedia.org/wiki/Pomo) of Northern California. 

### Playing 
This immersive, interactive learning game is meant to be played alongside the exhibits and displays of Native American Art in the physical musuem. The game is designed especially for 4th-grade field trips, but fun for all ages. 

#### Playing In The Museum
The multiple choice trivia questions are meant for the player to go find the answers hidden away in the cultural objects, signs, and displays in the musuem itself. 

#### Playing Remotely from Anywhere
If you're not in the museum you can still play! Take your best guess or skip past any scavenger hunt questions with the NEXT button.  There is no penalty for guessing a wrong answer

The lesson slides and the four regional mini-games for each region can be played by anyone, anywhere. Each of the four regions has either a drag and drop game or a memory matching card game. Use the navigation menu to skip to any of these mini-games. 

### Installation
🔧
Download or clone the repository. 

Then, in order for this application to work, use Node.js to install dependencies including React, React Bootstrap, React Router Dom, and React Drag n Drop. To install all the dependencies at once, from the application's root directory run the following command line prompt: 

~~~
npm i 
~~~

This will install all the dependencies listed in the package.json. 

### Usage 
To run the application from the command line and open it in your browser, from the root directory run: 

~~~
npm run start
~~~

This will compile the application from your src dirctory into the build and public directories. Then, the app will open in your browser at http://localhost:3000/museum/

### Architecture

The main part of the app is in the /src directory. 

1. App.js



2. Assets 

    a. Images: Contains images organized by where they are used

    b. Data: Javascript objects that contain the informaton that is passed to the React components, the dofferent questions, answers, lessons, image paths, etc, are all contained in these data objects. 


3. Components

    These are reusable component sections of pages, like the nav bar, nav buttons, modals, and other partial elements that appear on pages. 

4. Pages

    These are reusable full-page templates, that will be dynamically populated with various information from the game data objects. The pages contain smaller components from /components. 

5. Utils

    Contain helper functions to help the game run. Item Types is a helper for the matching card games and Game Context is the context provider (see below).




### Reusable React Components 

### React Context API


### Contributing 
✍️ 
Lauren Darrimon, Erin Potter, and Wayne Howlett are the authors of this application. Find additional work on Lauren Darrimon's [Github profile.](http://github.com/laurenDarrimon).


### Questions
❓💌
Reach out to Lauren Darrimon, Erin Potter, Wayne Howlett at hello@laurenlalita.com if you have any questions, comments, or if you would like to contribute to the application. 


### Thanks
Special thanks to William McKay for generously sharing his family's living tadition of Pomo basket weaving with us. 

To Rachel Minor, the curator of the musuem, for her wealth of knowledge, endless stream of content, and boundless enthusiasm.

To Brenda Flyswithhawks for her invaluable insights and thoughtful feedback. 

To to Professor Ethan Wilde for all his encouragement and support, both technical and inspirational. 

To our many user testers for bearing with us through some glitchier early versions. 

Above all, we thank and honor the artists and craftspersons whose art, culture and traditions this little game is lucky enough to feature. The many skilled hands and hours that went into leaving such a beautiful legacy are visible in every knot, color, and bead. Thank you.  

### License
The license for this project is: [MIT](https://opensource.org/licenses/MIT)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)

