module.exports = {
    index: (rew, res, next) => {
        res.status(200).send( { mensagem: "Bem vindo a minha API"} )
    }
};