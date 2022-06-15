const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const path = require("path");


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

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
