
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose");
app.use(express.json())


mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@maincluster.0s1c0.mongodb.net/?retryWrites=true&w=majority`
);

const { DataModel } = require("./models");

app.get("/data/:id", async (request, response) => {
  const { id } = request.params;
  const data = await DataModel.findById(id);
  return response.send(data);
});

app.get("/data", async (request, response) => {
  const data = await DataModel.find();
  return response.send(data);
});

app.post("/data", async (request, response) => {
  const { body } = request;
  const newData = await DataModel.create(body);
  return response.send(newData);
});

app.patch("/data/:id", async (request, response) => {
  const { body } = request;
  const { id } = request.params;
  const updatedData = await DataModel.updateOne({ _id: id }, body);
  return response.send(updatedData);
});

app.delete("/data/:id", async (request, response) => {
  const { id } = request.params;
  const deleted = await DataModel.deleteOne({ _id: id });
  return response.send(deleted);
});


const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> console.log(`Listening at ${PORT}`))