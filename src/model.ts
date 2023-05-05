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

const jobs = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf8")
) as Job[];

export const getJobs = () => {
  return jobs;
};

export const getApiDocumentationHtml = () => {
  return `
  
  <h1>GET A JOB API</h1>
  <ul>
  <li><a href="jobs">/jobs</a> - returns an array of job objects</li>
  </ul>
  `;
};
