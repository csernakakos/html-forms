const path = require("path");
const express = require("express");
const {validationResult} = require("express-validator");
const {requireFirstName, requireLastName, requireEmail} = require("./validator");
const PORT = 3001;
const app = express();

app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: true, limit: "10kb"}));
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req,res) => {
    res.sendFile("../frontend/index.html", { root: __dirname });
});

app.post("/",
    [
        requireFirstName,
        requireLastName,
        requireEmail,
    ], 
    (req, res) => {

    console.log("POST RECEIVED:", req.body);

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.json({
            postReceived: true,
            postAccepted: false,
            errors
        })
    }
 
    res.json({
        postReceived: true,
        postAccepted: true,
        data: req.body,
    })
})

app.listen(PORT, () => {console.log(`listening on ${PORT}...`)})