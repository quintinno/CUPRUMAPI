const express = require("express");
const router = express.Router();
const EmpresaModel = require("../model/EmpresaModel");
const ServicoModel = require("../model/ServicoModel");

router.post("/", async (request, response) => {
    try {
        const empresaModel = await new EmpresaModel(request.body).save();
        response.json({ empresaModel });
    } catch(error) {
        response.json({ erro: true, mensagem: error.message });
    }
});

router.get("/", async (request, response) => {
    try {
        const empresaModel = await EmpresaModel.find();
        response.json({ empresaModel });
    } catch(error) {
        response.json({ erro: true, mensagem: error.message });
    }
});

router.get("/servico/:empresaId", async (request, response) => {
    try {
        const empresaIdParametro = request.params.empresaId;
        const servicoCadastrado = await ServicoModel.find({
            empresaId: empresaIdParametro,
            situacaoRegistro: "Ativo"
        }).select("_id titulo");
        response.json({ servico: servicoCadastrado.map( (servico_) => ({ label: servico_.titulo, value: servico_._id }))});
    } catch(error) {
        response.json({ erro: true, mensagem: error.message });
    }
});

module.exports = router;