import express from "express";
import cors from "cors";
import * as model from "./model.js";
const app = express();
app.use(cors());
const port = 3011;
app.get("/", (req, res) => {
    // res.send("job site api");
    res.send(model.getApiDocumentationHtml());
});
app.get("/jobs", (req, res) => {
    // res.json(jobs);
    res.json(model.getJobs());
});
app.get("/todos", (req, res) => {
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
//# sourceMappingURL=server.js.map