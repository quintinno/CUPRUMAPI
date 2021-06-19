const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empresaColaboradorSchema = new Schema({
    empresaId: { type: mongoose.Types.ObjectId, ref: "doc_empresa", required: true },
    colaboradorId: { type: mongoose.Types.ObjectId, ref: "doc_colaborador", required: true },
    dataCadastroRegistro: { type: Date.now },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_empresaColaborador", empresaColaboradorSchema);