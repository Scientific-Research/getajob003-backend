import fs from "fs";
// import * as model from "./model.js";
import { Skill, Job } from "./types.js";

const rawJobs: Job[] = JSON.parse(
  fs.readFileSync("./src/data/jobs.json", "utf8")
);

const skillInfos: Skill[] = JSON.parse(
  fs.readFileSync("./src/data/skillInfos.json", "utf8")
);

export const getJobs = () => {
  const jobs: Job[] = [];
  rawJobs.forEach((rawJob: Job) => {
    const job: Job = {
      ...rawJob,
      skills: buildSkills(rawJob.skillList),
    };
    jobs.push(job);
  });
  return jobs;
};

const buildSkills = (skillList: string) => {
  const skills: Skill[] = [];
  const skillIdCodes = skillList.split(",").map((m) => m.trim());
  // console.log(skillIdCodes);
  skillIdCodes.forEach((skillIdCode) => {
    const _skill = skillInfos[skillIdCode];
    // console.log(_skill);
    // console.log(skillIdCodes);
    // console.log(skillIdCode);
    if (_skill === undefined) {
      const skill: Skill = {
        idCode: skillIdCode,
        name: "",
        url: "",
        description: "",
      };
      skills.push(skill);
    } else {
      // console.log(_skill);
      const skill: Skill = {
        // ..._skill,
        // skillIdCode,
        idCode: _skill.idCode,
        name: _skill.name,
        url: _skill.url,
        description: _skill.description,
      };
      skills.push(skill);
    }
  });
  return skills;
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
