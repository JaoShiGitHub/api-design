import { Router } from "express";
import { devnightMembers } from "../data/devnight_members";

const membersRouter = Router();

membersRouter.get("/", (req, res) => {
  res.json();
});
