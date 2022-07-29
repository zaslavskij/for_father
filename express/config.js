require("dotenv").config();

const options = {
	port: process.env.PORT,
	folder: process.env.FOLDER,
};

module.exports = options;
