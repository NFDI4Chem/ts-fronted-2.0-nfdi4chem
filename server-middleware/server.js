const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
app.use(cors());
const ontology = require("./server-middleware/ontology");
const chemOntology = require("./server-middleware/chemOntology");
const termsModule = require("./server-middleware/term");
const propertiesModule = require("./server-middleware/property");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// add middlewares
const root = require('path').join(__dirname, 'build');
app.use(express.static(root));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start express server on port 8000
app.listen(process.env.PORT || 8000, () => {
  console.log('server started');
});

app.disable("etag");

app.get("/", async function (req, res) {
  let data = [];
  data.push("OK ts backend is running");
  res.send(data);
});

app.get("/ontologies", cors(), async function (req, res) {
  let data = await ontology.getOntologies();
  res.send(data);
});

app.get("/ontologies/chemistry", cors(), async function (req, res) {
  let data = await chemOntology.getChemOntologies();
  res.send(data);
});

app.get("/ontologies/:ontologyId", cors(), async function (req, res) {
  let data = await ontology.getOneOntology(req.params.ontologyId);
  res.send(data);
});

app.get("/rootterms/:ontologyId", cors(), async function (req, res) {
  let data = await termsModule.getRootTerms(req.params.ontologyId);
  res.send(data);
});

app.post("/termchildren", cors(), async function (req, res) {
  let data = await termsModule.getChildren(req.body.childrenLink);
  res.send(data);
});

app.get("/rootproperties/:ontologyId", cors(), async function (req, res) {
  let data = await propertiesModule.getRootProperties(req.params.ontologyId);
  res.send(data);
});

app.post("/propertychildren", cors(), async function (req, res) {
  let data = await propertiesModule.getChildren(req.body.childrenLink);
  res.send(data);
});