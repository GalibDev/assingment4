
// Job Data 8 data


const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native and collaborate with backend teams.",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Design and develop modern landing pages and improve UI performance.",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Create dashboards and transform complex data into visual insights.",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Develop secure APIs and maintain scalable backend services.",
  },
  {
    id: 5,
    company: "FinTech Harbor",
    position: "Frontend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Build reusable UI components and optimize user experience.",
  },
  {
    id: 6,
    company: "HealthBridge",
    position: "UI Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$60/hr - $85/hr",
    description:
      "Develop accessible and responsive healthcare interfaces.",
  },
  {
    id: 7,
    company: "EduSpark",
    position: "JavaScript Developer",
    location: "Austin, TX",
    type: "Internship",
    salary: "$25/hr - $35/hr",
    description:
      "Assist in building interactive learning platforms.",
  },
  {
    id: 8,
    company: "GreenByte Tech",
    position: "Full Stack Developer",
    location: "Toronto, ON",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Work across frontend and backend to deliver scalable applications.",
  },
];

// =============================
// Render Function
// =============================

const jobsContainer = document.getElementById("jobs-container");

function renderJobs() {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <div class="card-header">
        <h4>${job.company}</h4>
        <button class="delete-btn">🗑</button>
      </div>

      <p class="position">${job.position}</p>
      <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>

      <span class="status">NOT APPLIED</span>

      <p class="description">${job.description}</p>

      <div class="card-actions">
        <button class="interview-btn">Interview</button>
        <button class="rejected-btn">Rejected</button>
      </div>
    `;

    jobsContainer.appendChild(card);
  });
}

// Initial Render
renderJobs();