import express from "express";
import cors from "cors";
import * as model from "./model.js";

const app = express();
app.use(cors());
const port = 3011;

app.get("/", (req: express.Request, res: express.Response) => {
  // res.send("job site api");
  res.send(model.getApiDocumentationHtml());
});

app.get("/jobs", (req: express.Request, res: express.Response) => {
  // res.json(jobs);
  res.json(model.getJobs());
});

app.get("/todos", (req: express.Request, res: express.Response) => {
  res.json(model.getTodos());
  // res.json(
  //   jobs.map((job) => {
  //     return {
  //       todo: job.todo,
  //       company: job.company,
  //       title: job.title,
  //     };
  //   })
  // );
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
