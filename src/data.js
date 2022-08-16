import lsm1 from "./assets/lsm1.png";
import lsm2 from "./assets/lsm2.png";
import catthroat1 from "./assets/catthroat1.png";
import catthroat2 from "./assets/catthroat2.png";
import bop1 from "./assets/bop1.png";
import bop2 from "./assets/bop2.png";
import piano1 from "./assets/piano1.png";
import piano2 from "./assets/piano2.png";

const data = {
    work: [
        {
            company: "Capgemini",
            title: "Software Engineer",
            dates: "September 2021 - May 2022",
            description: `Worked on front-end for major credit card company in React, 
            primarily performing bugfixes and developing functional components under guidance 
            of a mentor. Trained and certified in Java and Spring Boot. Gained experience 
            communicating with clients as a consultant.`,
        },
        {
            company: "MassDIGI",
            title: "Game Developer",
            dates: "January 2021 - May 2021",
            description: `Worked in a small team of artists, programmers, and designers to 
            make a mobile card game released in April 2021. Programmed many core mechanics 
            using C# and Unity and composed/recorded an orignial soundtrack.`,
        },
        {
            company: "Lockheed Martin",
            title: "Software Engineer Intern",
            dates: "June 2020 - August 2020",
            description: `Used Agile development cycle to create software solutions in C++. 
            Worked on comms system for submarine electronic warfare system and reorganized/updated 
            documentation. Diagnosed bugs and performed bugfixes Obtained security clearance to handle 
            classified information at the Secret level.`,
        }
    ],
    carouselImages: [lsm1, catthroat1, piano1, bop1],
    modals: [
        {
            title: "Lead Sheet Maker",
            description: `This is an early prototype of a social media app designed for musicians.
            It allows you to create, share, and playback lead sheets (charts that describe the 
            chords in a song). This is a fullstack application using the MERN stack.`,
            tags: "social media, mongodb, node, react, authentication",
            links: [
                { title: "link", href: "https://lead-sheet-maker.herokuapp.com/dashboard" },
                { title: "source", href: "https://github.com/djr5851/lead-sheet-maker" }
            ],
            image: lsm2
        },
        {
            title: "CatThroat Kitchen",
            description: `This is an animal themed baking card game made in Unity. It was developed 
            at MassDiGI in collaboration with two other programmers and two artists. I was 
            responsible for coding core mechanics as well as composing a soundtrack 
            and implementing sound effects.`,
            tags: "game design, unity, c#",
            links: [
                { title: "google play store", href: "https://play.google.com/store/apps/details?id=com.MassDiGI.Custard&hl=en_US&gl=US" },
                { title: "apple app store", href: "https://apps.apple.com/us/app/catthroat-kitchen/id1553484822" }
            ],
            image: catthroat2
        },
        {
            title: "Virtual Piano",
            description: `This is a lightweight app that uses JavaScript's MIDI functionality to display a virtual
            piano that can be played by a MIDI instrument. I built this because I wanted to display my digital piano during
            livestreams and recorded videos and I couldn't find an existing free lightweight solution.`,
            tags: "MIDI, JavaScript, CSS",
            links: [
            ],
            image: piano2
        },
        {
            title: "Banana Bop!",
            description: `Banana Bop is a VR game that lets you jam with a band of monkeys using virtual instruments!
             It s a collaboration of RIT programmers, artists, and musicians. The majority of work was done Fall 2020
              in a two person team consisting of myself and an RIT artist as an independent study.`,
            tags: "VR, Unity, C#",
            links: [
                { title: "Playthrough", href: "https://www.youtube.com/watch?v=Ji4UkLvGr6I&t=26s&ab_channel=bellearth" },
                { title: "Frameless Presentation", href: "https://www.youtube.com/watch?v=6f4L8Yt5H9M&" }
            ],
            image: bop2
        },

    ]
};

export default data;