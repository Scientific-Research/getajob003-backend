import fs from "fs";
const rawJobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
const skillInfos = JSON.parse(fs.readFileSync("./src/data/skillInfos.json", "utf8"));
export const getJobs = () => {
    const jobs = [];
    rawJobs.forEach((rawJob) => {
        const job = {
            ...rawJob,
            skills: buildSkills(rawJob.skillList),
        };
        jobs.push(job);
    });
    return jobs;
};
const buildSkills = (skillList) => {
    console.log(skillList);
    return [];
};
export const getTodos = () => {
    return rawJobs.map((job) => {
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