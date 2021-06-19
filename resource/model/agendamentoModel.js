const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agendamentoSchema = new Schema({
    empresaId: { type: mongoose.Types.ObjectId, ref: "doc_empresa", required: true },
    clienteId: { type: mongoose.Types.ObjectId, ref: "doc_cliente", required: true },
    servicoId: { type: mongoose.Types.ObjectId, ref: "doc_servico", required: true },
    colaboradorId: { type: mongoose.Types.ObjectId, ref: "doc_colaborador", required: true },
    dataAgendamento: { type: Date.now },
    comissao: { type: Number },
    valor: { type: Number },
    transacaoCodigo: { type: String },
    dataCadastroRegistro: { type: Date.now },
    usuarioAtualizacaoRegistro: { type: String },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_agendamento", agendamentoSchema);