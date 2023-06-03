const userContentInner = `
  <div class="user-img">
    <img src="https://github.com/EduardoPanzo.png" alt="user" />
  </div>
  <div class="user-info">
    <span>EduardoPanzo</span>
    <em>eduardo@email.com</em>
  </div>
  <div class="user-edit">
    <i class="fas fa-edit"></i>
  </div>
`;

const toggleThemeInner = `
  <div>
    <i class="fas fa-sun sun"></i>
    <i class="fas fa-moon moon"></i>
  </div>
  <div>
    <span class="sun">Light</span>
    <span class="moon">Dark</span>
  </div>
`;

const tableBodyDataRecent = [
  {
    key: 1,
    name: "City",
    uploadAt: "Last Month",
    ext: "PNG image",
    size: "156 KB",
  },
  {
    key: 2,
    name: "Day 1333 App dashbords",
    uploadAt: "Just Now",
    ext: "InVision Studio",
    size: "2 MB",
  },
  {
    key: 3,
    name: "plus_icon",
    uploadAt: "Yestrday",
    ext: "SVG",
    size: "22 KB",
  },
];

const tableBodyDataImages = [
  {
    key: 1,
    name: "City",
    uploadAt: "Last Month",
    ext: "PNG image",
    size: "156 KB",
  },
  {
    key: 2,
    name: "Flow",
    uploadAt: "Just Now",
    ext: "JPG",
    size: "2 MB",
  },
  {
    key: 3,
    name: "plus_icon",
    uploadAt: "Yestrday",
    ext: "SVG",
    size: "22 KB",
  },
];
const tableBodyDataVideo = [
  {
    key: 1,
    name: "City",
    uploadAt: "Last Month",
    ext: "mp4",
    size: "10 MB",
  },
  {
    key: 2,
    name: "See Me",
    uploadAt: "Last Week",
    ext: "mkv",
    size: "21 MB",
  },
];
const tableBodyDataAudio = [
  {
    key: 1,
    name: "Beats",
    uploadAt: "Last Day",
    ext: "mp3",
    size: "3 MB",
  },
  {
    key: 2,
    name: "Day top",
    uploadAt: "Just Now",
    ext: "mp3",
    size: "3 MB",
  },
  {
    key: 3,
    name: "go go",
    uploadAt: "Yestrday",
    ext: "mp3",
    size: "3.2 MB",
  },
];
const tableBodyDataOthers = [
  {
    key: 1,
    name: "Found it",
    uploadAt: "Last Month",
    ext: "zip",
    size: "52 MB",
  },
  {
    key: 2,
    name: "Day 1333 App dashbords",
    uploadAt: "Just Now",
    ext: "InVision Studio",
    size: "2 MB",
  },
  {
    key: 3,
    name: "flow fla",
    uploadAt: "Yestrday",
    ext: "rar",
    size: "769 KB",
  },
];

const sideBarMenuItems = [
  {
    value: "Recent Files ",
    iconClass: "fas fa-clock",
    goTo: "handleMountBodyData(1)",
  },
  {
    value: "Images ",
    iconClass: "fas fa-images",
    goTo: "handleMountBodyData(2)",
  },
  {
    value: "Video ",
    iconClass: "fas fa-video",
    goTo: "handleMountBodyData(3)",
  },
  {
    value: "Audio ",
    iconClass: "fas fa-music",
    goTo: "handleMountBodyData(4)",
  },
  {
    value: "Others ",
    iconClass: "fas fa-file",
    goTo: "handleMountBodyData(5)",
  },
];
