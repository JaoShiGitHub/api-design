import express from "express";

const app = express();

// "/trips"    = root | endpoint | endpoint path
// () => {...} = controller function | handler function
app.get("/trips", (req, res) => {
  res.send("Attraction Data");
});

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
