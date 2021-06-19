const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colaboradorServicoSchema = new Schema({
    colaboradorId: { type: mongoose.Types.ObjectId, ref: "doc_colaborador", required: true },
    servicoId: { type: mongoose.Types.ObjectId, ref: "doc_servico", required: true },
    dataCadastroRegistro: { type: Date.now },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_colaboradorServico", colaboradorServicoSchema);