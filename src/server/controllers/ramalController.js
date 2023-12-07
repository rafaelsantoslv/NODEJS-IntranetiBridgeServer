const { body, validationResult } = require("express-validator");
const { validateRamal } = require("@middleware/authMiddleware.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tabRamais = require('@models/tabramais');


const adicionaRamal = async (req, res) => {
    try {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(401).json({ status: 401, message: errors.array()})
        }

        const { ramal, status , registro, senha, nomeOperador, anydesk, instalacao, empresa} = req.body

        const addRamal = await tabRamais.create({
            ramal: ramal,
            status: status,
            registro: registro,
            senha: senha,
            nomeOperador: nomeOperador,
            anydesk: anydesk,
            instalacao: instalacao,
            empresa: empresa
        })


        return res.status(201).json({status:201, message: "created"})

    } catch(error) {
        console.log(error)
        // const messageError = error
        return res.status(401).json({message: "Erro ao enviar registro", error: error})
    }
}


module.exports = {
    adicionaRamal
};