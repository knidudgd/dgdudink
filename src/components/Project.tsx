export class Project{
    
    name: string;
    learned: string[];
    image: string;
    tools: string[];
    description: string[];
    blurb?: string;
    
    constructor(name: string, learned: string[], image: string, tools: string[], description: string[], blurb?: string) {
        
        this.name = name;
        this.learned = learned;
        this.image = image;
        this.tools = tools;
        this.description = description;
        this.blurb = blurb;

    }
}

export let HardCodedProjects : Project[] = [
    new Project("Python Minigame",
    ["Use hashmaps effectively",
    "Set up and use utility code like a generic event handler",
    "Build and debug programs",
    "Comfortably code in Python",
    ],
    require("../images/Proj2Pic.png"),
    ["Python", "Pygame"],
    [
    `
    A minigame in Python, using an old library called PyGame, 
    served as my introduction to programming. 
    The goal here was to, as a group, 
    create a collection of minigames running as a single application.
    `,
    `
    I started by writing a keyboard event handler, 
    while the rest of my team produced a mouse event handler, 
    a layer system and a generic loop to run all the games. 
    This is where I first learned about dictionaries, 
    which I now know as the hashmaps of Python.
    `,
    `
    I then got to use the backbone we created and if/else 
    my way into making a minigame: a top-down arcade game where 
    you use your short-ranged weapon to kill a number of enemies without getting killed. 
    I worked hard on getting the movement where I wanted it to be, with a good amount of 
    inertia so that it feels like you’re on a boat (did I mention it had a pirate theme?).
    `,
    `
    I also got a taste of using classes when adding the enemies that 
    randomly spawn over time and independently try to target the player.
    `,
    `
    Furthermore I successfully used recursion before learning about it in class, 
    though it was inside the game update loop that gets called every frame. 
    Needless to say, it was the wrong place and the wrong time, 
    but I learned a lot from the resulting mess and re-implementing it.
    `,
    `
    Though this was my only time using Python in a school project, 
    most of the skills I learned and got comfortable with would transfer 
    to later projects in other languages. 
    I also proceeded to study Python in my own time, 
    learning the ways of list comprehension and the various functional and object-oriented 
    tools the language offers. To this day I still have a preference for paradigm-agnostic languages. 
    As of this writing, Python is one of the languages I feel the most comfortable in.
    `
    ],
    "A little arcade game in Python"
    ),

    new Project("Techlapp",
    ["Style with JSX and Bootstrap",
    "Find a niche in a competent team",
    "Write JavaScript and HTML",
    ],
    require("../images/Proj3Pic.png"),
    ["Javascript", "React Native", "HTML", "Bootstrap"],
    [
        `
        We had the dream team.
        It was the last project of the year 
        and the second one where we got to make our own groups. 
        Everyone was sick of teammates who didn’t deliver, me not in the least. 
        So we made a team of reliable people. 
        Three experienced programmers who had 
        finished an MBO degree in CompSci before, and myself. 
        Naturally, the team decided to challenge itself. 
        We used React Native and Firebase, two technologies 
        that only one team member (a different one for each technology) 
        had previous exposure to. Without any support from the school, 
        who were recommending Android Studio, we set out to make our first mobile app.
        `,
        `
        Things started out rough for me. 
        Running an Android emulator didn’t sit well with my 
        laptop and testing directly on my phone didn’t go smoothly either. 
        My first commit ended up being some blindly written JavaScript, 
        a language I had no previous familiarity with, 
        and it needed fixing by my teammates before it ran.
        `,

        `
        Though with such competent teammates, 
        it was a challenge to even find what to work on, 
        I did end up finding my niches and getting my 
        first taste of React and JavaScript along the way. 
        `
        ,
        `
        I also did major work on the webpage that we used as an Admin interface. 
        Our actual project idea was to make an app for the school’s newly opened Techlab, 
        which was a place to borrow useful gadgets like Arduinos and Hololenses. 
        The admin page allowed management of the lab’s inventory of gadgets.
        `,
        `
        Thus along with my first taste of mobile development, 
        I also did web development for the first time. 
        I took to that quite fervently, given that it was much easier 
        to grasp than the rather arcane (at the time) stuff going on at the backend 
        and I instantly felt like I could make a real contribution. 
        `
        ,
        `
        That said, I did feel somewhat like I was given styling jobs 
        so I had something to do while the “big boys” did the hard backend work. 
        But it was an important stepping stone. 
        In my next project, I worked with several of the same people, 
        but the styling got shoved on to less trusted teammembers while I got a “promotion”. 
            But that, my friends, is a story for another time... 
        `
        ,
        
    ],
    "An app for the Tech Lab"
    ),

    new Project("OpenGL Adventures",
    ["Manipulate memory directly",
    "Manually set up class constructors and destructors",
    "Write header files",
    "Manipulate a simple 2D shape through OpenGL",
    ],
    require("../images/ProjGLPic.png"),
    ["C++", "OpenGL"],
    [
        `
        This one isn’t really a project in the same sense as the other items on here, 
        but rather a prolonged learning and experimentation experience. 
        Still, I figured if I failed to include it, 
        I would be missing out on an important part of my development as a programmer.
        `,
        `
        Wanting to try my hand at some 2D game programming, 
        I one day decided to learn OpenGL. 
        The best material on OpenGL uses C++, a language I had never used, 
        so this was also my first exposure to that. 
        As said before this wasn’t really a project. 
        Mostly it involved copying code and playing with it a little to learn. 
        But without it, most of the programming theory I had learned thus far 
        would never have crystallised in my mind.
        `,
        `
        One of the things I hate most when learning is having to memorise a magic trick 
        of sorts that works, without understanding the reasoning behind it. 
        When I understand the reasoning, not only can I use high-level languages and frameworks 
        with conviction, it also helps me think up the tricks myself 
        without having to fill my brain’s precious storage space 
        with loads of situational and framework-specific syntax.
        `,
        `
        Though I hold no ambition of specialising in low-level graphics development, 
        or any low-level development really, 
        I continue to strive to understand all the layers behind the stuff I work with.
        `,
    ],
    "A painful foray into graphics programming"
    ),

    new Project("MTG Webshop",
    ["Smoothly code in Typescript",
    "Make full-featured React components",
    "Rapidly debug code that isn’t my own",],
    require("../images/Proj4Pic.png"),
    ["Typescript", "React"],
    [
        `
        My biggest school-project yet, 
        spanning over a whole semester rather than a half-semester 
        like the ones before it. 
        We were second-years at this point, hardened veterans. 
        And all our knowledge gathered in the past year 
        would culminate into… A webshop… ?
        `,
        `
        To be honest, building a little webshop didn’t seem like a big deal to us at the time. 
        Two other team members and I had previously made a React Native app together, 
        so choosing to use React was a no-brainer, 
        though with Typescript this time. 
        Combine that with Bootstrap and everything seemed to be going pretty quick.
        `,
        `
        The remaining two group members were put in charge of styling, 
        though their bad CSS ended up throwing us some roadblocks. 
        More importantly though, I spent the entire time working on actual functionality.
        `,
        `
        This was no small project though. The goal was essentially a fully-featured webshop. 
        It needed to manage an inventory of multiple thousands, 
        search and filter through it and offer a full buying process all the way up to the order summary. 
        It also needed to store a persistent shopping cart 
        even when an unregistered user left and re-entered, 
        as well as allowing full account management and wishlists for registered users. 
        Not to mention our extra deckbuilder feature 
        and the challenge of managing the seemingly endless amount of special cases 
        that turned out to exist among Magic The Gathering trading cards 
        (including multiple card faces on one card and one card face on multiple cards.)
        `,
        `
        This project did turn out to be a long journey indeed, 
        and I feel like I really pulled my weight. 
        By the end of it, not only had I coded the entire userpage 
        and several features on other pages, 
        but I had fixed bugs throughout our frontend’s entire codebase 
        (our C# backend was a small thing managed by one team member 
        which did little more than provide an interface for the database).
        `,
        `
        This was the time when I really learned to step outside 
        the bubble of my own task and understand all the code around it. 
        From here on out, I could program as a member of a team.
        `,
    ],
    "A webshop for Magic The Gathering cards"
    ),
];