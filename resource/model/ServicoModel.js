const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
    empresaId: { type: mongoose.Types.ObjectId, ref: "doc_empresa", required: true },
    titulo: { type: String },
    preco: { type: Number },
    comissao: { type: Number },
    duracao: { type: Number },
    recorrencia: { type: Number },
    descricao: { type: String },
    // dataCadastroRegistro: { type: Date.now, },
    usuarioAtualizacaoRegistro: { type: String },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo", "Excluído"], default: "Ativo" },
});

module.exports = mongoose.model("doc_servico", servicoSchema);