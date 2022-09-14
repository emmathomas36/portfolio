import {
    sLogin,
    sFigma, 
    sDash, 
    sMatch, 
    sVideo,
    myLife
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
        description: "",
        course: "",
        link: "spotifymatched"
    },
    {
        projectName: "RIT myLife Redesign",
        mainImage: myLife,
        description: "",
        course: "",
        link: "mylife"
    },
    {
        projectName: "iSchool Web App",
        mainImage: "",
        slideImages: [],
        description: "",
        course: "",
        link: "ischool"
    },
    {
        projectName: "Flutter Recipe App",
        mainImage: "",
        slideImages: [],
        description: "",
        course: "",
        link: "recipe"
    },
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
        description: "Here is a screenshot of the Figma mockups. The left two were out original mockups, prior to learning that we cannot directly access the users' top genres. The right mockups are our revised designs."
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
