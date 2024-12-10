

const stripe = require("stripe")("")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());
app.get("/", async(req, res) => {
    
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data: {
                currency: 'eur',
                    product_data: {
                        name: 'don',
              },
                unit_amount: 200,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `https://taxyourfriends.me/success.html`,
        cancel_url: `https://taxyourfriends.me/cancel.html`,
    });
    
      console.log(session.url)
      res.json({url: session.url});
    });
    console.log("Sent message")

    app.get("/success", async(req, res) => {
        res.send("merci");
        });
    app.get("/cancel", async(req, res) => {
        res.send("merci");
        });

app.listen(3005, "3.75.158.163",() => console.log("server running on port 3005"));
