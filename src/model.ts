import fs from "fs";

type Skill = {
  idCode: string;
  name: string;
  url: string;
  description: string;
};

type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skilList: string;
  skills: Skill[];
  todo: string;
};

const rawJobs: Job[] = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf8")
);

const skillInfos: any = JSON.parse(
  fs.readFileSync("./src/data/skillInfos.json", "utf8")
);

export const getJobs = () => {
  const jobs: Job[] = [];
  rawJobs.forEach((rawJob: Job) => {
    const job: Job = {
      ...rawJob,
      skills: module.buildSkills(rawJob.skilList),
    };
    jobs.push(job);
  });
  return jobs;
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
