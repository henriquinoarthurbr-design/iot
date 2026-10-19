const Temperatura = require('../models/temperatura');

const receberTemperatura = (req, res) => {


    const { temperatura } = req.body;
    const novaTemperatura = new Temperatura(temperatura);
    console.log(sensor)
    res.json({
        mensagem: 'Temperatura recebida com sucesso!',
        dados: sensor
    })
}
module.exports = {
    receberTemperatura
}