const express = require("express");
require("dotenv");
const app = express();
console.log('tam')
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is running on port 5000"));
