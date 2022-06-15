const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
