const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express(); //* инициализируем экземпляр проекта

const PORT = process.env.PORT || 8081;
const BASE_URL = process.env.URL;

app.use(express.json()); //* для парса запроса json и запищи в req.body
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors()); //*

app.get("/pokemon", async (req, res) => {
  try {
    console.log(req.query);
    const { idPokemon } = req.query;
    const pokemon = await axios(BASE_URL, {
      params: {
        id: idPokemon,
      },
    });
    const { name, id } = pokemon.data;
    res.json({ name, id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use((req, res) => {
  res.send("<h1>Its response in middleware</h1>");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Sorry, some error in start server");
  }
  console.log(`Server was start on PORT ${PORT}`);
});
