const path = require("path");
const express = require("express");
const PORT = 3001;
const app = express();

app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: true, limit: "10kb"}));
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req,res) => {
    res.sendFile("../frontend/index.html", { root: __dirname });
});

app.post("/", (req, res) => {
    console.log("POST RECEIVED:", req.body);

    res.json({
        postReceived: true,
        data: req.body,
    })
})

app.listen(PORT, () => {console.log(`listening on ${PORT}...`)})