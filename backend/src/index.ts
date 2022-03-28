import express from "express";

const app = express();
const port = 3001;
const cors = require("cors");

const fs = require("fs");
const path = require("path");
app.use(cors());

app.get("/", (_req, res) => {
    res.send(
        "<h1>Congratulations 🎉 You got the WCC 2022 backend server running. Good luck with your task 🙌</h1>"
    );
});

app.use(cors());

/**
 * Example endpoint
 *  consumes: query parameter "name"
 *  returns: a JSON response
 */
app.get("/greeting", (req, res) => {
    res.json({ greeting: `Hello, ${req.query.name || "World"} 👋` });
});

/**
 * Autocomplete endpoint.
 *  consumes: query parameter "title"
 *  returns: a JSON response of max 10 entries
 */
app.get("/autocomplete", (req, res) => {
    const limit = 10;
    let data = fs.readFileSync(path.join(__dirname, "../src/data/smarty.json"));
    let cities = JSON.parse(data);
    let result = [];
    for (let city of cities) {
        if (
            city.displayname
                .toLowerCase()
                .includes(req.query.title.toString().toLowerCase())
        ) {
            result.push(city);
        }
        if (result.length >= limit) {
            break;
        }
    }
    res.json({ data: result });
});

app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}.`);
});
