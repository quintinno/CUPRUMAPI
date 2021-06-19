const mongoose = require("mongoose");
const URI = "mongodb+srv://cuprum:cuprum@cluster0.nlzga.mongodb.net/dbcuprum?retryWrites=true&w=majority";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(URI).then( () => {
    console.log("Conexão com o Banco de Dados Concluída com Sucesso!");
}).catch( ()=> {
    console.log("Erro ao tentar estabelecer a Conexão com o Banco de Dados!");
});