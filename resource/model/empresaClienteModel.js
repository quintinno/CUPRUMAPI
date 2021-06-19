const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empresaClienteSchema = new Schema({
    empresaId: { type: mongoose.Types.ObjectId, ref: "doc_empresa", required: true },
    clienteId: { type: mongoose.Types.ObjectId, ref: "doc_cliente", required: true },
    dataCadastroRegistro: { type: Date.now },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_empresaCliente", empresaClienteSchema);