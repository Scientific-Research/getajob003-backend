import fs from "fs";
const _jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
const skillInfos = JSON.parse(fs.readFileSync("./src/data/skillInfos.json", "utf8"));
export const getJobs = () => {
    const jobs = [];
    _jobs.forEach((_job) => {
        const job = {
            ..._job,
            skills: [],
        };
        jobs.push(job);
    });
    return jobs;
};
export const getTodos = () => {
    return _jobs.map((job) => {
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