import fs from "fs";
const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
export const getJobs = () => {
    return jobs;
};
export const getTodos = () => {
    return jobs.map((job) => {
        return {
            todo: job.todo,
            company: job.company,
            title: job.title,
        };
    });
};
export const getApiDocumentationHtml = () => {
    return `
  
  <h1>GET A JOB API</h1>
  <ul>
  <li><a href="jobs">/jobs</a> - returns an array of job objects</li>
  </ul>
  `;
};
//# sourceMappingURL=model.js.map