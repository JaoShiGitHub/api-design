import express from "express";
import bodyParser from "body-parser";
import { devnightMembers } from "./data/devnight_members.js";

const app = express();
app.use(bodyParser.json()); // to be allowed to access the params

// "/trips"    = root | endpoint | endpoint path
// () => {...} = controller function | handler function
app.get("/members", (req, res) => {
  res.send("Attraction Data");
});

app.get("/members/:id", (req, res) => {
  const memberId = Number(req.params.id);
  const member = devnightMembers.filter((member) => {
    return member.id === memberId;
  });
  console.log(memberId);

  return res.json({ data: member[0] });
});

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
