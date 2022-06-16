const router = require("./Routes");
const app = require("express")();
const mongoose = require("mongoose").connect(
  "http://localhost:27017/{your db name}"
);
const PORT = 3000;

app.use(router);

app.listen(PORT, () => console.log(`express listening on port ${PORT}`));
