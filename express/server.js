const express = require("express");
const config = require("./config");
const path = require("path");
const fs = require("fs").promises;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
	const normalizedPath = path.normalize(config.folder);

	let files = await fs.readdir(path.normalize(config.folder));

	files = files.map((f) => ({
		fileName: f,
		filePath: path.join(normalizedPath, f).replace(config.folder, ""),
		shown: true,
	}));

	res.json(files);
});

app.listen(config.port, () => {
	console.log(`folder is: ${config.folder}`);
});
