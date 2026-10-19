const express = require('express');

const router = express.Router();

const app = express();
app.use(express.json());
app.use('/temperatura', temperaturaRoutes);

app.use(routes)

app.listen(3333, () => {
    console.log('Servidor Iot rodando na porta 3333');

});