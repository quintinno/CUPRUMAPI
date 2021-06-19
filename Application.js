const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const application = express();

require("./resource/configuration/MongoConnectionConfiguration");

application.use(morgan("dev"));
application.set("port", 9090);
application.use(express.json());
application.use(busboy());
application.use(busboyBodyParser());
application.use(cors());

application.use("/empresa", require("./resource/route/EmpresaRoute"));

application.listen(application.get("port"), () => {
    console.log(`Servidor Rodando na Porta: ${application.get("port")}`);
});
