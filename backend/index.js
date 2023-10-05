const cors = require("cors");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const stripe = require("stripe")(process.env.SEC);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working");
});

app.post("/payment", (req, res) => {
  const { formData, token } = req.body;

  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: formData.amount,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.listen(5000, () => console.log("Server is active on port 5000 "));
