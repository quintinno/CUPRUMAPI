const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    empresaId: { type: mongoose.Types.ObjectId, ref: "doc_empresa", required: true },
    servicoList: [{ type: mongoose.Types.ObjectId, ref: "doc_servico", required: true }],
    colaboradorList: [{ type: mongoose.Types.ObjectId, ref: "doc_servico", required: true }],
    dias: {
        type: [Number],
        required: true
    },
    dataInicioHorario: { type: Date.now },
    dataFimHorario: { type: Date.now },
    dataCadastroRegistro: { type: Date.now },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_cliente", clienteSchema);