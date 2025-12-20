let jobs = [];

fetch('jobs.json')
  .then(response => response.json())
  .then(data => {
    jobs = data;
    displayJobs(jobs);
  });

document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = jobs.filter(job => 
    job.title.toLowerCase().includes(term) || 
    job.location.toLowerCase().includes(term)
  );
  displayJobs(filtered);
});

function displayJobs(jobList) {
  const container = document.getElementById('jobsContainer');
  container.innerHTML = '';
  jobList.forEach(job => {
    const div = document.createElement('div');
    div.classList.add('job');
    div.innerHTML = `
      <h2>${job.title}</h2>
      <p>Company: ${job.company}</p>
      <p>Location: ${job.location}</p>
      <p>Experience: ${job.experience}</p>
      <p>Salary: ${job.salary}</p>
    `;
    container.appendChild(div);
  });
}
