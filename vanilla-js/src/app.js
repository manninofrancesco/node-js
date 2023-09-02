const AppController = require("./controllers/appController");
const express = require("express");

const port = 3000;
const app = express();

app.get('/get', async (req, res) => {
  try {
    res.send(await new AppController().get())
  }
  catch (error) {
    res.send(`Error: ${error}`);
  }
})

app.get('/insert', async (req, res) => {
  try {
    await new AppController().insert(Math.floor(Math.random() * 9999999));
    res.redirect("/get");
  }
  catch (error) {
    res.send(`Error: ${error}`);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;