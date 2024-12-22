const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({message:"Backend is running!"});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});