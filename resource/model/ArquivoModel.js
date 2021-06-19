const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arquivoSchema = new Schema({
    referenciaId: { type: Schema.Types.ObjectId, refPath: "model", required: true },
    model: {
        type: String,
        required: true,
        enum: ["doc_servico", "doc_empresa"]
    },
    url: { type: String, required: [true, "Campo Obrigatório"] },
    dataCadastroRegistro: { type: Date.now, },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_arquivo", arquivoSchema);