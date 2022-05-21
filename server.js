const express = require("express");
const path = require("path");
const app = express(); //* инициализируем экземпляр проекта

const PORT = process.env.PORT || 8081;

app.use(express.json()); //* для парса запроса json и запищи в req.body
app.use(express.static(path.join(__dirname, "/public")));
app.use((req, res) => {
  res.json({ name: "Tolik" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Sorry, some error in start server");
  }
  console.log(`Server was start on PORT ${PORT}`);
});
