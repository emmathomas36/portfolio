import {
    sLogin, sFigma, sDash, 
    sMatch, sVideo, myLifeCover,
    oldMyLife, oldFlow, newFlow,
    figmaSnap, hifiVideo, iSchoolCover,
    iSchoolVideo, playlistCover, playlistVideo,
    translationCover, galleryCover, cheer, covid, focus, 
    fruit, gears, goggles, maggie, sportsmanship, stairs,
    page1, page2, page3, page4, page5, page6, page7, page8,
    page9, page10, page11, page12, page13, page14, page15, 
    page16, page17, page18, page19, page20, playlist1, playlist2,
    playlist3, playlist4, playlist5, playlist6, playlist8, 
    playlist9, playlist10
} from './images'

export const personalInfo = [
    {
        name: "Emma Thomas",
        personalDescription: "I am a third year student athlete at Rochester Institute of Technology majoring in Human-Centered Computing with a minor in Web Development. " +
                            "Within my major, I am concentrating on front-end development and UX/UI design."
                                
    }
]

export const techProjectData = [
    {
        projectName: "SpotifyMatched",
        mainImage: sDash,
        description: "Hack-a-Thon intern project, completed at Vanguard",
        link: "spotifymatched"
    },
    {
        projectName: "RIT myLife Redesign",
        mainImage: myLifeCover,
        description: "",
        course: "",
        link: "mylife"
    },
    {
        projectName: "iSchool Web App",
        mainImage: iSchoolCover,
        description: "",
        course: "",
        link: "ischool"
    },
]

export const designProjectData = [
    {
        projectName: 'Graphic Translation - Company Identity',
        description: "",
        mainImage: translationCover,
        link: "translation"
    },
    {
        projectName: "Simplified Playlist Covers",
        description: "",
        mainImage: playlistCover,
        link: "playlist"
    },
    {
        projectName: "Art Gallery",
        description: "",
        mainImage: maggie,
        link: "gallery"
    }
]

export const spotifyMatched = {
    video: sVideo,
    description: "During my internship at Vanguard, I also participated in a Hack-a-thon style project with 7 other interns from different tech divisions. I worked on the frontend, and collaborated with the interns to connect our frontend to our backend. The concept of our project was to create an app that paired people within an organization based on their music taste. When users logged onto our site, they would see their own listening statistics, as well as a list of 'matches' with similar music taste. The front end was coded with React and Bootstrap, and the back end was done in Python and Flask. ",
    login: {
        image: sLogin,
        description: "Here is the login page, which prompts the user to log in with their Spotify credentials, and then allow us to view their data. We then redirect the user to their dashboard. Logging in also allowed our backend team to get the API access token for that user. Once they log in, their listening information was saved into our database."
    },
    figma: {
        image: sFigma,
        description: "Here is a screenshot of the Figma mockups. The left two were our original mockups, prior to learning that we cannot directly access the users' top genres. The right mockups are our revised designs."
    },
    dash: {
        image: sDash,
        description: "This is the main dashboard page. This page contains tabs for your matches, along with your percentage of similarity. This was done by analyzing and comparing users across our database. This page also displays your top songs and artists. The front end accessed the data by calling the back end's endpoints. "
    },
    match: {
        image: sMatch,
        description: "This page shows your selected match's top songs and artists, as well as the top song and artist that you have in common."
    }
}

export const myLife = {
    video: "",
    description: "This is a semester long project in my Prototyping and Usability testing course. It was completed with a group, and we had to identify a design problem, and then go through the iterative process of prototyping, researching, and evaluating until we got to our high fidelity prototype. We chose to redesign MyLife, which is the housing and dining portal that RIT uses. ",
    link: "https://emmathomas36.github.io/iste264group7/",
    hifiFigma: "https://www.figma.com/proto/rzILLYdQGzcSFDDgBNa0kf/Hi-Fi-Prototype?node-id=6%3A1767&scaling=min-zoom&page-id=2%3A47&starting-point-node-id=6%3A1767&show-proto-sidebar=1",
    planning: {
        overview: "We created a document for the analysis of our design problem, which included our customer, stakeholders, the design problem, proposed new user flows, and some examples of the main issues that we were going to fix. ",
        stakeholders: "The main stakeholders are the students, who use this portal for important things, such as on campus housing and dining. Talking to students revealed many aspects of the design problems. The other stakeholders would be the RIT administration,, including IT Services and RIT Housing and Dining.",
        designProblem: "The myLife portal is used for housing applications, meal plan selection, employment forms, and more. The current interface is very hard to use. The main issues and pain points we found on our initial analysis include no global navigation, you can only get to the main pages from the home page. There is also no clear and consistant homepage, and the entire header is clickable and will reroute you back to home, which can cause errors and accidental clicks, and some links take you to a '404 Page Not Found'. The grouping of information is odd, and there are unneccesary steps to log on. The layout has ineffective spacing, and the text is hard to read. There is also a lack of user confirmation and clarity in instructions.",
        currentPortal: oldMyLife
    },
    lofi: {
        description: "Our group focused on the layout and navigation of the homepage, and the entire housing and dining flow. Below is an example of the old user flow for the housing and dining application, as well as our new and revised housing and dining flow. More about the Lofi prototype and user flows can be found on the GitHub project site.",
        oldFlow: oldFlow,
        newFlow: newFlow,
        image: figmaSnap,
        figma: "https://www.figma.com/file/HlYKqKjuSkH1MM4Rj6noa8/Homework-2?node-id=0%3A1" 
    },
    lofiTest: {
       method: "Each group member met with two different people and had them talk through specific tasks on our lofi prototype. We had a welcome script and recorded observations about the interactions between the participants and our prototype. Each participant was assigned 4 tasks, one at a time. After completing the tasks, they completed a heuristic evaluation, which was an eight question google form.",
       tasks: ["You are an RIT Student and you need to log in and set up a housing and meal plan for the next school year.",
                "Submit a maintenance request for your bedroom.", "Go back and change the meal plan that you selected for next year.",
                "Find the roommate agreement."  ],
       findings: "Our findings are summarized in depth on the project site, under 'Homework 3 - Lofi Prototype Evaluation'. ",
       improvements: "Overall, our initial lofi prototype was successful, but we had refinements and improvements to make based on errors and confusion by the participants in the evaluation. The feedback led us to separating the housing and dining plans, adding more instruction for first time users, making meal plan options more specific and clear, adding feedback, and simplifying the maintenance page."
    },
    hifi: {
        description: "Here is a final walk through of the high fidelity prototype, which was also created in Figma, the link can also be accessed ",
        link: "https://www.figma.com/proto/rzILLYdQGzcSFDDgBNa0kf/Hi-Fi-Prototype?node-id=6%3A1767&scaling=min-zoom&page-id=2%3A47&starting-point-node-id=6%3A1767&show-proto-sidebar=1",
        video: hifiVideo,

    },
    hifiTest: {
        overview: "We tested our high fidelity prototype by having our participants sign a consent form, and then used Zoom to be able to have the participants walk through the prototype, while also recording video and audio. They also completed a heuristic evaluation at the end. The indepth write up of the evaluation can be found on the project website, under 'Homework 5 - Hifi Evaluation.' The tasks were modified based on the issues found during the lofi evaluation.",
        tasks: ["You no longer need campus housing and you want to change your meal plan for the 21-22 academic year. Log in and edit the meal plan, and then cancel your 21-22 housing request.",
                "Although this would typically be done at a later time, please complete both the housing and dining applications for 22-23 academic year.",
                "Go to complete the pending form."],
        findings: "We wrote out the specific participants results on the project site, but overall the feedback was positive. The participants agreed that the site was convenient, clear, and easy to use. The layout was well organized and easy to navigate. The main issues now are in the prototyping, becasue not everything is functional and clickable. Some other confusion arose from confusion on the wording of the tasks."
    }
}

export const iSchool = {
    video: iSchoolVideo,
    description: "This project was completed in my Client Programming course, and it was the first time I worked with both an extensive API, and a library. It is coded using jQuery and various plugins, and I used the RIT iSchool API to recreate their website.",
    apiLink: "http://www.ist.rit.edu/api/",
    completed: "I was successfully able to consume all the required data, and I used three different sources for my plugins. I used the accordion, tabs, and modal dialogs from jQuery UI, and then the data table and navigation bar plug ins from separate sources.",
    issues: "I had some issues overriding the styling of jQuery UI, and if I had more time, I would have worked on customizing the theming and writing my own styles."
}


export const Gallery = {
    description: "Throughout my time in high school, I took art every year, ending with AP Art and Design. My background in fine art is what made me want to go into a creative field, combining art and technology. My AP Portfolio concentration was centered around the life of student athletes.",
    art: [
        {
            image: covid,
            caption: "Shut Down - AP Portfolio Piece",
            description: "Acrylic on collaged paper"
        },
        {
            image: focus,
            caption: "Focus - AP Portfolio Piece",
            description: "Acrylic on collaged paper"
        },
        {
            image: fruit,
            caption: "Pre-game Snacks - AP Portfolio Piece",
            description: "Acrylic with chalkboard paint and chalk"
        },
        {
            image: cheer,
            caption: "Victory - AP Portfolio Piece",
            description: "Acrylic paint, pop art style"
        },
        {
            image: gears,
            caption: "Gears",
            description: "Oil Pastel on black paper"
        },
        {
            image: stairs,
            caption: "Perspective Staircase",
            description: "Observational drawing using colored pencil"
        },
        {
            image: maggie,
            caption: "Maggie",
            description: "Chalk pastels on blue paper"
        },{
            image: sportsmanship,
            caption: "Sportsmanship - AP Portfolio Piece",
            description: "Acrylic paint"
        },{
            image: goggles,
            caption: "Goggles",
            description: "Acrylic paint on top of a swimming kickboard"
        },
    ]
}

export const translation = {
    description: "Below is the slide deck that was composed for my graphic translation and logomark project. The slides will take you through the process of the translation, simplification, and then into the process of creating the logo and logomarks for a company. ",
    slides: [
        page1, page2, page3, page4, page5, page6, page7, page8,
        page9, page10, page11, page12, page13, page14, page15, page16,
        page17, page18, page19, page20
    ]
}


export const playlistCovers = {
    description: "This project was completed in my New Media Design Elements course. The goal was to create simple playlist covers in Figma, inspired by Apple music. I also added some animation to each cover, which can be seen in the video. I also created two fun covers, that did not have to follow the simple guidelines.",
    slides: [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6, playlist8, playlist9, playlist10],
    video: playlistVideo
}