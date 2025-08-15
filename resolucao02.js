class Hero{ //criando classe Hero
    constructor(nome, idade, tipo){ //criando construtor e os atributos da classe
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase() //toLowerCase é usado para tratar todas as variáveis de entrada como minúsculas.
    }

    tiposDeAtaque(){ //criando function com os tipos de ataque
        let attack = { //criando um JSON (ou criando um objeto attack) com chave (que é o tipo) e valor (que é o ataque). 
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }
        return attack[this.tipo] || "ataque desconhecido" //retorna o ataque correspondete ao tipo. Quando usamos colchetes, o que está dentro é interpretado como uma variável ou expressão, não como um nome fixo.
        //usando também o operador || (OU) para caso não tenha o tipo corretamente, apareça "ataque desconhecido"
    }

    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.tiposDeAtaque()}`); //criando a mensagem que irá imprimir na tela
    }


}

let hero2 = new Hero("Veigar", 1002, "Mago") //instanciando a classe
hero2.atacar() //chamando o método