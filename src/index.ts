import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRouter from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Configurações de Rotas
app.use(statusRouter);
app.use(usersRoute);
app.use(authorizationRoute);

//Configurações dos handlers de erro
app.use(errorHandler);


//Inicialização do servidor
app.listen(3000, ()=> {
    console.log('Escutando a porta 3000')
});