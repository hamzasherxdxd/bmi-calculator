const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/" + "../client/src/components/Calculator");
});

app.post("/bmi", (req, res) => {
  console.log(req.body);
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);

  if (bmi < 19) {
    res.send(
        {bmi: bmi }
    );
  } else if (19 <= bmi && bmi < 25) {
    res.send(
        {bmi: bmi }
    );
  } else if (25 <= bmi && bmi < 30) {
    res.send(
        {bmi: bmi }
    );
  } else {
    res.send(
        {bmi: bmi }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
