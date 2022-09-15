// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mohan",
  middleName: "",
  lastName: "Prabhakaran",
  message: " I like solving problems ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mohandeepak",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mohan.balboa.94",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/the_backpacker_guy_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mohan-prabhakaran/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Mohan.png"),
  imageSize: 375,
  message:
    "I am a Masters in Computer Science student at the Technical University of Munich. A Backend developer with 5 years of experience. A tech enthusiast with interest in programming and building stuff. I have a passion for travel and love mountains. Talking about mountains, here's one of my favourite quotes",
  // quotes:
  //   "It is not the mountain we conquer, but ourselves― Sir Edmund Hillary",
  resume: require("../editable-stuff/Resume_Mohan.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/Mohan.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/Mohan.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Data Structures & Algorithms", value: 85 },
    { name: "MongoDB", value: 80 },
    { name: "Spring Boot", value: 85 },
    { name: "Microservices", value: 80 },
    { name: "AWS", value: 70 },
    { name: "Docker", value: 70 },
    { name: "Gitlab CI/CD", value: 80 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 75 },
    { name: "Python", value: 70 },
    { name: "C#", value: 50 },
    { name: "Big Data", value: 60 },
    { name: "TDD/BDD", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Senior Backend Developer role! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mohandeepak94@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer I", // Here Add Company Name
      companylogo: require("../assets/img/JP-Morgan-Chase-Logo.png"),
      date: "June 2016 – Jan 2019",
    },
    {
      role: "Software Engineer II",
      companylogo: require("../assets/img/JP-Morgan-Chase-Logo.png"),
      date: "Feb 2020 – Mar 2021",
    },
    {
      role: "Working Student",
      companylogo: require("../assets/img/Rohde_&_Schwarz_Logo.svg.png"),
      date: "June 2021 – Present",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
