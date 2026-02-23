
// Job Data (8 jobs)

let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native and collaborate with backend teams.",
    status: "all",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Design and develop modern landing pages and improve UI performance for client websites.",
    status: "all",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Create dashboards and transform complex datasets into clear charts and business insights.",
    status: "all",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer (Node.js)",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Develop secure APIs, improve performance, and write maintainable backend services with tests.",
    status: "all",
  },
  {
    id: 5,
    company: "FinTech Harbor",
    position: "Frontend Engineer (React)",
    location: "Hybrid - New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Build reusable UI components, improve accessibility, and ship onboarding and payments features.",
    status: "all",
  },
  {
    id: 6,
    company: "HealthBridge",
    position: "UI Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$60/hr - $85/hr",
    description:
      "Develop accessible and responsive healthcare interfaces with consistent UI patterns.",
    status: "all",
  },
  {
    id: 7,
    company: "EduSpark",
    position: "JavaScript Developer",
    location: "Austin, TX",
    type: "Internship",
    salary: "$25/hr - $35/hr",
    description:
      "Assist in building interactive learning tools, fix bugs, and document features for the team.",
    status: "all",
  },
  {
    id: 8,
    company: "GreenByte Tech",
    position: "Full Stack Developer",
    location: "Hybrid - Toronto, ON",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Work across frontend and backend to deliver scalable applications and improve deployment workflow.",
    status: "all",
  },
];


// DOM

const jobsContainer = document.getElementById("jobs-container");

const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");


// Helpers

function updateDashboard() {
  totalCountEl.innerText = jobs.length;

  const interviewCount = jobs.filter((job) => job.status === "interview").length;
  const rejectedCount = jobs.filter((job) => job.status === "rejected").length;

  interviewCountEl.innerText = interviewCount;
  rejectedCountEl.innerText = rejectedCount;
}

function getStatusLabel(status) {
  if (status === "all") return "NOT APPLIED";
  return status.toUpperCase();
}


// Render

function renderJobs() {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <div class="card-header">
        <h4>${job.company}</h4>
        <button class="delete-btn" title="Delete (not active yet)">🗑</button>
      </div>

      <p class="position">${job.position}</p>
      <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>

      <span class="status">${getStatusLabel(job.status)}</span>

      <p class="description">${job.description}</p>

      <div class="card-actions">
        <button class="interview-btn" data-id="${job.id}">Interview</button>
        <button class="rejected-btn" data-id="${job.id}">Rejected</button>
      </div>
    `;

    jobsContainer.appendChild(card);
  });

  updateDashboard();
}


// Event Delegation (Interview / Rejected)

jobsContainer.addEventListener("click", (e) => {
  // Only handle clicks on interview/rejected buttons
  const isInterview = e.target.classList.contains("interview-btn");
  const isRejected = e.target.classList.contains("rejected-btn");

  if (!isInterview && !isRejected) return;

  const id = Number(e.target.dataset.id);
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  if (isInterview) job.status = "interview";
  if (isRejected) job.status = "rejected";

  renderJobs();
});

// Init

renderJobs();