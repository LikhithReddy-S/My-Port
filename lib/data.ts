import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'slikhithreddy22@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Likhith Reddy, I am reaching out to you because...',

    oldPortfolio: 'https://likhith-reddy.vercel.app/',
    upworkProfile: 'https://www.linkedin.com/in/likhithreddys/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/slikhithreddy22' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/likhithreddys/' },
    { name: 'instagram', url: 'https://www.instagram.com/likhith__22/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Fast API',
            icon: '/logo/fastapi.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.png',
        },
        {
            name: 'VS Code',
            icon: '/logo/vscode.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Gamifying Habit Tracker',
        slug: 'gamifying-habit-tracker',
        liveUrl: 'https://gamifiyinghabittracker.vercel.app/',
        year: 2025,
        description: `
      The Gamifying Habit Tracker is a web application designed to make habit tracking more engaging and fun. By incorporating gamification elements like streaks, rewards, and progress tracking, it motivates users to build positive habits consistently. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
        <li>📅 Daily Quest System: Receive daily tasks and mark them as completed.</li>
        <li>🔥 Streak Tracking: Maintain streaks for consistent habit tracking.</li>
        <li>🏆 Rewards & Achievements: Earn points and unlock achievements.</li>
        <li>📊 Progress Visualization: Track performance with analytics.</li>
        <li>🛠 Customizable Tasks: Set and personalize habits based on your goals.</li>
        <li>🛠 Todo list: You can add and delete as your wish.</li>
      </ul><br/>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
      </ul>
      `,
        techStack: ['Next.js', 'Tailwind CSS', 'React Hook Form', 'Vercel'],
        thumbnail: '/projects/thumbnail/habit-hero.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [],
    },
    {
        title: 'Friends Web App',
        slug: 'epikcart',
        techStack: [
            'React',
            'React i18n',
            'CSS',
            'Flask api',
            'Api Integration',
            'SQLite',
        ],
        thumbnail: '/projects/thumbnail/friends-web-app.png',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/friends-web-app-1.png',
            '/projects/images/friends-web-app-2.png',
            '/projects/images/friends-web-app-3.png',
        ],
        liveUrl: 'https://react-and-python-friends-web-app.vercel.app/',
        year: 2024,
        description: `This is a web application built using React for the frontend and Python  Flask for the backend. The application allows users to manage and interact with their friends list.`,
        role: `Fullstack developer`,
    },
    {
        title: 'Game Hub',
        slug: 'game-hub',
        techStack: ['React js', 'css', 'game api'],
        thumbnail: '/projects/thumbnail/game-hub.png',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/game-hub-1.png',
            '/projects/images/game-hub-2.png',
        ],
        liveUrl: 'https://game-hub-gray-zeta.vercel.app/',
        year: 2023,
        description: '',
        role: ``,
    },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Anokha Co-ordinator',
        company: 'Amrita School of Engineering',
        duration: 'Nov 2024',
    },
    // {
    //     title: 'Frontend Developer',
    //     company: 'Epikcoders',
    //     duration: 'Oct 2023 - Nov 2024',
    // },
    // {
    //     title: 'Frontend Engineer',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
