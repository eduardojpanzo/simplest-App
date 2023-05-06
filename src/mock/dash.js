const userContentInner = `
  <div class="user-img">
    <img src="https://github.com/EduardoPanzo.png" alt="user" />
  </div>
  <div class="user-info">
    <span>EduardoPanzo</span>
    <em>eduardo@email.com</em>
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

const sideBarMenuItems = [
  { value: "Recent Files ", iconClass: "fas fa-clock", goTo: () => {} },
  { value: "Images ", iconClass: "fas fa-images", goTo: () => {} },
  { value: "Video ", iconClass: "fas fa-video", goTo: () => {} },
  { value: "Audio ", iconClass: "fas fa-music", goTo: () => {} },
  { value: "Others ", iconClass: "fas fa-file", goTo: () => {} },
];

const tableBodyData = [
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
