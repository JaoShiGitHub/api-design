import express from "express";
import bodyParser from "body-parser";
import membersRouter from "./apps/members_router.js";

const app = express();

const logging = (req, res, next) => {
  console.log(
    `IP: ${req.ip}, HttpMethod: ${req.method}, Endpoint: ${req.originalUrl}`
  );
  next();
};

app.use(logging);
app.use(bodyParser.json()); // to be allowed to access the params

app.use("/members", membersRouter);

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
