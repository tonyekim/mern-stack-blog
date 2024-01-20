import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://tony:otoly1992@mern-blog.whnjoda.mongodb.net/mern-blog?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
