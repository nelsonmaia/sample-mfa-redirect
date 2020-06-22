/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

app.get('*', function (request, response){  
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
