
document.addEventListener('DOMContentLoaded', () => {
    fetch('jobs.json')
        .then(response => response.json())
        .then(jobs => {
            const jobListings = document.getElementById('job-listings');
            jobs.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job-listing');
                jobElement.innerHTML = `
                    <h2>${job.title}</h2>
                    <p>${job.company} - ${job.location}</p>
                    <a href="${job.url}" target="_blank">Apply Now</a>
                `;
                jobListings.appendChild(jobElement);
            });
        });
});
