const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empresaSchema = new Schema({
    nome: { type: String, required: [true, "Campo Obrigatório"] },
    foto: String,
    imagemCapa: String,
    email: { type: String, required: [true, "Campo Obrigatório"] },
    senha: { type: String, default: null },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String
    },
    // geolocalizacao: {
    //     tipo: String,
    //     coordenadas: Array
    // },
    // dataCadastroRegistro: { type: Date.now, },
    // usuarioAtualizacaoRegistro: { type: String, },
});

// empresaSchema.index({ geolocalizacao: "2dsphere" });

module.exports = mongoose.model("doc_empresa", empresaSchema);