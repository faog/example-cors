const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//Enable CORS for a Single Route

let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  method: "POST"
}

app.post('/', cors(corsOptions), (req, res) =>{
  res.json({
      message: 'Acceso a Cors'
  });
});

app.post('/:name', cors(corsOptions), (req, res) =>{
  let name = req.params.name;

  res.json({
      message: `Hello ${name}`
  });
});

app.listen(3001, () => {
  console.log('server is listening on port 3001');
});
