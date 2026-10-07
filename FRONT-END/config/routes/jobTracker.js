// jobTracker.js

const jobs = [
    {
        company: "TCS",
        role: "MERN Stack Developer",
        status: "Applied"
    },
    {
        company: "Infosys",
        role: "Backend Developer",
        status: "Interview"
    },
    {
        company: "Accenture",
        role: "Software Engineer",
        status: "Applied"
    }
];

// Display all jobs
function showJobs() {
    console.log("===== JOB TRACKER =====");

    jobs.forEach((job, index) => {
        console.log(`${index + 1}. ${job.company}`);
        console.log(`   Role: ${job.role}`);
        console.log(`   Status: ${job.status}`);
        console.log("----------------------");
    });
}

// Add a new job
function addJob(company, role, status) {
    const newJob = {
        company: company,
        role: role,
        status: status
    };

    jobs.push(newJob);

    console.log(`Job added: ${company} - ${role}`);
}

// Update job status
function updateStatus(index, newStatus) {
    if (index >= 0 && index < jobs.length) {
        jobs[index].status = newStatus;
        console.log("Job status updated!");
    } else {
        console.log("Invalid job number.");
    }
}

// Count jobs
function countJobs() {
    console.log(`Total Jobs: ${jobs.length}`);
}

// Run functions
showJobs();

addJob(
    "Microsoft",
    "Junior Software Engineer",
    "Applied"
);

updateStatus(0, "Selected");

countJobs();

showJobs();