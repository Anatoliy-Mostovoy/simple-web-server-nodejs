const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express(); //* инициализируем экземпляр проекта

const PORT = process.env.PORT || 8081;

app.use(express.json()); //* для парса запроса json и запищи в req.body
app.use(express.static(path.join(__dirname, "/public")));

app.get("/pokemon", async (req, res) => {
  const pokemon = await axios("https://pokeapi.co/api/v2/ability/", {
    params: { id: 1 },
  });

  res.json({ pokemon: pokemon.data.name });
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
