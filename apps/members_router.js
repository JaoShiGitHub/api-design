import { Router } from "express";
import { devnightMembers } from "../data/devnight_members.js";
import { validateMemberData } from "./validateMemberData.js";

const memberRouter = Router();

// "/trips"    = root | endpoint | endpoint path
// () => {...} = controller function | handler function
memberRouter.get("/", (req, res) => {
  // res.send("Attraction Data");
  res.json({ data: devnightMembers });
});

memberRouter.get("/:id", (req, res) => {
  const memberId = Number(req.params.id);
  const member = devnightMembers.filter((member) => {
    return member.id === memberId;
  });
  console.log(memberId);

  return res.json({ data: member[0] });
});

// middleware
memberRouter.post("/", [validateMemberData], (req, res) => {
  const newMember = req.body;

  devnightMembers.push({
    id: devnightMembers[devnightMembers.length - 1].id + 1,
    ...newMember,
  });

  return res.json({ message: "Member info has been created" });
});

memberRouter.put("/:id", (req, res) => {
  const updateMember = req.body; // The data that the user needs to update
  const memberId = req.params.id; // The member that the user needs to update

  const updateMemberId = devnightMembers.findIndex(
    (member) => member.id == memberId
  );
  devnightMembers[updateMemberId] = {
    id: devnightMembers[updateMemberId].id,
    ...updateMember,
  };

  return res.json({
    message: "Member info has been updated",
  });
});

memberRouter.delete("/:id", (req, res) => {
  const deleteId = Number(req.params.id);
  const index = devnightMembers.findIndex((member) => member.id === deleteId);

  devnightMembers.splice(index, 1);

  return res.json({
    message: "The member has been deleted",
    devnightMembers,
  });
});

export default memberRouter;
