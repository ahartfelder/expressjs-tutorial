const express = require("express");
const app = express();
const PORT = 3000;
const groceriesList = [
  {
    item: "Apple",
    quantity: 5
  },
  {
    item: "Grapes",
    quantity: 2
  },
  {
    item: "Pineapple",
    quantity: 1
  }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (Object.keys(req.body).length) console.log(req.body);
  next();
});

app.get("/groceries", (req, res) => {
  res.send(groceriesList);
});

app.post ("/groceries", (req, res) => {
  groceriesList.push(...req.body);
  res.status(201).send(groceriesList);
});

app.listen(PORT, () => `Running Express Server on port ${PORT}`);
