module.exports = class Cliente {
    constructor(cliente) {
        this.id = cliente?.id
        this.nome = cliente?.nome //o ponto de interrogação é para caso venha vazio, colocar um undefined
        this.cpf = cliente?.cpf
        this.telefone = cliente?.telefone
        this.endereco = cliente?.endereco
        this.valor = cliente?.valor
    }

    //esses abaixo, são métodos estáticos
    // essa função traz os usuarios
    // para ler os dados de forma assincrona, usa-se o async

    static async salvar(cliente) {
        const objectLiteral = { ...cliente }
        const listaClientes = await this.lista()
        for (let i = 0; i < listaClientes.length; i++) {
            const clienteDb = listaClientes[i]
            if (clienteDb.nome == cliente.id) {
                clienteDb.nome == cliente.nome
                clienteDb.nome == cliente.endereco
                clienteDb.nome == cliente.telefone
                clienteDb.nome == cliente.valor
                exist = true
                break
            }
        }

        if (!exist) {
            const objectLiteral = { ...cliente }
            listaClientes.push(objectLiteral)
        }


        try {
            fs.writeFileSync('db/clientes.json', JSON.stringify(listaClientes), { encoding: "utf8" });
            clientes = JSON.parse(jsonClientes)
        } catch (err) {
            console.error(err);
        }


        console.log("=====================[")
        console.log(JSON.stringfy(objectLiteral))
        console.log("]=====================")

    }


    static async lista() {
        let clientes = []
        const fs = require('fs');

        try {
            const jsonClientes = await fs.readFileSync('db/clientes.json', 'utf8');
            clientes = JSON.parse(jsonClientes)
        } catch (err) {
            console.error(err);
        }
        return clientes
    }
}