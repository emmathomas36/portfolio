import {
    sLogin,
    sFigma, 
    sDash, 
    sMatch, 
    sVideo,
    myLifeCover,
    oldMyLife
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
        mainImage: myLifeCover,
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

export const myLife = {
    video: "",
    description: "This is a semester long project in my Prototyping and Usability testing course. It was completed with a group, and we had to identify a design problem, and then go through the iterative process of prototyping, researching, and evaluating until we got to our high fidelity prototype. We chose to redesign MyLife, which is the housing and dining portal that RIT uses. ",
    link: "https://emmathomas36.github.io/iste264group7/",
    hifiFigma: "https://www.figma.com/proto/rzILLYdQGzcSFDDgBNa0kf/Hi-Fi-Prototype?node-id=6%3A1767&scaling=min-zoom&page-id=2%3A47&starting-point-node-id=6%3A1767&show-proto-sidebar=1",
    planning: {
        overview: "We created a document for the analysis of our design problem, which included our customer, stakeholders, the design problem, proposed new user flows, and some examples of the main issues that we were going to fix. ",
        stakeholders: "The main stakeholders are the students, who use this portal for important things, such as on campus housing and dining. Talking to students revealed many aspects of the design problems. The other stakeholders would be the RIT administration,, including IT Services and RIT Housing and Dining.",
        designProblem: "The myLife portal is used for housing applications, meal plan selection, employment forms, and more. The current interface is very hard to use. The main issues and pain points we found on our initial analysis include no global navigation, you can only get to the main pages from the home page. There is also no clear and consistant homepage, and the entire header is clickable and will reroute you back to home, which can cause errors and accidental clicks, and some links take you to a '404 Page Not Found'. The grouping of information is odd, and there are unneccesary steps to log on. The layout has ineffective spacing, and the text is hard to read. There is also a lack of user confirmation and clarity in instructions.",
        currentPortal: oldMyLife,
        link: "https://emmathomas36.github.io/iste264group7/"
    },
    lofi: {
        description: "",
        oldFlow: "",
        newFlow: "",
        link: "https://emmathomas36.github.io/iste264group7/lofi.html",
        image: ""
    },
    lofiTest: {
       
    },
    hifi: {

    },
    hifiTest: {

    }
}
