import express from "express";
import bodyParser from "body-parser";
import { devnightMembers } from "./data/devnight_members.js";

const app = express();
app.use(bodyParser.json()); // to be allowed to access the params

// "/trips"    = root | endpoint | endpoint path
// () => {...} = controller function | handler function
app.get("/members", (req, res) => {
  // res.send("Attraction Data");
  res.json({ data: devnightMembers });
});

app.get("/members/:id", (req, res) => {
  const memberId = Number(req.params.id);
  const member = devnightMembers.filter((member) => {
    return member.id === memberId;
  });
  console.log(memberId);

  return res.json({ data: member[0] });
});

app.post("/members", (req, res) => {
  const newMember = req.body;

  devnightMembers.push({
    id: devnightMembers[devnightMembers.length - 1].id + 1,
    ...newMember,
  });

  return res.json({ message: "Member info has been created" });
});

app.put("/members/:id", (req, res) => {
  const updatedMember = req.body; // The data that the user needs to update
  const memberId = req.params.id; // The member that the user needs to update

  const updateMemberId = devnightMembers.findIndex(
    (member) => member.id == memberId
  );
  devnightMembers[updateMemberId] = {
    id: devnightMembers[updateMemberId].id,
    ...updatedMember,
  };

  return res.json({
    message: "Member info has been updated",
  });
});

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
