const courses = {
  web: {
    title: "Web Development",
    desc: "Learn to build modern, responsive websites.",
    points: ["HTML", "CSS", "JavaScript", "Projects"]
  },
  app: {
    title: "App Development",
    desc: "Build Android and Flutter applications.",
    points: ["Flutter", "Android", "UI Design"]
  },
  ml: {
    title: "Machine Learning",
    desc: "Build intelligent data-driven systems.",
    points: ["Python", "ML Models", "Datasets"]
  },
  cyber: {
    title: "Cyber Security",
    desc: "Learn to secure systems and networks.",
    points: ["Networking", "Ethical Hacking"]
  },
  devops: {
    title: "DevOps",
    desc: "Automate deployment and CI/CD pipelines.",
    points: ["Git", "Docker", "CI/CD"]
  },
  data: {
    title: "Data Science",
    desc: "Analyze data and build insights.",
    points: ["Python", "Data Analysis", "Visualization"]
  },
  ai: {
    title: "Artificial Intelligence",
    desc: "Understand intelligent systems.",
    points: ["AI Concepts", "Applications"]
  },
  cloud: {
    title: "Cloud Computing",
    desc: "Deploy scalable applications.",
    points: ["Cloud Basics", "Deployment"]
  },
  dsa: {
    title: "Data Structures & Algorithms",
    desc: "Crack coding interviews.",
    points: ["Arrays", "Trees", "Graphs"]
  },
  dbms: {
    title: "Database Management System",
    desc: "Learn SQL and database design.",
    points: ["SQL", "Normalization"]
  },
  os: {
    title: "Operating Systems",
    desc: "Understand how OS works.",
    points: ["Processes", "Memory"]
  },
  cn: {
    title: "Computer Networks",
    desc: "Learn networking fundamentals.",
    points: ["TCP/IP", "Protocols"]
  },
  blockchain: {
    title: "Blockchain",
    desc: "Build decentralized systems.",
    points: ["Blockchain Basics", "Security"]
  }
};

// GET COURSE KEY
const params = new URLSearchParams(window.location.search);
const courseKey = params.get("course");

// LOAD COURSE
if (courses[courseKey]) {
  document.getElementById("courseTitle").innerText = courses[courseKey].title;
  document.getElementById("courseDesc").innerText = courses[courseKey].desc;

  const ul = document.getElementById("coursePoints");
  courses[courseKey].points.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p;
    ul.appendChild(li);
  });
}

// ENROLL FUNCTION
function enrollCourse() {
  let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  if (!enrolled.includes(courseKey)) {
    enrolled.push(courseKey);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
    alert("Successfully enrolled!");
  } else {
    alert("You are already enrolled.");
  }
}
