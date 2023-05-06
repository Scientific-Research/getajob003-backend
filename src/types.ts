export type Skill = {
  idCode: string;
  name: string;
  url: string;
  description: string;
};

export const nullObjectSkill = {
  idCode: "",
  name: "",
  url: "",
  description: "",
};

export type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  skills: Skill[];
  todo: string;
};
