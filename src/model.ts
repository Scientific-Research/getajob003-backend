import fs from "fs";

type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skilList: string;
  todo: string;
};

const jobs: Job[] = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));

const skillInfos: any = JSON.parse(
  fs.readFileSync("./src/data/skillInfos.json", "utf8")
);

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
