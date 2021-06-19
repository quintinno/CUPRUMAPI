const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: { type: String, required: [true, "Campo Obrigatório"] },
    telefone: {
        type: String, 
        required: true,
    },
    email: { type: String, required: [true, "Campo Obrigatório"] },
    senha: { type: String, default: null },
    foto: String,
    dataNascimento: { type: String, required: true },
    sexo: { type: String, enum: ["Masculino", "Feminino"] },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    documento: {
        tipoDocumento: {
            type: String,
            enum: ["CPF", "CNPJ"], // corporation
            required: true
        },
        numeroDocumento: {
            type: String,
            required: true,
        }
    },
    dataCadastroRegistro: { type: Date.now, },
    usuarioAtualizacaoRegistro: { type: String, },
    situacaoRegistro: { type: String, enum: ["Ativo", "Inativo"], default: "Ativo" },
});

module.exports = mongoose.model("doc_cliente", clienteSchema);