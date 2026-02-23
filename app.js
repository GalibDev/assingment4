 //(8 data)
let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile apps in React Native. Collaborate with product and QA teams to ship weekly releases.",
    status: "all",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create modern landing pages, optimize performance, and maintain a component-based UI system for client websites.",
    status: "all",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Design dashboards with clear storytelling. Work closely with analysts to turn raw metrics into visual insights.",
    status: "all",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer (Node.js)",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Build secure REST APIs, improve caching, and write maintainable tests. Experience with CI/CD is a plus.",
    status: "all",
  },
  {
    id: 5,
    companyName: "FinTech Harbor",
    position: "Frontend Engineer (React)",
    location: "Hybrid - New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Implement reusable UI components, improve accessibility, and ship features for customer onboarding flows.",
    status: "all",
  },
  {
    id: 6,
    companyName: "HealthBridge",
    position: "UI Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$60/hr - $85/hr",
    description:
      "Build responsive layouts for patient portals. Focus on clean UI, error states, and consistent design patterns.",
    status: "all",
  },
  {
    id: 7,
    companyName: "EduSpark",
    position: "JavaScript Developer",
    location: "Austin, TX",
    type: "Internship",
    salary: "$25/hr - $35/hr",
    description:
      "Assist in building interactive learning tools. Maintain features, fix bugs, and write clear documentation.",
    status: "all",
  },
  {
    id: 8,
    companyName: "GreenByte Tech",
    position: "Full Stack Developer",
    location: "Hybrid - Toronto, ON",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Develop features across frontend and backend. Work with databases, authentication, and deployment pipelines.",
    status: "all",
  },
];

//STATE 
let activeTab = "all";

// DOM
const jobsContainer = document.getElementById("jobs-container");
const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");
const jobCountEl = document.getElementById("job-count");
const tabs = document.querySelectorAll(".tab");

//HELPERS 
function getFilteredJobs(tab) {
  if (tab === "all") return jobs;
  return jobs.filter((job) => job.status === tab);
}

function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectedCountEl.innerText = rejected;
}

function renderEmptyState() {
  jobsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon" aria-hidden="true">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6"/>
          <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" stroke-width="1.6"/>
          <path d="M8 12h8M8 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>No jobs available</h3>
      <p>Check back soon for new job opportunities</p>
    </div>
  `;
}

function cardStatusLabel(status) {
  if (status === "all") return "NOT APPLIED";
  return status.toUpperCase();
}

function renderJobs(tab) {
  const filtered = getFilteredJobs(tab);

  // right-side count shows tab-wise count
  jobCountEl.innerText = filtered.length;

  // Empty state only for Interview/Rejected tabs
  if (tab !== "all" && filtered.length === 0) {
    renderEmptyState();
    return;
  }

  jobsContainer.innerHTML = filtered
    .map(
      (job) => `
      <div class="job-card">
        <div class="card-top">
          <h4 class="company">${job.companyName}</h4>
          <button class="delete-btn" title="Delete" data-action="delete" data-id="${job.id}">🗑</button>
        </div>

        <p class="position">${job.position}</p>
        <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>

        <span class="status-badge">${cardStatusLabel(job.status)}</span>

        <p class="description">${job.description}</p>

        <div class="card-actions">
          <button class="btn interview-btn ${job.status === "interview" ? "selected" : ""}"
                  style="${job.status === "interview" ? "background:#10b981;border-color:#10b981;" : ""}"
                  data-action="interview" data-id="${job.id}">
            Interview
          </button>

          <button class="btn rejected-btn ${job.status === "rejected" ? "selected" : ""}"
                  style="${job.status === "rejected" ? "background:#ef4444;border-color:#ef4444;" : ""}"
                  data-action="rejected" data-id="${job.id}">
            Rejected
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

function setTab(tabName) {
  activeTab = tabName;

  tabs.forEach((b) => b.classList.remove("active"));
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add("active");

  renderJobs(activeTab);
  updateDashboard();
}

// ACTIONS 
function handleInterview(id) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  job.status = "interview"; // toggle via switching status
  setTab(activeTab);
}

function handleRejected(id) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  job.status = "rejected"; // toggle via switching status
  setTab(activeTab);
}

function handleDelete(id) {
  const jobIndex = jobs.findIndex((j) => j.id === id);
  if (jobIndex === -1) return;

  jobs.splice(jobIndex, 1); // remove job
  setTab(activeTab);
}

// EVENTS 
// Tabs click
tabs.forEach((btn) => {
  btn.addEventListener("click", () => setTab(btn.dataset.tab));
});

// Event Delegation for cards
jobsContainer.addEventListener("click", (e) => {
  const actionBtn = e.target.closest("[data-action]");
  if (!actionBtn) return;

  const action = actionBtn.dataset.action;
  const id = Number(actionBtn.dataset.id);

  if (action === "interview") handleInterview(id);
  if (action === "rejected") handleRejected(id);
  if (action === "delete") handleDelete(id);
});

// INIT 
setTab("all");