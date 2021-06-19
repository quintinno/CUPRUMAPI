const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colaboradorSchema = new Schema({
    nome: { type: String, required: [true, "Campo Obrigatório"] },
    telefone: String,
    email: { type: String, required: [true, "Campo Obrigatório"] },
    senha: { type: String, default: null },
    senha: { type: String },
    dataNascimento: { type: String, required: true },
    sexo: { type: String, enum: ["Masculino", "Feminino"] },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    contaBancaria: {
        titular: { type: String, required: true },
        cpfCnpj: { type: String, required: true },
        banco: { type: String, required: true },
        tipoContaBancaria: { type: String, required: true },
        agenciaBancaria: { type: String, required: true },
        numeroContaBancaria: { type: String, required: true },
        numeroVerificador: { type: String, required: true },
    },
    recipientId: {
        type: String, required: true,
    },
    dataCadastroRegistro: { type: Date.now, },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_colaborador", colaboradorSchema);