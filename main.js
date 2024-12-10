
//pk_test_51QUAU5L15jTnrWVNQIrGQuQvSt73Th218nrpxqXlTY3E5s5B6t6rdab09ONF5poPlJUTtY4P1mGHUiYeSiSvComk00jXphZiCb
const stripe = require("stripe")("sk_test_51QUAU5L15jTnrWVNBQWVqnvr0aBKK62rC3AjsMVZTH18a5M3mIOHBKhVwRuBb7pjTaC8TTkejhRinpFLH1qlfIJj00jjIc8oFU")
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

app.listen(3005, "82.96.137.238",() => console.log("server running on port 3001"));
