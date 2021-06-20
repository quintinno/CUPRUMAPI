const express = require("express");
const Busboy = require("busboy");
const aws = require("../service/GerenciadorArquivoAWSService");
const router = express.Router();
const ServicoModel = require("../model/ServicoModel");
const ArquivoModel = require("../model/ArquivoModel");
const { json } = require("express");

router.post("/", async (request, response) => {
    try {
        let busboy = new Busboy({ headers: request.body });
            busboy.on("finish", async () => {
                const { empresaId } = request.body;
               let errorList = [];
               let arquivoList = [];
               
                if (request.files && Object.keys(request.files)) {
                    for (let key of Object.keys(request.files)) {
                        const file = request.files[key];
                        const nameParts = file.name.split(".");
                        const filename = `${new Date().getTime()}.${this.nameParts[nameParts.length - 1]}`;
                        const path = `empresa/${empresaId}/${filename}`;
                        const responseAws = await aws.uploadS3(file, path);
                        if (response.error) {
                            errorList.push({ error: true, message: error.message });
                        } else {
                            arquivoList.push(path);
                        }
                    }
                }

               if(errorList.length > 0) {
                response.json(errorList[0]);
                return false;
               }

               let jsonServico = JSON.parse(request.body);
               const servicoCadastrado = await ServicoModel(jsonServico).save();

               arquivoList = arquivoList.map( (arquivo) => {
                   ({
                    referenciaId: servicoCadastrado._id,
                    model: "doc_servico",
                    url: arquivo
                   })
               });

               await ArquivoModel.insertMany(arquivoList);

               response.json({ servico: servicoCadastrado, arquivoList });

            });
        const servicoCadastrado = await new ServicoModel(request.body).save();
        response.json({ servicoCadastrado })
    } catch(error) {
        response.json({ erro: true, mensagem: error.message });
    }
});

module.exports = router;