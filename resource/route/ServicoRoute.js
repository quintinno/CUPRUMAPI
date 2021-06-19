const express = require("express");
const Busboy = require("busboy");
const aws = require("../service/GerenciadorArquivoAWSService");
const router = express.Router();
const ServicoModel = require("../model/ServicoModel");

router.post("/", async (request, response) => {
    try {
        let busboy = new Busboy({ headers: request.body });
            busboy.on("finish", async () => {
                
            });
        const servicoCadastrado = await new ServicoModel(request.body).save();
        response.json({ servicoCadastrado })
    } catch(error) {
        response.json({ erro: true, mensagem: error.message });
    }
});

module.exports = router;