
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose");
app.use(express.json())


mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@maincluster.0s1c0.mongodb.net/?retryWrites=true&w=majority`
);

const { SettingModel } = require("./models");

app.get("/setting", async (request, response) => {
  const setting = await SettingModel.find();
  if(!setting || !setting?.length) return response.status(404).send("Configuração não encontrada")
  return response.send(setting[0]);
});

app.post("/setting", async (request, response) => {
  const { body } = request;
  const setting = await SettingModel.create(body);
  await SettingModel.deleteMany({_id: {$ne: setting._id}});
  return response.send(setting);
});

app.patch("/setting", async (request, response) => {
  const { body } = request;
  const setting = await SettingModel.create(body);
  await SettingModel.deleteMany({_id: {$ne: setting._id}});
  return response.send(setting);
});


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Listening at ${PORT}`))