module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://changi-im.github.io/`,
    // Your Name
    name: 'Changi Im',
    // Main Site Title
    title: `Hi, I'm Changi`,
    // Description that goes under your name in main bio
    description: `Electronic Engineering Student in South Korea`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://www.github.com/Changi-Im`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/changi-im-aa312a215/`,
    // Content of the About Me section
    about: `Welcome to Changi website!  
    I'm an enthusiastic and challenging engineer student in Korea. I'm always self-motivated and seeking how to live better life.  
    Currently, I'm working at Vision & Imaging Lab in Kyungpook National University and interested in image quality enhancement method via synthesizing those different types of information, such as visible - infrared images, overexposed - underexposed images, or multi-modal image sets. Of course, I have a mind to investigate more various fields in image processing / computer vision, such as object detection, super resolution, or computer graphics something like that.   
    I like to sharing ideas with people, like brainstorming. It is really fun to throw and catch any thoughts so that developing to fancy idea.
    Anyways, thanks to visit my website again! belows are more information about me.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Development of Spatial Characteristics Extraction Algorithm in Air Conditioning Space for Cooperative Control of Air Conditioning',
        description:
          `- Development of Relative Positioning Algorithm for Installed Air Conditioners Using Image Information  
          - Extraction of spatial features through product location and temperature changes in the living room`,
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Real-time Object Detection based on Yolo v7 for Traffic Safety System',
        description:
          '- Improving the speed and accuracy performance of detector learning networks by solving data imbalance and classification problems',
        //link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Smart Pet Robot',
        description:
          '- By developing a pet robot that provides psychological stability and smart home care functions, it helps depressed patients, the elderly living alone, the disabled, and people with cognitive difficulties.',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Kyungpook National University',
        description: 'B.S. in Electronics Engineering, February 2018 - Present (Military leave of absence for 2 years)',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],

    publications: [
      {
        name: 'Tone Image Classification and Weighted Learning for Visible and NIR Image Fusion',
        description: 'B.S. in Electronics Engineering, February 2018 - Present (Military leave of absence for 2 years)',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Java, C/C++, MATLAB, Verilog',
      },
      {
        name: 'Frameworks',
        description: 'NumPy, PyTorch, TensorFlow, OpenCV',
      },
      {
        name: 'Others',
        description:
          'Raspberry Pi, ARM embedded microcontroller, Oscilloscope',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-EPX98MQ0GB`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
