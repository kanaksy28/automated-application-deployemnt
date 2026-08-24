const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hey this is KANAK YADAV! Automated deployment was triggered successfully through Jenkins Poll SCM!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on http://localhost:${PORT}`);
});